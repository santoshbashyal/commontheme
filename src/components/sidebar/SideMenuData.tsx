export const SideMenuData = [
  {
    label: "HeroSection",
    hasDropdown: false,
    link: "/herosection",
    subItems: [],
  },
  {
    label: "Posts",
    hasDropdown: true,
    subItems: [
      { name: "Add New", path: "/post/add" },
      { name: "List Post", path: "/post" },
    ],
  },
  {
    label: "Category",
    hasDropdown: true,
    subItems: [
      { name: "Add New", path: "/category/add" },
      { name: "List Category", path: "/category" },
    ],
  },
  {
    label: "Users",
    hasDropdown: true,
    subItems: [
      { name: "Add New", path: "/users/add" },
      { name: "List Users", path: "/users" },
    ],
  },
  {
    label: "Settings",
    link: "/settings",
    hasDropdown: false,
    subItems: [],
  },
  {
    label: "Pages",
    hasDropdown: true,
    subItems: [
      { name: "Add New", path: "/pages/add" },
      { name: "List Pages", path: "/pages" },
    ],
  },
  {
    label: "Members",
    hasDropdown: true,
    subItems: [
      { name: "Add New", path: "/members/add" },
      { name: "List Members", path: "/members" },
    ],
  },
  {
    label: "Disclaimer",
    link: "/disclaimer",
    hasDropDown: false,
    subItems: [],
  },
  {
    label: "Policy",
    hasDropdown: true,
    subItems: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  },
  {
    label: "Roles",
    hasDropdown: true,
    subItems: [
      { name: "Roles", path: "/roles" },
      { name: "Add New", path: "/roles/add" },
    ],
  },
  {
    label: "Subscribers ",
    link: "/subscribers",
    hasDropdown: false,
    subItems: [],
  },
];
