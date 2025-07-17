import Icons from "./Icons";
import { Path } from "./Path";
import RightIcons from "./RightIcons";
import { Search } from "./Search";

const NavBar = () => {
  return (
    <div className="flex border-b border-gray-400  p-5 px-7 justify-between">
      <div className="flex   ">
        <Icons />
        <Path />
      </div>
      <div className="flex gap-5">
        <Search />
        <RightIcons />
      </div>
    </div>
  );
};

export default NavBar;
