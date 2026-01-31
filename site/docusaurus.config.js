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
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          path: "../docs",          // <- uses your existing /docs folder
          routeBasePath: "/",       // docs are the homepage
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig: {
    navbar: {
      title: "FYNX Docs",
      items: [
        {
          href: "https://github.com/EA-LA/fynx-docs",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  }
};

module.exports = config;
