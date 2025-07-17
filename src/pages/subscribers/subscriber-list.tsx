import ListPage from "../../components/list/ListPage";
import {
  SubscribersListColumn,
  SubscribersListData,
} from "./subscribersListData";

const SubscribersListPage = () => {
  return (
    <>
      <ListPage
        title="Subscribers List"
        columns={SubscribersListColumn}
        data={SubscribersListData}
      />
    </>
  );
};

export default SubscribersListPage;
