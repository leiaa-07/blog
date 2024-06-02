// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "leia's blog! :)",
  author: 'leia mayssa',
  fullName: 'leia mayssa',
  headerTitle: "leia's blog! :)",
  description: '',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://leia-mayssa.vercel.app/',
  analyticsURL:
    "https://analytics.us.umami.is/websites/56844b03-7fd7-460a-9618-8a62a6c9119d",
  siteRepo: '',
  siteLogo: '',
  image: '',
  socialBanner: '',
  email: '',
  github: '',
  facebook: '',
  linkedin: '',
  twitter: '',
  youtube: '',
  locale: 'en-US',
  socialAccounts: {
    github: '',
    linkedin: '',
    facebook: '',
  },
  analytics: {
    umamiWebsiteId: '56844b03-7fd7-460a-9618-8a62a6c9119d',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
