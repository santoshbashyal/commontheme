import type { SimpleColumn } from "../../../components/list/ListTableHeader";

export const MemberListColumn: SimpleColumn[] = [
  { label: "Name", accessor: "title" },
  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];
export const MemberListData = [
  {
    title: "Sandip Oli",
    author: "admin",
    date: "2024-12-12",
    status: "Pending",
  },
  {
    title: "Sandip Oli",
    author: "admin",
    date: "2024-12-12",
    status: "Active",
  },
  {
    title: "Sandip Oli",
    author: "admin",
    date: "2024-12-12",
    status: "Removed",
  },
  {
    title: "Sandip Oli",
    author: "admin",
    date: "2024-12-12",
    status: "Pending",
  },
];
