// modules/post/postListData.ts

import type { SimpleColumn } from "../../../components/list/ListTableHeader";

export const postListColumns: SimpleColumn[] = [
  { label: "Name", accessor: "title" },
  { label: "Category", accessor: "category" }, // could be "slug" in category list
  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];

export const postListData = [
  {
    title: "Sample Post",
    author: "Sandip Oli",
    category: "Sample Category",
    date: "2024-11-24",
    status: "Pending",
  },
  // ... more posts
];
