import z from "zod";

export const SettingSchema = z.object({
  name: z.string().min(2, "Title must be at least of 2 characters"),
  logo: z.union([z.string().min(1, "logo is required"), z.file()]),
  favicon: z.union([z.string().min(1, "favicon is required"), z.file()]),
  metaDescription: z
    .string()
    .min(5, "description must be at least of 5 characters"),
});
export type FormValues = z.infer<typeof SettingSchema>;
