import type { CategoryRow } from "./types";

export const categoryListColumns: {
  label: string;
  accessor: keyof CategoryRow | "actions";
}[] = [
  { label: "Name", accessor: "title" },
  { label: "Category", accessor: "category" },
  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];
export const categoryListData = [
  {
    title: "Category List",
    author: "Sandip ",
    category: "sampleee",
    date: "2024-21-11",
    status: "Pending",
  },
  {
    title: "Category List",
    author: "Sandip ",
    category: "sampleee",
    date: "2024-21-11",
    status: "Posted",
  },
  {
    title: "Category List",
    author: "Sandip ",
    category: "sampleee",
    date: "2024-21-11",
    status: "Deleted",
  },
];
