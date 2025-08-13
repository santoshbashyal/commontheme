interface TextBoxProps {
  value?: string;
  onChange: (val: string) => void;
  maxLength?: number;
  placeholder?: string;
  wrapperClass?: string;
  textareaClass?: string;
}

const TextBox = ({
  value = "",
  onChange,
  maxLength,
  wrapperClass = "",
  textareaClass = "",

  placeholder = "",
}: TextBoxProps) => {
  return (
    <div className="">
      <div
        className={`relative border border-gray-300  shadow-sm bg-white ${wrapperClass}`}
      >
        <textarea
          className={`w-full resize-none rounded-2xl outline-none text-gray-700 ${textareaClass}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          maxLength={maxLength}
        />
        <div className="absolute left-6 right-6 flex justify-between items-center text-sm text-gray-500 ">
          <span className="">
            {value.length}/{maxLength}
          </span>

          {/* {showButton && (
            <button
              onClick={handlePublish}
              className={`rounded-3xl text-white ${buttonClass}`}
            >
              Publish
            </button>
          )}
        </div>
        <div className="h-6 mt-2 text-sm text-center text-gray-500">
          {message && <p>{message}</p>}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
