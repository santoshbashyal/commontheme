// import { PostListHeader } from "./partials/PostListHeader";
// import type { PostListRowProps } from "./partials/PostListRow";
// import PostNameList from "./partials/PostNameList";

// interface ListPageProps {
//   title: string;
//   headers: string[];
//   data: ListPageProps[];
// }

// const Data: ListRowProps[] = [
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Pending",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Posted",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Deleted",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Posted",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Pending",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Pending",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Deleted",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Posted",
//   },
//   {
//     title: "Sample Post",
//     author: "Sandip Oli",
//     category: "Sample Item",
//     date: "2024-11-24",
//     status: "Deleted",
//   },
// ];
// const headers = ["Name", "Category", "Date", "status", "Actions"];
// const ListPage = ({ title, headers, data }: ListPageProps) => {
//   return (
//     <>
//       <div className=" m-4">
//         <div className="m-6">
//           <ListPageHeader />
//         </div>
//         <div className=" m-6">
//           <ListTable headers={headers} data={Data} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ListPage;
//

// list/ListPage.ts
import { AddList } from "../list-post/AddPostList";
import { ListPostsFilter } from "../list-post/ListPostTitle";
import ListHeader from "./ListHeaderProps";
import ListTable from "./ListTable";
import type { SimpleColumn } from "./ListTableHeader";

interface ListPageProps {
  title: string;
  columns: SimpleColumn[];
  data: any[]; // Simple - accepts any data
}

function ListPage({ title, columns, data }: ListPageProps) {
  return (
    <div className="m-6">
      <ListHeader title={title} />

      <div className="flex border-b my-4 border-gray-400 justify-between">
        <ListPostsFilter />
        <AddList />
      </div>

      <div className="border border-gray-300 rounded-3xl">
        <ListTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default ListPage;
