import Statistics from "@/components/dashboard/Statistics";
import { usePosts } from "@/services/post/post";

const StatisticsData = [
  { title: "No. of Posts", count: 12 },
  { title: "No. of Category", count: 12 },
  { title: "Total Pages", count: 12 },
  { title: "Total Users", count: 12 },
  { title: "Total Subscribers", count: 12 },
];

const Dashboard = () => {
  const { data, isLoading, isError } = usePosts();
  if (isLoading) {
    return <p className="text-green-500"> Data is loading ...</p>;
  }
  if (isError) {
    return <p className="text-red-500">Data failed to load !!</p>;
  }
  return (
    <>
      <div className="font-extrabold text-2xl cursor-pointer text-gray-700 p-6">
        Dashboard
      </div>

      <div className="grid grid-cols-2 gap-4 mx-auto p-10 border border-gray-200 ">
        {StatisticsData.map((info, index) => (
          <Statistics key={index} title={info.title} count={info.count} />
        ))}
      </div>
      <div className="mt-3 py-4 pb-9 border border-gray-300">
        <div className="font-bold p-5 text-xl text-gray-700">Recent Posts</div>
        <div className="grid gap-2 px-10">
          {data?.map((info) => (
            <div
              key={info.ID}
              className="p-2 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg"
            >
              {info.post_title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
