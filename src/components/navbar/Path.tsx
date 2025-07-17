const Location = [
  { name: "Dashboard", seperation: "/" },
  { name: "Post", seperation: "/" },
  { name: "Create Post", seperation: "" },
];

export const Path = () => {
  return (
    <div className="flex items-center  text-gray-400 p-1">
      {Location.map(({ name, seperation }, index) => {
        const isLast = index === Location.length - 1;

        return (
          <div className="flex  " key={index}>
            <span className={`px-2 ${isLast ? "text-black " : ""}`}>
              {name}
            </span>
            {seperation && <span className="mx-2">{seperation}</span>}
          </div>
        );
      })}
    </div>
  );
};
