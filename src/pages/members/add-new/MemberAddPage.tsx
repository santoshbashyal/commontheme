import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";
import ImageUploader from "../../../components/add-post/right-container/ImageUploader";
import TextBox from "../../../components/add-post/TextBox";
import MembersTitle from "./MembersTitle";

const MembersAddPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm: "",
    chooseRole: "",
    altImge: "",
    urlImage: "",
  });
  return (
    <>
      <div className="flex gap-4 p-4 ">
        <div className="w-full">
          <MembersTitle />
          <div>
            <TextBox
              onPublish={(val) => console.log("content:", val)}
              maxLength={2000}
              wrapperClass="rounded-2xl p-4"
              placeholder=" Begin writing here ... "
              textareaClass="h-60"
              showButton={true}
              buttonClass="bg-gray-700 px-7 p-1"
            />
          </div>
          <div className="my-5">
            <InputTitle
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
            />
          </div>
          <div className="my-5">
            <InputTitle
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Create Password"
            />
          </div>
          <div className="my-5">
            <InputTitle
              value={data.confirm}
              onChange={(e) =>
                setData((prev) => ({ ...prev, confirm: e.target.value }))
              }
              placeholder="Confirm Password"
            />
          </div>
          <div className="my-5">
            <InputTitle
              value={data.chooseRole}
              onChange={(e) =>
                setData((prev) => ({ ...prev, chooseRole: e.target.value }))
              }
              placeholder="Choose Role"
            />
          </div>
        </div>
        <div className=" border border-gray-300 rounded-xl p-4 shrink-0 min-w-[20.25rem] ">
          <div>
            <ImageUploader
              title="Member Image"
              imageBoxSize="h-40 rounded-3xl"
            />
          </div>
          <div className="my-4">
            <InputTitle
              value={data.altImge}
              onChange={(e) =>
                setData((prev) => ({ ...prev, altImge: e.target.value }))
              }
              placeholder="Image Alt Text"
            />
          </div>
          <div className="my-4">
            <TextBox
              onPublish={(e) => console.log("Metatitle", e)}
              maxLength={200}
              placeholder="Enter the meta title.."
              wrapperClass="rounded-2xl"
              textareaClass="p-2 h-30"
            />
          </div>
          <div className="my-4">
            <TextBox
              onPublish={(e) => console.log("MetaDescription", e)}
              maxLength={200}
              placeholder="Enter the meta Description.."
              wrapperClass="rounded-2xl"
              textareaClass="p-2 h-30"
            />
          </div>
          <div className="my-4">
            <InputTitle
              value={data.urlImage}
              onChange={(e) =>
                setData((prev) => ({ ...prev, urlImage: e.target.value }))
              }
              placeholder="URL Friendly Title"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersAddPage;
