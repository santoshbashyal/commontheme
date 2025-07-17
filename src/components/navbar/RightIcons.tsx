const RightIcons = () => {
  return (
    <div>
      <div className=" flex  gap-2 py-1">
        <div className="flex items-center  p-1">
          <img src="/Sun.svg" alt="" />
        </div>
        <div className="relative flex items-center  p-1">
          <div className="">
            <img src="/Bell.svg" alt="" />
          </div>
          <div className="absolute top-0 right-0">
            <img className="" src="/Dot.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightIcons;
