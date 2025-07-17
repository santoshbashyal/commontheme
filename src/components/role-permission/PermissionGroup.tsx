interface PermissionGroupProps {
  title: string;
}

const PermissionGroup = ({ title }: PermissionGroupProps) => {
  const actions = ["Edit", "Delete", "Read", "Write"];
  return (
    <>
      <div className="border-b border-gray-200 mb-3">
        {/* top title */}
        <div className="flex gap-4 items-center p-2 px-4">
          <img src="/Rectangle2.svg" alt="" />
          <div className="text-xl">{title}</div>
        </div>
        {/* action-list */}
        <div className="flex gap-3 justify-around items-center  p-2 ">
          {actions.map((actions) => (
            <div key={actions} className="flex gap-3 items-center">
              <div className="">
                <img src="/Rectangle2.svg" alt="" />
              </div>
              <div className="">{actions}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PermissionGroup;
