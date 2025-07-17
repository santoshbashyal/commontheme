export interface UserRow {
  title: string;
  author: string;
  slug: string;
  date: string;
  status: "Pending" | "Posted" | "Deleted";
}
