import type { UserRow } from "./types";

export const userListColumns: {
  label: string;
  accessor: keyof UserRow | "actions";
}[] = [
  { label: "Name", accessor: "title" },
  { label: "Slug", accessor: "slug" },
  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];

export const userListData: UserRow[] = [
  {
    title: "Santosh Bashyal",
    author: "Admin",
    slug: "santoshbashyal000@gmail.comn",
    date: "2024-11-24",
    status: "Pending",
  },
  {
    title: "Santosh Bashyal",
    author: "Admin",
    slug: "santosh-bashyal",
    date: "2024-11-24",
    status: "Posted",
  },
  {
    title: "Santosh Bashyal",
    author: "Admin",
    slug: "santosh-bashyal",
    date: "2024-11-24",
    status: "Deleted",
  },
  // more data...
];
