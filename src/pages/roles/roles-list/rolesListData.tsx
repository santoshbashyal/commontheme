import type { SimpleColumn } from "../../../components/list/ListTableHeader";

export const RoleListColumn: SimpleColumn[] = [
  { label: "Roles", accessor: "title" },
  { label: "Permission", accessor: "permission" },
  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];
export const RoleListData = [
  {
    title: "Super Admin",
    author: "1 member",
    permission: "Post(EDRW), Blog(EDRW), Member(EDRW)",
    date: "2024-12-12",
    status: "Pending",
  },
  {
    title: " Admin",
    author: "3 member",
    permission: "Post(EDRW), Blog(EDRW), Member(EDRW)",
    date: "2024-12-12",
    status: "Posted",
  },
  {
    title: "Editor",
    author: "14 member",
    permission: "Post(EDRW), Blog(EDRW), Member(EDRW)",
    date: "2024-12-12",
    status: "Pending",
  },
  {
    title: "Publisher",
    author: "14 member",
    permission: "Post(EDRW), Blog(EDRW), Member(EDRW)",
    date: "2024-12-12",
    status: "Deleted",
  },
];
