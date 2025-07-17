import ListPage from "../../../components/list/ListPage";
import { RoleListColumn, RoleListData } from "./rolesListData";

const RolesListPage = () => {
  return (
    <>
      <ListPage title="Roles" columns={RoleListColumn} data={RoleListData} />
    </>
  );
};

export default RolesListPage;
