import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { InputTitle } from "../../components/add-new/InputTitle";
import ImageUploader from "../../components/add-post/right-container/ImageUploader";
import TextBox from "../../components/add-post/TextBox";
import { useUpdateHeroSection } from "../../services/herosection/heroSection";
import { showErrorMessage, showSuccessMessage } from "../../lib/utils/toast";
import { BiLoader } from "react-icons/bi";
type FormValues = {
  title: string;
  alt_text: string;
  image: File | string;
  description: string;
};
const HeroSection = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      image: "",
      alt_text: "",
      description: "",
    },
  });
  const { mutateAsync, isPending } = useUpdateHeroSection();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formdata.append(key, value);
    });
    try {
      const res = await mutateAsync(formdata);
      showSuccessMessage("updated successfully");
    } catch (err) {
      showErrorMessage("update failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mt-6 w-full  px-4 ">
          <div className=" w-[90%] ">
            <Controller
              rules={{ required: "Title is required" }}
              control={control}
              name="title"
              render={({ field }) => (
                <InputTitle
                  onBlur={field.onBlur}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Hero section title"
                  error={!!errors.title}
                />
              )}
            />
            {errors.title && (
              <p className="text-red-600 italic">{errors.title.message}</p>
            )}
          </div>
        </div>
        <div className="flex grow gap-4 w-full mt-10">
          <div className=" px-20  ">
            <div className="">
              <Controller
                rules={{ required: "Please upload an image here" }}
                control={control}
                name="image"
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onchange={field.onChange}
                    title="HeroSection Image"
                    imageBoxSize="h-50 w-80"
                    error={!!errors.image}
                  />
                )}
              />
              {errors.image && (
                <p className="text-red-600 italic">{errors.image.message}</p>
              )}
            </div>
            <div className=" flex mx-4 items-center">
              <Controller
                control={control}
                name="alt_text"
                render={({ field }) => (
                  <InputTitle
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Image alt text"
                  />
                )}
              />
            </div>
          </div>
          <div className=" grow">
            <Controller
              rules={{ required: "Description is required" }}
              control={control}
              name="description"
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Description here .."
                  wrapperClass="h-full w-[90%] p-2 rounded-2xl "
                  textareaClass="h-full "
                  maxLength={800}
                  error={!!errors.description}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-600 italic">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
            disabled={isPending}
            className=" mt-5 border items-center flex gap-1 disabled:opacity-40 border-gray-400 text-gray-700 py-2 px-5 rounded-2xl hover:bg-gray-700 hover:text-white"
            type="submit"
          >
            Publish {isPending && <BiLoader className="animate-spin" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
