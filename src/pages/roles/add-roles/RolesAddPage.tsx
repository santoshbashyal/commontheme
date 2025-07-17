import { useState } from "react";
import { InputTitle } from "../../../components/add-new/InputTitle";
import PermissionGroup from "../../../components/role-permission/PermissionGroup";

export const RolesAddPage = () => {
  const [data, setData] = useState("");
  return (
    <>
      <div className="mt-4 px-4">
        <InputTitle
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Roles Name"
        />
      </div>
      <div className="font-bold p-5 text-gray-700 text-2xl">Permissions</div>
      <PermissionGroup title="Posts" />
      <PermissionGroup title="Blog" />
      <PermissionGroup title="Member" />
      <PermissionGroup title="Post" />
      <PermissionGroup title="Teacher" />
    </>
  );
};
