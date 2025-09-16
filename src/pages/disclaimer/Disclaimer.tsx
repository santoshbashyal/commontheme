import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { BiLoader } from "react-icons/bi";
import { useUpdateDisclaimer } from "@/services/disclaimer/disclaimer";
import { InputTitle } from "@/components/add-new/InputTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import TextBox from "@/components/add-post/TextBox";
import { showErrorMessage, showSuccessMessage } from "@/lib/utils/toast";
import { PolicySchema, type PolicyFormValues } from "@/schemas/policy";

const Disclaimer = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PolicyFormValues>({
    resolver: zodResolver(PolicySchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const { mutateAsync, isPending } = useUpdateDisclaimer();
  const onSubmit: SubmitHandler<PolicyFormValues> = async (data) => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 px-8">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <div>
                <InputTitle
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.title?.message}
                  placeholder="Enter Disclaimer title here .."
                />
              </div>
            )}
          />
        </div>
        <div className="px-6">
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <div>
                <TextBox
                  placeholder="Enter description here ... "
                  value={field.value}
                  onChange={field.onChange}
                  maxLength={800}
                  wrapperClass="h-full rounded-2xl"
                  textareaClass="h-[500px] p-2"
                  error={errors.content?.message}
                />
              </div>
            )}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            disabled={isPending}
            className=" mt-5 border items-center flex gap-1 disabled:opacity-40 border-gray-400 text-gray-700 py-2 px-5 rounded-2xl hover:bg-gray-700 hover:text-white"
            type="submit"
          >
            Publish
            {isPending && <BiLoader className="animate-spin" />}
          </button>
        </div>
      </form>
    </>
  );
};
export default Disclaimer;
