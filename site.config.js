const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Teknoloji Forumu",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Teknoloji Haberleri",
    bio: "Her hafta yeni haber.",
    email: "ismetceberr@gmail.com",
    linkedin: "teknohaber",
    github: "saitamar10",
    instagram: "",
  },
  projects: [
    {
      name: `Teknoloji Forumu`,
      href: "https://morethan-log-tau-teal.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Teknoloji Forumu",
    description: "Teknoloji ile ilgili tüm haberler burada",
  },

  // CONFIG configration (required)
  link: "https://morethan-log-tau-teal.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "tr-TR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 İfadeler",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "ba215c28-3e32-422a-92a2-b8a2f4f8abb8", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
