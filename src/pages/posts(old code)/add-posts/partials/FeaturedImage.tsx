import ImageUploader from "../../../../components/add-post/right-container/ImageUploader";
import TextArea from "../../../../components/add-post/right-container/TextArea";

const FeaturedImage = () => {
  return (
    <>
      <ImageUploader
        imageBoxSize="h-[160px] rounded-2xl"
        title="Featured Image"
      />
      <div className="flex gap-2  border px-4 py-3 border-gray-300 mb-4 text-sm rounded-2xl  items-center">
        <div>
          <img src="/letter-text.svg" alt="" />
        </div>
        <div>
          <input
            className="placeholder:text-gray-400 text-gray-700 outline-0"
            type="text "
            placeholder="Image Alt Text"
          />
        </div>
      </div>
      <TextArea />
    </>
  );
};

export default FeaturedImage;
