import { CenterContainer } from "../../posts(old code)/add-posts/partials/CenterContainer";
import FeaturedImage from "../../posts(old code)/add-posts/partials/FeaturedImage";
import { PageTitle } from "./PageTitle";

export const PagesAdd = () => {
  return (
    <div>
      <div className="flex  gap-4 p-4 ">
        <div className="w-full ">
          <PageTitle />

          <div className=" border-gray-400">
            <CenterContainer />
          </div>
        </div>
        <div className=" border border-gray-300 rounded-xl p-4 shrink-0 min-w-[20.25rem] ">
          <FeaturedImage />
        </div>
      </div>
    </div>
  );
};
