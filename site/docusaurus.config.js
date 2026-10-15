// @ts-check

const config = {
  title: "FYNX Docs",
  tagline: "FYNX Finance World Documentation",
  favicon: "img/favicon.ico",

  url: "https://ea-la.github.io",
  baseUrl: "/fynx-docs/",

  organizationName: "EA-LA",
  projectName: "fynx-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "../docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        sitemap: { changefreq: undefined, priority: undefined, ignorePatterns: ["**/tags/**"] },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [{name:"description",content:"FYNX documentation: app features, trading tools, developer resources and product direction."}],
    navbar: {
      title: "FYNX Docs",
      items: [
        {
          href: "https://github.com/EA-LA/fynx-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
