import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import TextBox from "@/components/add-post/TextBox";
import ImageUploader from "@/components/add-post/right-container/ImageUploader";
import { InputTitle } from "@/components/add-new/InputTitle";
import { CategorySchema, type CategoryFormValues } from "../schema/category";
import { zodResolver } from "@hookform/resolvers/zod";

export const CategoryAddPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      post_title: "",
      image: "",
      alt_text: "",
      description: "",
      meta_title: "",
      meta_description: "",
      url_friendlyTitle: "",
    },
  });
  const onSubmit: SubmitHandler<CategoryFormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
        <div className="flex  gap-4 p-4 ">
          <div className="w-full ">
            <Controller
              control={control}
              name="post_title"
              render={({ field }) => (
                <InputTitle
                  error={errors.post_title?.message}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Category Title"
                />
              )}
            />

            <div className=" border-gray-400">
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextBox
                    error={errors.description?.message}
                    value={field.value}
                    onChange={field.onChange}
                    maxLength={8000}
                    placeholder="Begin writing here..."
                    wrapperClass=" mx-2 rounded-b-3xl h-[750px] p-4 px-8"
                    textareaClass=" py-1 h-[95%]"
                  />
                )}
              />
            </div>
          </div>
          <div className=" border border-gray-300 rounded-xl p-4 shrink-0 min-w-[20.25rem] ">
            {/* <FeaturedImage /> */}
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <ImageUploader
                  error={errors.image?.message}
                  value={field.value}
                  onchange={field.onChange}
                  imageBoxSize="h-[160px] rounded-2xl"
                  title="Featured Image"
                />
              )}
            />
            <div className="my-4">
              <Controller
                control={control}
                name="alt_text"
                render={({ field }) => (
                  <InputTitle
                    error={errors.alt_text?.message}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="alt image text"
                  />
                )}
              />
            </div>
            <div className="my-5">
              <Controller
                control={control}
                name="meta_title"
                render={({ field }) => (
                  <TextBox
                    error={errors.meta_title?.message}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter the meta title ..."
                    maxLength={200}
                    wrapperClass="mb-4 rounded-2xl"
                    textareaClass="p-2"
                  />
                )}
              />
            </div>
            <div className="my-10">
              <Controller
                control={control}
                name="meta_description"
                render={({ field }) => (
                  <TextBox
                    error={errors.meta_description?.message}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter the meta description ..."
                    maxLength={200}
                    wrapperClass="mb-4 rounded-2xl"
                    textareaClass="p-2"
                  />
                )}
              />
            </div>
            <div className="my-4">
              <Controller
                control={control}
                name="url_friendlyTitle"
                render={({ field }) => (
                  <InputTitle
                    error={errors.url_friendlyTitle?.message}
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
    </>
  );
};
