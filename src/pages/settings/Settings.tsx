import ImageUploader from "../../components/add-post/right-container/ImageUploader";
import TextBox from "../../components/add-post/TextBox";
import SettingsTitle from "./SettingsTitle";

const Settings = () => {
  return (
    <>
      <div className="mt-6 w-full  px-4 ">
        <div className="w-[90%] mx-auto ">
          <SettingsTitle />
        </div>
      </div>
      <div className="flex mt-3 p-4  gap-2 justify-around">
        <div>
          <ImageUploader
            imageBoxSize="h-50 w-[680px] rounded-3xl"
            title="Logo"
          />
        </div>
        <div>
          <ImageUploader
            imageBoxSize="h-50 w-[680px] rounded-3xl"
            title="FavIcon"
          />
        </div>
      </div>
      <div className="px-20">
        <TextBox
          onPublish={(val) => console.log("Content:", val)}
          maxLength={7000}
          wrapperClass="rounded-3xl p-4 "
          placeholder="Enter the meta description... "
          textareaClass="p-2 h-40"
          showButton={true}
          buttonClass="px-7 bg-black p-2"
        />
      </div>
    </>
  );
};

export default Settings;
