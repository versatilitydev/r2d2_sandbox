import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { apiGetHashOfFile } from "../services/apiGetHash";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";
import Tag from "../components/Tag";
import { toast } from "react-hot-toast";
import { apiFileExists } from "../services/apiCheckExists";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../settings/constants";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import UploadFile from "../components/UploadFile";
import UpdateInput from "../components/FormData/FormDataInput";
export interface FileHashResponse {
  file_name: string;
  hash: string;
}
const FileUpload: React.FC = () => {
  const navigate = useNavigate();
  const [hash, setHash] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState<FormData>(new FormData());
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { mutate: checkOrSubmitFile } = useMutation({
    mutationFn: apiFileExists,
    onSuccess: (data) => {
      if (data.file_name === file?.name) {
        toast.success(
          "File already exists in the database, Fetching hash instead..."
        );
        return;
      }
      apiGetHash(formData);
      setHash(data.hash);
      return;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: apiGetHash, isPending } = useMutation<
    FileHashResponse,
    Error,
    FormData
  >({
    mutationFn: apiGetHashOfFile,
    onSuccess: (data) => {
      toast.success("Hash calculated successfully!");
      setHash(data.hash);
      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    formData.append("vendor", data.vendor);
    formData.append("product", data.product);
    formData.append("version", data.version);
    formData.append("update", data.update);
    formData.append("edition", data.edition);
    formData.append("language", data.language);
    formData.append("file", data.file[0]);
    checkOrSubmitFile(data.file[0].name);
    setFormData(formData);
    setFile(data.file[0]);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-4">
          <UpdateInput
            label="Vendor"
            id="vendor"
            autoComplete="new-vendor"
            register={register}
            errors={errors}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <UpdateInput
              label="Product"
              id="product"
              autoComplete="new-product"
              register={register}
              errors={errors}
            />
          </div>
          <div className="mb-4">
            <UpdateInput
              label="Version"
              id="version"
              autoComplete="new-version"
              register={register}
              errors={errors}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <UpdateInput
            label="Update"
            id="update"
            autoComplete="new-update"
            register={register}
            errors={errors}
          />
          <UpdateInput
            label="Language"
            id="language"
            autoComplete="new-language"
            register={register}
            errors={errors}
          />
        </div>
        <UpdateInput
          label="Edition"
          id="edition"
          autoComplete="new-edition"
          register={register}
          errors={errors}
        />
        <UploadFile register={register} watch={watch} errors={errors} />
        <div className="flex  justify-between">
          <div className="flex">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-48  p-2 bg-blue-500 text-white rounded-lg relative"
              disabled={isPending} // Disable the button while loading
            >
              {isPending ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PulseLoader color="white" size={15} />
                </div>
              ) : (
                "Submit"
              )}
            </motion.button>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-700"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </div>
        {errors && <p className="text-red-500"></p>}
        <div className="flex flex-col items-center space-y-6 rounded-lg shadow-lg bg-zinc-200">
          {hash && (
            <>
              <div className="flex flex-col items-center text-2xl font-bold ">
                {" "}
                Hash code:
                <Tag type="green"> {hash} </Tag>
              </div>
            </>
          )}
        </div>
      </motion.form>
    </>
  );
};

export default FileUpload;
