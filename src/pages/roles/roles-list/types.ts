export interface RolesRow {
  title: string;
  author: string;
  permission: string;
  date: string;
  actions: string;
  status: "Pending" | "Posted" | "Deleted";
}
