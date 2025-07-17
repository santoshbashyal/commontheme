import { useState } from "react";

interface TextBoxProps {
  onPublish: (content: string) => void;
  maxLength?: number;
  placeholder?: string;
  wrapperClass?: string;
  textareaClass?: string;
  buttonClass?: string;
  showButton?: boolean;
}

const TextBox = ({
  onPublish,
  maxLength,
  wrapperClass = "",
  textareaClass = "",
  buttonClass = "",
  placeholder = "",
  showButton = false,
}: TextBoxProps) => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handlePublish = () => {
    if (content.trim() === "") {
      setMessage("Please type something before publishing");
      return;
    }
    onPublish(content);
    setMessage("Published !");
    setContent("");
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };
  return (
    <div className="">
      <div
        className={`relative border border-gray-300  shadow-sm bg-white ${wrapperClass}`}
      >
        <textarea
          className={`w-full resize-none rounded-2xl outline-none text-gray-700 ${textareaClass}`}
          placeholder={placeholder}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setMessage("");
          }}
          maxLength={maxLength}
        />
        <div className="absolute button-10 left-6 right-6 flex justify-between items-center text-sm text-gray-500">
          <span>
            {content.length}/{maxLength}
          </span>

          {showButton && (
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
        </div>
      </div>
    </div>
  );
};

export default TextBox;
