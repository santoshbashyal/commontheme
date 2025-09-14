import { InputTitle } from "@/components/add-new/InputTitle";
import ImageUploader from "@/components/add-post/right-container/ImageUploader";
import TextBox from "@/components/add-post/TextBox";

import { Controller, useForm, type SubmitHandler } from "react-hook-form";
interface FormValues {
  description: string;
  email: string;
  memberName: string;
  memberImage: File | string;
  password: string;
  confirm: string;
  chooseRole: string;
  altImge: string;
  urlSlug: string;
  metaTitle: string;
  metaDescription: string;
}

const MembersAddPage = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      memberName: "",
      memberImage: "",
      description: "",
      email: "",
      password: "",
      confirm: "",
      chooseRole: "",
      altImge: "",
      urlSlug: "",
      metaTitle: "",
      metaDescription: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 p-4 ">
        <div className="w-full">
          <Controller
            control={control}
            name="memberName"
            render={({ field }) => (
              <InputTitle
                placeholder="Member's Name"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onChange={field.onChange}
                  maxLength={2000}
                  wrapperClass="rounded-2xl p-4"
                  placeholder=" Begin writing here ... "
                  textareaClass="h-60"
                />
              )}
            />
          </div>
          <div className="my-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Email"
                />
              )}
            />
          </div>
          <div className="my-5">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Create Password"
                />
              )}
            />
          </div>
          <div className="my-5">
            <Controller
              name="confirm"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Confirm Password"
                />
              )}
            />
          </div>

          <div className="my-5">
            <Controller
              name="chooseRole"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Choose role"
                />
              )}
            />
          </div>
        </div>
        <div className=" border border-gray-300 rounded-xl p-4 shrink-0 min-w-[20.25rem] ">
          <div>
            <Controller
              control={control}
              name="memberImage"
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onchange={field.onChange}
                  title="Member Image"
                  imageBoxSize="h-40 rounded-3xl"
                />
              )}
            />
          </div>
          <div className="my-4">
            <Controller
              name="altImge"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Image alt text"
                />
              )}
            />
          </div>
          <div className="my-4">
            <Controller
              name="metaTitle"
              control={control}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onChange={field.onChange}
                  maxLength={200}
                  wrapperClass="rounded-2xl "
                  placeholder=" Enter the meta title ... "
                  textareaClass="p-2 h-30"
                />
              )}
            />
          </div>
          <div className="my-4">
            <Controller
              name="metaDescription"
              control={control}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onChange={field.onChange}
                  maxLength={300}
                  placeholder="Enter the meta Description.."
                  wrapperClass="rounded-2xl"
                  textareaClass="p-2 h-30"
                />
              )}
            />
          </div>
          <div className="my-4">
            <Controller
              name="urlSlug"
              control={control}
              render={({ field }) => (
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="URL Friendly Title"
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className=" mt-5 border items-center flex gap-1 disabled:opacity-40 border-gray-400 text-gray-700 py-2 px-5 rounded-2xl hover:bg-gray-700 hover:text-white"
          type="submit"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default MembersAddPage;
