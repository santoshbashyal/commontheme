interface InputTitleProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputTitle = ({
  value,
  onChange,
  placeholder,
  onBlur,
  error,
}: InputTitleProps) => {
  return (
    <div>
      <div>
        <input
          className={`px-4 p-3 border placeholder:text-gray-400 w-full outline-0 rounded-3xl mb-4 ${
            error ? "border-red-500" : "border-gray-400"
          }`}
          // className=" placeholder:text-gray-400 w-full outline-0"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <p className="text-red-600 italic text-sm">{error}</p>}
    </div>
  );
};
