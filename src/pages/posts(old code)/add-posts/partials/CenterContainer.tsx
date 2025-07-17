import TitleCenter from "../../../../components/add-post/header-center/TitleCenter";
import TextBox from "../../../../components/add-post/TextBox";
// import TextBox from "./TextBox";

export const CenterContainer = () => {
  const handlePublish = (content: string) => {
    console.log("Content to Publish:", content);
  };
  return (
    <div className=" w-full">
      <TitleCenter />
      <TextBox
        onPublish={handlePublish}
        maxLength={8000}
        placeholder="Begin writing here..."
        wrapperClass=" mx-2 rounded-b-3xl h-[750px] p-4 px-8"
        textareaClass=" py-1 h-[95%]"
        showButton={true}
        buttonClass="border bg-black px-6 p-1 cursor-pointer"
      />
    </div>
  );
};
