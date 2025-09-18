import { useContactsDetails } from "@/services/contacts/contactDetails";
import { useParams } from "react-router";

const ContactsDetail = () => {
  const { id } = useParams(); // get id from route
  const { data, isLoading, isError, error } = useContactsDetails(id!);
  console.log(data, "res");

  if (isLoading) return <p>Loading contact details...</p>;
  if (isError) return <p>Error loading contact: {error?.message}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md  mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      <div className="mb-2">
        <strong>Name:</strong> {data?.name}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {data?.email}
      </div>
      <div className="mb-2">
        <strong>Phone:</strong> {data?.contact_number}
      </div>

      <div className="mb-2">
        <strong>Message:</strong> {data?.message}
      </div>
      <div className="text-sm text-gray-500 mt-4">
        Created at: {new Date(data!.created_at).toLocaleString()}
      </div>
    </div>
  );
};

export default ContactsDetail;
