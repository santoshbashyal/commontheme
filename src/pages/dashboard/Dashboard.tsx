import { PostTitles } from "../../components/dashboard/postTitle";
import Statistics from "../../components/dashboard/Statistics";

const StatisticsData = [
  { title: "No. of Posts", count: 12 },
  { title: "No. of Category", count: 12 },
  { title: "Total Pages", count: 12 },
  { title: "Total Users", count: 12 },
  { title: "Total Subscribers", count: 12 },
];

const PostTitlesData = [
  { postTitle: "Sample page" },
  { postTitle: "Notes for Ag" },
  { postTitle: "Bachelor of Science in Agriculture" },
  { postTitle: "Principle of Economics" },
];

const Dashboard = () => {
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
          {PostTitlesData.map((data, index) => (
            <PostTitles key={index} postTitle={data.postTitle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
