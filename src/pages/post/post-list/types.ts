export interface ListRowProps {
  title: string;
  author: string;
  category: string;
  date: string;
  status: "Pending" | "Posted" | "Deleted";
}
