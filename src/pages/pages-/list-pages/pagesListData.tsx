import type { SimpleColumn } from "../../../components/list/ListTableHeader";
import type { PageRow } from "./types";

export const pageListColumns: SimpleColumn[] = [
  { label: "Name", accessor: "title" },

  { label: "Date", accessor: "date" },
  { label: "Status", accessor: "status" },
  { label: "Actions", accessor: "actions" },
];

export const pageListData: PageRow[] = [
  {
    title: "Santosh Bashyal",
    author: "Admin",

    date: "2024-11-24",
    status: "Pending",
  },
  {
    title: "Santosh Bashyal",
    author: "Admin",

    date: "2024-11-24",
    status: "Posted",
  },
  {
    title: "Santosh Bashyal",
    author: "Admin",

    date: "2024-11-24",
    status: "Deleted",
  },
  // more data...
];
