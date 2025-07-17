import ListPage from "../../../components/list/ListPage";
import { pageListColumns, pageListData } from "./pagesListData";

const PageListPage = () => {
  return (
    <ListPage title="Page List" columns={pageListColumns} data={pageListData} />
  );
};

export default PageListPage;
