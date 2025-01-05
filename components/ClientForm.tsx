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
import { clientSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { useForm, UseFormReturn } from "react-hook-form";

interface CustomFormFieldProps {
  form: UseFormReturn<
    {
      fullName: string;
      message: string;
      phone: string;
      email: string;
      occupation: string;
    },
    any,
    undefined
  >;
  name: "message" | "fullName" | "phone" | "email" | "occupation";
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

const ClientForm = () => {
  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      occupation: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof clientSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <CustomFormField form={form} name="fullName" label="Full Name" />
        <CustomFormField form={form} name="phone" label="Phone" />
        <CustomFormField form={form} name="email" label="Email" />
        <CustomFormField form={form} name="occupation" label="Im a" />
        <CustomFormFieldTextarea
          form={form}
          name="occupation"
          label="Message"
        />
      </div>
    </Form>
  );
};

export default ClientForm;
