/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "welcome",
      label: "Welcome"
    },
    {
      type: "category",
      label: "App",
      items: ["app/overview"]
    },
    {
      type: "category",
      label: "Roadmap",
      items: ["roadmap/now"]
    }
  ]
};

module.exports = sidebars;
