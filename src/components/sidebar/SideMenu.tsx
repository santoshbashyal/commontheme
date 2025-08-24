import { NavLink } from "react-router";
import ExpandableTab from "./ExpandableTab";
import ImageName from "./ImageName";
import { SideMenuData } from "./SideMenuData";

const SideMenu = () => {
  return (
    <>
      <div className=" w-[212px] p-4 ">
        <ImageName />
        <div className="flex flex-col mt-4">
          {/* Dashboard tab */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex  p-2 rounded-2xl  items-center my-1 gap-2 ${
                isActive
                  ? "bg-gray-200 text-gray-800 font-bold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <div>
              <img src="/settings.svg" alt="" />
            </div>
            <div className="px-4">Dashboard</div>
          </NavLink>

          {SideMenuData.map((menuItem, index) => (
            <ExpandableTab
              key={index}
              label={menuItem.label}
              link={menuItem.link}
              hasDropdown={menuItem.hasDropdown}
              subItems={menuItem.subItems}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
