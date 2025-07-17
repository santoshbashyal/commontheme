import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";

export const PageTitle = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <InputTitle
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Page Title"
      />
    </div>
  );
};
