import ListPage from "../../../components/list/ListPage";
import { MemberListColumn, MemberListData } from "./memberListData";

const MembersListPage = () => {
  return (
    <>
      <ListPage
        title="Members List"
        columns={MemberListColumn}
        data={MemberListData}
      />
    </>
  );
};

export default MembersListPage;
