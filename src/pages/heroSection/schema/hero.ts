import z from "zod";

export const HeroSchema = z.object({
  title: z.string().min(3, "title must be at least of 3 characters"),
  alt_text: z.string().optional(),
  description: z
    .string()
    .min(10, "description must be at least of 10 characters"),
  image: z.union([z.string().min(1, "invalid url"), z.file()], {
    error: "Required",
  }),
});
export type FormValues = z.infer<typeof HeroSchema>;
