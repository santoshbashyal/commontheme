import { useState } from "react";
import { InputTitle } from "../../components/add-new/InputTitle";

const SettingsTitle = () => {
  const [settingTitle, setSettingTitle] = useState("");
  return (
    <>
      <div>
        <InputTitle
          value={settingTitle}
          onChange={(e) => setSettingTitle(e.target.value)}
          placeholder="Settings Title"
        />
      </div>
    </>
  );
};

export default SettingsTitle;
