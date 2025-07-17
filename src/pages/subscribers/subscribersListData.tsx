import type { SimpleColumn } from "../../components/list/ListTableHeader";

export const SubscribersListColumn: SimpleColumn[] = [
  { label: "Email", accessor: "email" },
  { label: "Date", accessor: "date" },
  { label: "Actions", accessor: "actions" },
];
export const SubscribersListData = [
  {
    email: "santoshbashyal000@gmail.com",
    date: "2024-12-12",
  },
  {
    email: "santoshbashyal000@gmail.com",
    date: "2024-12-12",
  },
  {
    email: "santoshbashyal000@gmail.com",
    date: "2024-12-12",
  },
  {
    email: "santoshbashyal000@gmail.com",
    date: "2024-12-12",
  },
];
