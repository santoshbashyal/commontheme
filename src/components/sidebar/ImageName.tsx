import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const ImageName = () => {
  const [open, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={toggleDropDown}
        className="hover:bg-amber-50 cursor-pointer items-center flex gap-2 p-2"
      >
        <div>
          <img src="/Photo.svg" alt="" />
        </div>
        <div>Roger Culhane</div>
      </div>

      {/* Sliding Dropdown */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex px-10 gap-3 border border-gray-400 rounded-xl py-1 items-center bg-white">
          <div>
            <IoLogOutOutline />
          </div>
          <div className="text-red-500">Logout</div>
        </div>
      </button>
    </>
  );
};

export default ImageName;
