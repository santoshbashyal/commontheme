import ListPage from "../../../components/list/ListPage";
import { categoryListColumns, categoryListData } from "./categoryListData";

export const CategoryListPage = () => {
  return (
    <ListPage
      title="Category List"
      columns={categoryListColumns}
      data={categoryListData}
    />
  );
};
