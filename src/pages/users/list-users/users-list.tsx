import { userListColumns, userListData } from "./userListData";
import type { UserRow } from "./types";
import ListPage from "../../../components/list/ListPage";

const UserListPage = () => {
  return (
    <ListPage<UserRow>
      title="User List"
      columns={userListColumns}
      data={userListData}
    />
  );
};

export default UserListPage;
