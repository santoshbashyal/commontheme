import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";

const MembersTitle = () => {
  const [data, setData] = useState({ membersTitle: "" });

  return (
    <div>
      <InputTitle
        placeholder="Member Page"
        value={data.membersTitle}
        onChange={(e) =>
          setData((prev) => ({ ...prev, membersTitle: e.target.value }))
        }
      />
    </div>
  );
};

export default MembersTitle;
