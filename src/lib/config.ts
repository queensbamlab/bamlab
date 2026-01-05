export const siteConfig = {
  name: "BAM Lab | Queen's University",
  url: "",
  ogImage: "",
  description:
    "This is a framework for a research laboratory for universities.",
  navItems: [
    {
      label: "Research",
      items: [
        { href: "/research", label: "Research Areas" },
        // { href: "/research/research-tools", label: "Research Tools" },
      ],
    },
    {
      href: "/publications",
      label: "Publications",
    },
    {
      label: "Team",
      items: [
        { href: "/team/director", label: "Director" },
        { href: "/team/people", label: "People" },
      ],
    },
    {
      label: "News",
      href: "/news",
    },
  ],
  footerItems: [
    { href: "/research", label: "Research Areas" },
    // { href: "/research/research-tools", label: "Research Tools" },
    { href: "/publications", label: "Publications" },
    { href: "/team/director", label: "Director" },
    { href: "/team/people", label: "People" },
    { href: "/wiki", label: "Wiki" },
    { href: "/contact", label: "Contact" },
  ],
  // links: {
  //   website:
  //     "https://calicode.dev/?utm_source=bamlab_site&utm_medium=web&utm_campaign=footer_built_by_callout",
  // },
};
