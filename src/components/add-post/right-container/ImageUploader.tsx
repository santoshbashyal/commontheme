import { useRef } from "react";
interface ImageUploaderProps {
  title: string;
  imageBoxSize: string;
  value?: string | null; //controlled value
  onchange?: (val: string | null) => void; //controlled change handler
}

function imageToBase64(file: File): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(undefined);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        resolve(undefined);
      }
    };

    reader.onerror = () => {
      reject(undefined);
    };

    reader.readAsDataURL(file);
  });
}

const ImageUploader = ({
  title,
  imageBoxSize,
  value,
  onchange,
}: ImageUploaderProps) => {
  // const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]; //get the file
    if (file) {
      const imageURL = await imageToBase64(file); //make a preview url
      // setImage(imageURL); //save image url into state
      if (imageURL) onchange?.(imageURL); //send new value to react-hook-form
    }
  };
  const handleClick = () => {
    fileInputRef.current?.click(); //click the hidden input using code
  };
  return (
    <>
      <div className="flex  items-center text-gray-600  justify-between mb-4">
        <div>{title} </div>
        <div>
          <img src="/Dots-3.svg" alt="menu icon" />
        </div>
      </div>

      {/* image box */}
      <div
        onClick={handleClick}
        className={` bg-gray-100 cursor-pointer flex items-center justify-center mb-4 ${imageBoxSize}`}
      >
        {value ? (
          <img
            className="h-full w-full object-fill rounded-xl"
            src={value}
            alt=""
          />
        ) : (
          <img src="/image-up.svg" alt="" />
        )}
      </div>

      {/* hidden-inupt file  */}
      <input
        ref={fileInputRef} //for triggering it from js
        type="file"
        accept="image/*"
        onChange={handleImageChange} //when user selects the file
        style={{ display: "none" }} //hide it
      />

      {/* replace image text */}
      {value && (
        <div
          onClick={handleClick} //click to upload again
          className="text-sm text-gray-400 mt-2 mb-4 flex justify-end cursor-pointer"
        >
          Replace Image
        </div>
      )}
    </>
  );
};

export default ImageUploader;
