import ListPage from "../../../components/list/ListPage";
import { postListData, postListColumns } from "./postListData";

const PostListPage = () => {
  return (
    <ListPage title="Post List" columns={postListColumns} data={postListData} />
  );
};

export default PostListPage;
