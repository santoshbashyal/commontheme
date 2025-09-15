import { InputTitle } from "@/components/add-new/InputTitle";
import TextBox from "@/components/add-post/TextBox";
import { showErrorMessage, showSuccessMessage } from "@/lib/utils/toast";
import { useUpdateCookiePolicy } from "@/services/cookie/cookie";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { BiLoader } from "react-icons/bi";

type formValues = {
  title: string;
  content: string;
};
const CookiePolicy = () => {
  const { handleSubmit, control } = useForm<formValues>({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const { mutateAsync, isPending } = useUpdateCookiePolicy();
  const onSubmit: SubmitHandler<formValues> = async (data) => {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formdata.append(key, value);
    });
    try {
      await mutateAsync(formdata);
      showSuccessMessage("Updated successfully");
    } catch (err) {
      showErrorMessage("Update failed");
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 px-10">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <InputTitle
                value={field.value}
                onChange={field.onChange}
                placeholder="Cookie policy title ..."
              />
            )}
          />
          <div className="p-4">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Content here.. "
                  textareaClass="p-3 h-[600px]"
                  wrapperClass="rounded-2xl  "
                  maxLength={8000}
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isPending}
            className="mt-5 border flex items-center px-5 p-2 disabled:opacity-40 rounded-2xl border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white "
          >
            {isPending ? "Publishing" : "Publish"}
            {isPending && <BiLoader className="animate-spin" />}
          </button>
        </div>
      </form>
    </>
  );
};

export default CookiePolicy;
