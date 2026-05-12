import { NextResponse } from 'next/server';

export const revalidate = 86400; // Cache for 24 hours

const GITHUB_USERNAME = 'abish05';

export async function GET() {
  try {
    // 1. Fetch total stars
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    let totalStars = 0;
    if (reposRes.ok) {
      const repos: { stargazers_count: number }[] = await reposRes.json();
      totalStars = repos.reduce((acc: number, repo) => acc + repo.stargazers_count, 0);
    }

    // 2. Fetch total merged PRs
    const prsRes = await fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+is:merged`);
    let totalPRs = 0;
    if (prsRes.ok) {
      const prsData = await prsRes.json();
      totalPRs = prsData.total_count || 0;
    }

    // 3. Fetch contributions & streak
    const contributionsRes = await fetch(`https://github-contributions-api.deno.dev/${GITHUB_USERNAME}.json`);
    let streak = 0;
    let heatmapData: number[] = [];
    
    if (contributionsRes.ok) {
      const data = await contributionsRes.json();
      
      // Flatten the grid of contributions
      interface ContributionDay {
        contributionCount: number;
        contributionLevel: string;
      }
      const flatContributions: ContributionDay[] = [];
      if (data.contributions && Array.isArray(data.contributions)) {
        data.contributions.forEach((week: ContributionDay[]) => {
          week.forEach((day: ContributionDay) => {
            flatContributions.push(day);
          });
        });
      }
      
      // Calculate streak counting backwards from the most recent day
      let currentStreak = 0;
      for (let i = flatContributions.length - 1; i >= 0; i--) {
        if (flatContributions[i].contributionCount > 0) {
          currentStreak++;
        } else {
          // If it's today and it's 0, we skip to yesterday. If yesterday is 0, streak is 0.
          if (i === flatContributions.length - 1) {
            continue; 
          }
          break;
        }
      }
      streak = currentStreak;

      // Extract heatmap data (last 364 days, 52 weeks * 7 days)
      const last364 = flatContributions.slice(-364);
      
      // Map contributionLevel to 0-4
      heatmapData = last364.map(day => {
        switch(day.contributionLevel) {
          case 'NONE': return 0;
          case 'FIRST_QUARTILE': return 1;
          case 'SECOND_QUARTILE': return 2;
          case 'THIRD_QUARTILE': return 3;
          case 'FOURTH_QUARTILE': return 4;
          default: return 0;
        }
      });
      
    } else {
      // Fallback dummy data if fetch fails
      heatmapData = Array(364).fill(0);
    }

    return NextResponse.json({
      stars: totalStars,
      prs: totalPRs,
      streak: streak,
      contributions: heatmapData
    });

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
