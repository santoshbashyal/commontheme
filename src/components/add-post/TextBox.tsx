interface TextBoxProps {
  value?: string;
  onChange?: (val: string) => void;
  maxLength?: number;
  placeholder?: string;
  wrapperClass?: string;
  textareaClass?: string;
  error?: string;
}

const TextBox = ({
  value = "",
  onChange,
  maxLength,
  wrapperClass = "",
  textareaClass = "",
  error,

  placeholder = "",
}: TextBoxProps) => {
  return (
    <div className={`w-full h-full `}>
      <div
        className={`relative   border border-gray-300  shadow-sm bg-white ${
          error ? "border-red-500" : ""
        } ${wrapperClass}`}
      >
        <textarea
          className={` resize-none rounded-2xl outline-none text-gray-700 ${textareaClass}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          maxLength={maxLength}
        />
        <div className="absolute top-full left-6 right-6 flex justify-between items-center text-sm text-gray-500 ">
          <span className="">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
      {error && (
        <p className="text-red-600 flex justify-center italic text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextBox;
