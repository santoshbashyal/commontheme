const title = [
  {
    name: "Choose Category",
  },
  {
    name: "Add Keywords",
  },
  {
    name: "Add Tags",
  },
];
const DropDown = () => {
  return (
    <>
      {title.map(({ name }, index) => (
        <div
          key={index}
          className="flex justify-between border px-4 py-3 border-gray-300 mb-4 text-sm rounded-2xl  items-center"
        >
          <div className="text-gray-500">{name}</div>
          <div>
            <img src="/Arrow.svg" alt="" />
          </div>
        </div>
      ))}

      <div className="flex gap-2  border px-4 py-3 border-gray-300 mb-4 text-sm rounded-2xl  items-center">
        <div>
          <img src="/letter-text.svg" alt="" />
        </div>
        <div>
          <input
            className="placeholder:text-gray-400 text-gray-700 outline-0"
            type="text "
            placeholder="Image Alt Text"
          />
        </div>
      </div>
    </>
  );
};

export default DropDown;
