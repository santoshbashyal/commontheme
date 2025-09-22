import z from "zod";

export const UsersSchema = z.object({
  user_title: z.string().min(3, "title must be at least of 3 characters"),
  alt_text: z.string().optional(),
  description: z
    .string()
    .min(10, "description must be at least of 10 characters"),
  image: z.union([z.string().min(1, "invalid url"), z.file()], {
    error: "upload image",
  }),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),

  url_friendlyTitle: z.string().min(5, "url must be at least of 5 characters"),
});
export type UsersFormValues = z.infer<typeof UsersSchema>;
