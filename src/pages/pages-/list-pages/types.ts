export interface PageRow {
  title: string;
  author: string;

  date: string;
  status: "Pending" | "Posted" | "Deleted";
}
