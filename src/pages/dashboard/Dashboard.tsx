import Statistics from "@/components/dashboard/Statistics";
import { usePosts } from "@/services/post/post";
import { useEffect, useState } from "react";

const StatisticsData = [
  { title: "No. of Posts", count: 12 },
  { title: "No. of Category", count: 12 },
  { title: "Total Pages", count: 12 },
  { title: "Total Users", count: 12 },
  { title: "Total Subscribers", count: 12 },
];

const Dashboard = () => {
  const { data, isLoading, isError } = usePosts();
  const [progress, setProgress] = useState(0);

  // 🔹 Animate progress when loading
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress((old) => {
          if (old < 90) return old + 5; // slowly go till 90%
          return old; // wait until data finishes
        });
      }, 200);
    } else {
      setProgress(100); // finish smoothly
      setTimeout(() => setProgress(0), 500); // reset after done
    }
    return () => clearInterval(timer);
  }, [isLoading]);

  if (isError) {
    return <p className="text-red-500">Data failed to load !!</p>;
  }
  return (
    <>
      {/* 🔹 Smooth loading bar */}
      {progress > 0 && (
        <div className="w-full h-1 bg-gray-200 fixed top-0 left-0 z-50">
          <div
            className="h-1 bg-green-500 transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
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
