import { InputTitle } from "@/components/add-new/InputTitle";
import TextBox from "@/components/add-post/TextBox";
import { showErrorMessage, showSuccessMessage } from "@/lib/utils/toast";
import { PolicySchema, type PolicyFormValues } from "@/schemas/policy";
import { useUpdatePrivacyPolicy } from "@/services/privacy/privacy";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { BiLoader } from "react-icons/bi";

const PrivacyPolicy = () => {
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
  const { mutateAsync, isPending } = useUpdatePrivacyPolicy();
  const onSubmit: SubmitHandler<PolicyFormValues> = async (data) => {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formdata.append(key, value);
    });
    try {
      await mutateAsync(formdata);
      showSuccessMessage("Updated Successfully");
    } catch (err) {
      showErrorMessage("Update failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 px-10">
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <InputTitle
                placeholder="Privacy Policy title here ..."
                onChange={field.onChange}
                value={field.value}
                error={errors.title?.message}
              />
            )}
          />
          <div className="p-4">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <TextBox
                  onChange={field.onChange}
                  value={field.value}
                  maxLength={8000}
                  placeholder="Privacy-Policy content here ..."
                  textareaClass="p-3 h-[600px]"
                  wrapperClass="rounded-2xl"
                  error={errors.content?.message}
                />
              )}
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              className="mt-5 border flex items-center px-5 p-2 disabled:opacity-40 rounded-2xl border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Publishing" : "Publish"}
              {isPending && <BiLoader className="animate-spin" />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrivacyPolicy;
