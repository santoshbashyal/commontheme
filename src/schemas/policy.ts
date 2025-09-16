import { z } from "zod";
export const PolicySchema = z.object({
  title: z
    .string()
    .min(2, "Titile must be at least 3 characters")
    .max(20, "Title cannot be more than 100 characters"),
  content: z
    .string()
    .min(5, "Content must be at least 5 characters ")
    .max(9000, "Content cannot exceed 9000 characters"),
});

export type PolicyFormValues = z.infer<typeof PolicySchema>;
