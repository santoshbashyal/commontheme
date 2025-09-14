interface InputTitleProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const InputTitle = ({
  value,
  onChange,
  placeholder,
  onBlur,
  error,
}: InputTitleProps) => {
  return (
    <div
      className={`px-4 p-3 border border-gray-400 rounded-3xl mb-4 ${
        error ? "border-red-500" : "border-gray-800"
      }`}
    >
      <div>
        <input
          className="placeholder:text-gray-400 w-full outline-0"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};
