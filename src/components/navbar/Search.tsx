export const Search = () => {
  return (
    <div className="bg-gray-100 gap-1 rounded-xl  flex items-center">
      <div className="px-3 p-1 flex items-center gap-1 ">
        <div className=" ">
          <img src="/Search.svg" alt="" />
        </div>
        <div className="mr-2  text-gray-600 ">
          <input
            className="placeholder:text-gray-400 py-0.5 outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="text-gray-400">⌘/</div>
      </div>
    </div>
  );
};
