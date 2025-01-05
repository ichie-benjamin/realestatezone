"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { clientSchema, reviewSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { useForm, UseFormReturn } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import ButtonWithIcon from "./ButtonWithIcon";

const Reviews = [
  { title: "One Star", value: "one star" },
  { title: "Two Star", value: "two star" },
  { title: "Three Star", value: "Three star" },
  { title: "Four Star", value: "four star" },
  { title: "Five Star", value: "five star" },
];

interface CustomFormFieldProps {
  form: UseFormReturn<
    {
      fullName: string;
      review: string;
      rating: string;
      email: string;
      title: string;
    },
    any,
    undefined
  >;
  name: "review" | "fullName" | "rating" | "email" | "title";
  label: string;
}

const CustomFormFieldTextarea = ({
  form,
  name,
  label,
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-2">
          <FormLabel className="font-medium">{label}</FormLabel>
          <FormControl>
            <Textarea
              rows={7}
              className="rounded-estate-border-radius border border-estate-grey-7 h-[53px]"
              placeholder="Enter message"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const CustomFormField = ({ form, label, name }: CustomFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-2 sm:col-span-1">
          <FormLabel className="font-medium">{label}</FormLabel>
          <FormControl>
            <Input
              className="rounded-estate-border-radius border border-estate-grey-7 h-[53px]"
              placeholder="Enter full name"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ReviewForm = () => {
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      fullName: "",
      email: "",
      title: "",
      rating: "",
      review: "",
    },
  });

  function onSubmit(values: z.infer<typeof clientSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <CustomFormField form={form} name="title" label="Title" />
        <CustomFormField form={form} name="fullName" label="Full Name" />
        <CustomFormField form={form} name="email" label="Email" />
        <div className="relative">
          <label className="font-medium mb-5 sm:absolute sm:top-0 ">
            Ratings
          </label>
          <CustomSelect
            options={Reviews}
            className="mt-2 sm:mt-0 h-[53px] sm:top-[32px] border border-estate-grey-7 text-estate-grey-2"
          />
        </div>

        <CustomFormFieldTextarea form={form} name="review" label="Review" />
      </div>
      <ButtonWithIcon className="mt-5" iconSrc="/icons/arrow-right-white.svg">
        Submit Review
      </ButtonWithIcon>
    </Form>
  );
};

export default ReviewForm;
