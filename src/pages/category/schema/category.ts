import z from "zod";

export const CategorySchema = z.object({
  post_title: z.string().min(2, "Title must be at least of 2 characters"),
  image: z.union([z.string().min(1, "invalid url"), z.file()], {
    error: "Required",
  }),

  alt_text: z.string().optional(),
  description: z
    .string()
    .min(2, "Description must be at least of 2 characters"),
  meta_title: z
    .string()

    .optional(),
  meta_description: z.string().optional(),

  url_friendlyTitle: z
    .string()
    .min(5, "url must be at least of 5 characters")
    .optional(),
});
export type CategoryFormValues = z.infer<typeof CategorySchema>;
