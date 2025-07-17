import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";

export const UserAddTitle = () => {
  const [usertitle, setUserTitle] = useState("");
  return (
    <div>
      <InputTitle
        value={usertitle}
        onChange={(e) => setUserTitle(e.target.value)}
        placeholder="User Title"
      />
    </div>
  );
};
