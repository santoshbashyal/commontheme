import { ROUTES } from "@/common/routes";
import { useContacts } from "@/services/contacts/contactUs";
import { useEffect, useState } from "react";
import { ImEye } from "react-icons/im";
import { Link } from "react-router";

const ContactUs = () => {
  const { data, isLoading, isError } = useContacts();
  console.log(data);
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
    return <p>Failed to load</p>;
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
      <div className="text-2xl p-4 font-bold">Contact Us</div>
      <div className="m-5 border border-gray-300 border-separate overflow-hidden rounded-2xl ">
        <table className="border-collapse w-full  ">
          <thead>
            <tr className="border-b bg-[#f5f7f9] border-gray-300 text-gray-600 w-full font-bold">
              <td className=" p-2 ">Name</td>
              <td className=" p-2">Email</td>
              <td className=" p-2">Date</td>
              <td className=" p-2">Action</td>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((info) => (
              <tr
                className="text-gray-500 hover:text-gray-900 cursor-pointer  "
                key={info.id}
              >
                <td className="p-2">{info.name}</td>
                <td>{info.email}</td>
                <td>{new Date(info.created_at).toLocaleDateString()}</td>
                <td className="px-5 cursor-pointer text-gray-600  hover:text-green-500">
                  <Link
                    to={ROUTES.contactUs.details.replace(
                      ":id",
                      info.id.toString()
                    )}
                  >
                    <ImEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactUs;
