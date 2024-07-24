"use client";

import React, { useState, useEffect } from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  SubmitHandler,
  useWatch,
} from "react-hook-form";
import { FaGripLines } from "react-icons/fa";
import CustomSelect from "./select-platform"; // Adjust the import path as needed

interface PlatformProps {
  label: string;
  link: string;
}

interface FormValues {
  platform: PlatformProps[];
}

interface MyFormProps {
  getData: (data: { label: string; link: string }[]) => void;
}

const MyForm = ({ getData }: MyFormProps) => {
  const [data, setData] = useState<PlatformProps[]>([]);
  const [selectedPlaform, setSelectedPlatform] = useState("");

  const handleSelectPlatform = (value: string) => {
    setSelectedPlatform(value);
  };

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      platform: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "platform",
  });

  useEffect(() => {
    // Update form data when state data changes
    if (data.length > 0) {
      setValue("platform", data);
    }
  }, [data, setValue]);

  getData(fields);

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log(formData.platform);
    setData(formData.platform);
  };

  let placeholderLabel;

  if (selectedPlaform === "github") {
    placeholderLabel = "https://github.com/femi";
  } else if (selectedPlaform === "youtube") {
    placeholderLabel = "https://youtube.com/femi";
  } else {
    placeholderLabel = "https://linkedin.com/femi";
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <button
        type="button"
        onClick={() => append({ label: "", link: "" })}
        className="flex flex-col justify-center items-center p-[11px] px-[27px] gap-2 self-stretch rounded-lg border border-[#633CFF] w-full mb-8"
      >
        <p className="text-[#633CFF] text-base font-semibold leading-6">
          + Add new link
        </p>
      </button>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border mt-4 p-4 py-6 bg-[#f6f4f4] rounded-md"
        >
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <FaGripLines className="text-gray-500" />
              <p className="font-bold text-gray-500">#Link{index + 1}</p>
            </div>
            <button
              className="text-gray-400"
              type="button"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
          <p className="text-sm mt-3">Platform</p>

          <Controller
            control={control}
            name={`platform.${index}.label`}
            render={({ field }) => (
              <CustomSelect
                value={field.value}
                onChange={field.onChange}
                getValue={handleSelectPlatform}
              />
            )}
          />
          <div className="mt-4">
            <p>Link</p>
            <Controller
              control={control}
              name={`platform.${index}.link`}
              render={({ field }) => (
                <input
                  placeholder={placeholderLabel}
                  {...field}
                  className="w-full py-2 border rounded-md"
                />
              )}
            />
          </div>
        </div>
      ))}
      <div className="flex p-[24px_40px] flex-col items-end gap-2 self-stretch">
        <button
          type="submit"
          className="flex p-[11px_27px] flex-col items-start gap-2 rounded-lg bg-[#633CFF]"
        >
          <p className="text-white text-[16px] font-semibold leading-[150%]">
            Save
          </p>
        </button>
      </div>
    </form>
  );
};

export default MyForm;