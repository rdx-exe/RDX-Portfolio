// Configuration file for environment variables
export const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    rssApiUrl: process.env.NEXT_PUBLIC_RSS_API_URL || 'https://api.rss2json.com/v1/api.json',
    externalLinks: {
        github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/rdx-exe',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/das-ritam',
        twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/rdx_exe',
    },
} as const;