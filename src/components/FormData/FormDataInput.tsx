/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";

type UpdateInputProps = {
  label: string;
  id: string;
  autoComplete: string;
  register: ReturnType<typeof useForm<any>>["register"];
  errors: ReturnType<typeof useForm<any>>["formState"]["errors"];
};

const UpdateInput: React.FC<UpdateInputProps> = ({
  label,
  id,
  autoComplete,
  register,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full p-2 border rounded-lg"
        type="text"
        id={id}
        autoComplete={autoComplete}
        {...register(id, { required: true })}
      />
      {errors[id] && <p className="text-red-500">{label} is required.</p>}
    </div>
  );
};

export default UpdateInput;
