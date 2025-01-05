import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phone: z
    .string()
    .min(11, {
      message: "phone must be 11 numbers",
    })
    .max(11, {
      message: "phone must be 11 numbers",
    }),
  email: z.string().email(),
  occupation: z.string().min(2, { message: "must be more than 2 characters" }),
  message: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
});

export const reviewSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  title: z
    .string()
    .min(11, {
      message: "phone must be 11 numbers",
    })
    .max(11, {
      message: "phone must be 11 numbers",
    }),
  email: z.string().email(),
  rating: z.string().min(2, { message: "must be more than 2 characters" }),
  review: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
});
