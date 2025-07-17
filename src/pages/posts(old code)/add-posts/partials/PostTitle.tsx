import { useState } from "react";
import { InputTitle } from "../../../../components/add-new/InputTitle";

const PostTitle = () => {
  const [postTitle, setPoseTitle] = useState("");
  return (
    <>
      <div>
        <InputTitle
          value={postTitle}
          onChange={(e) => setPoseTitle(e.target.value)}
          placeholder="Post Title"
        />
      </div>
    </>
  );
};

export default PostTitle;
