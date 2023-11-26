/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import Tag from "./Tag";

type ImageUploadProps = {
  register: UseFormRegister<any>; // Replace 'any' with your form type if defined
  watch: UseFormWatch<any>; // Replace 'any' with your form type
  errors: { [key: string]: any }; // Replace with the specific type for errors if defined
};

const UploadFile: React.FC<ImageUploadProps> = ({
  register,
  watch,
  errors,
}) => {
  const fileName = watch("file")?.[0]?.name || "No file selected";

  return (
    <div className="mb-4 relative">
      <div className="mb-4">
        <div className="text-center">
          <Tag type="blue"> Upload File </Tag>
        </div>
        <div className="mt-4 relative h-40 rounded-lg border-2 border-dashed border-gray-300 bg-white flex justify-center items-center hover:border-gray-400 focus-within:border-blue-500">
          <input
            className="h-full w-full opacity-0 absolute cursor-pointer"
            type="file"
            id="avatar"
            {...register("file", { required: true })}
          />
          <p className="pointer-events-none text-red-500 text-sm select-none">
            {watch("file")?.[0]?.name ||
              "Drag and drop image here or click to select file"}
          </p>
        </div>
        <p className="mt-2 text-gray-700 text-sm">
          Selected file: <span className="font-medium">{fileName}</span>
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
