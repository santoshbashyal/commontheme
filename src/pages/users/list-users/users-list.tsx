import { userListColumns, userListData } from "./userListData";
import ListPage from "../../../components/list/ListPage";

const UserListPage = () => {
  return (
    <ListPage title="User List" columns={userListColumns} data={userListData} />
  );
};

export default UserListPage;
