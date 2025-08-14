import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { InputTitle } from "../../components/add-new/InputTitle";
import ImageUploader from "../../components/add-post/right-container/ImageUploader";
import TextBox from "../../components/add-post/TextBox";
import { useUpdateSettings } from "../../services/organization/organization";
import { showErrorMessage, showSuccessMessage } from "../../lib/utils/toast";
import { BiLoader } from "react-icons/bi";

type FormValues = {
  name: string;
  logo: string;
  favicon: string;
  metaDescription: string;
};

const Settings = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      logo: "",
      favicon: "",
      metaDescription: "",
    },
  });
  const { mutateAsync, isPending } = useUpdateSettings();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await mutateAsync(data);
      console.log(res);
      showSuccessMessage("Settings updated Sucessfully");
    } catch (err) {
      console.log(err);
      showErrorMessage("Settings failed to update");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6 w-full  px-4 ">
        <div className="w-[90%] mx-auto ">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <InputTitle
                value={field.value}
                onChange={field.onChange}
                placeholder="Settings Title"
              />
            )}
          />
        </div>
      </div>
      <div className="flex mt-3 p-4  gap-2 justify-around">
        <div>
          <Controller
            control={control}
            name="logo"
            render={({ field }) => (
              <ImageUploader
                value={field.value}
                onchange={field.onChange}
                imageBoxSize="h-50 w-[680px] rounded-3xl"
                title="Logo"
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="favicon"
            render={({ field }) => (
              <ImageUploader
                title="FavIcon"
                imageBoxSize="h-50 w-[680px] rounded-3xl"
                value={field.value}
                onchange={field.onChange}
              />
            )}
          />
        </div>
      </div>
      <div className="px-20">
        <Controller
          name="metaDescription"
          control={control}
          render={({ field }) => (
            <TextBox
              maxLength={7000}
              wrapperClass="rounded-3xl p-8 "
              placeholder="Enter the meta description... "
              textareaClass="p-2 h-40"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
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
  );
};

export default Settings;
