import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";

export const CategoryTitle = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  return (
    <div>
      <InputTitle
        value={categoryTitle}
        onChange={(e) => setCategoryTitle(e.target.value)}
        placeholder="Category Title"
      />
    </div>
  );
};
