import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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

export default CustomFormFieldTextarea;
