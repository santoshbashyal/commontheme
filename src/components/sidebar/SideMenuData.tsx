export const SideMenuData = [
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
