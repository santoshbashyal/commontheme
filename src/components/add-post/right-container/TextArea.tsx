import TextBox from "../TextBox";

const placeholder = [
  {
    enter: "Enter the meta title...",
  },
  {
    enter: "Enter the meta description...",
  },
];

const TextArea = () => {
  return (
    <>
      {placeholder.map(({ enter }, index) => (
        <div key={index}>
          <TextBox
            onChange={(val) => console.log("Posted:", val)}
            placeholder={enter}
            maxLength={200}
            wrapperClass="mb-4 rounded-2xl"
            textareaClass="p-2"
          />
        </div>
      ))}

      {/* Input Field Below */}
      <div className="flex gap-2 border px-4 py-3 border-gray-300 mb-4 text-sm rounded-2xl items-center">
        <div>
          <img src="/link.svg" alt="Link" />
        </div>
        <input
          className="placeholder:text-gray-400 text-gray-700 outline-0 w-full"
          type="text"
          placeholder="URL Friendly Title"
        />
      </div>
    </>
  );
};

export default TextArea;
