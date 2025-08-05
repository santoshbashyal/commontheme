// import { Outlet } from "react-router";
// import NavBar from "../navbar/NavBar";
// import SideMenu from "../sidebar/SideMenu";

import { Outlet, useNavigate } from "react-router";
import SideMenu from "../sidebar/SideMenu";
import NavBar from "../navbar/NavBar";
import { useEffect } from "react";

export const HomeLayoutPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) navigate("/login");
  }, []);
  if (token)
    return (
      <div className="h-screen w-full flex">
        <div className="sidebar h-full w-[212px]">
          <SideMenu />
        </div>
        <div className="maincontent  border-gray-400 border flex flex-col h-full grow">
          <NavBar />
          <div className="grow overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
};
