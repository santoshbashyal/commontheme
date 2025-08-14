import { toast } from "sonner";

export const showSuccessMessage = (msg: string) => {
  toast.success(msg);
};
export const showErrorMessage = (msg: string) => {
  toast.error(msg);
};
