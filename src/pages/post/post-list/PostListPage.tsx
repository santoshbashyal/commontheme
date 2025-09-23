import { usePosts } from "@/services/post/post";
import { ImEye } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

const PostListPage = () => {
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
    return <p className="text-red-500">Data failed to load</p>;
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
      <div className="text-2xl p-4 font-bold">Post List</div>
      <div className="m-5 border border-gray-300 border-separate overflow-hidden rounded-2xl ">
        <table className="border-collapse w-full  ">
          <thead>
            <tr className="border-b bg-[#f5f7f9] border-gray-300 text-gray-600 w-full font-bold">
              <td className=" p-2 ">Author name</td>
              <td className=" p-2">Post title</td>
              <td className=" p-2">Status</td>
              <td className=" p-2">Date</td>
              <td className=" p-2">Action</td>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((info) => (
              <tr
                className="text-gray-500 hover:text-gray-900 cursor-pointer  "
                key={info.ID}
              >
                <td className="p-2">{info.post_author}</td>
                <td>{info.post_name}</td>
                <td>{info.post_status}</td>
                <td>{new Date(info.post_date).toLocaleDateString()}</td>
                <td className="pr-5 cursor-pointer text-gray-600  ">
                  <div className="flex justify-center rounded-3xl bg-[#f5f7f9] gap-4">
                    <ImEye className="hover:text-green-500" />
                    <FaEdit className="hover:text-green-500 " />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostListPage;
