import z from "zod";

export const MembersSchema = z
  .object({
    memberName: z.string().min(2, "Member name must be at least 2 characters"),

    memberImage: z.union(
      [z.string().min(1, "Invalid image URL"), z.instanceof(File)],
      { error: "Upload an image" }
    ),

    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),

    confirm: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
    chooseRole: z.string().optional(),
    altImge: z.string().optional(),
    urlSlug: z.string().optional(),
    metaTitle: z.string().optional(),

    metaDescription: z.string().optional(),
  })
  .refine((d) => d.password == d.confirm, {
    path: ["confirm"],
    error: "Password must be same",
  });

export type MembersFormValues = z.infer<typeof MembersSchema>;
