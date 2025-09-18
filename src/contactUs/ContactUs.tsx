import { useContacts } from "@/services/contacts/contactUs";
import { ImEye } from "react-icons/im";

const ContactUs = () => {
  const { data, isLoading, isError } = useContacts();
  console.log(data);
  if (isLoading) {
    return <p>loading contacts ....</p>;
  }
  if (isError) {
    return <p>Failed to load</p>;
  }

  return (
    <>
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
                  <ImEye />
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
