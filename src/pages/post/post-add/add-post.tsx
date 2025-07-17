import { CenterContainer } from "../../posts(old code)/add-posts/partials/CenterContainer";
import PostTitle from "../../posts(old code)/add-posts/partials/PostTitle";
import FeaturedImage from "../../posts(old code)/add-posts/partials/FeaturedImage";

const AddPost = () => {
  return (
    <div className="flex   gap-4 p-4 ">
      <div className="w-full ">
        <PostTitle />

        <div className=" border-gray-400">
          <CenterContainer />
        </div>
      </div>
      <div className=" border border-gray-300 rounded-xl p-4 shrink-0 min-w-[20.25rem] ">
        <FeaturedImage />
      </div>
    </div>
  );
};

export default AddPost;
