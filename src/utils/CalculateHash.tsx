import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { apiGetHashOfFile } from "../services/apiGetHash";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";
import Tag from "../components/Tag";
import { toast } from "react-hot-toast";
import { apiFileExists } from "../services/apiCheckExists";
import H1Title from "../components/general/H1Title";
export interface FileHashResponse {
  file_name: string;
  hash: string;
}
const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [hash, setHash] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutate: checkOrSubmitFile } = useMutation({
    mutationFn: apiFileExists,
    onSuccess: (data) => {
      if (data.file_name == file?.name) {
        toast.success(
          "File already exists in the database, Fetching hash instead..."
        );
        setHash(data.hash);
        return;
      }
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        apiGetHash(formData);
      }
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast.error("Please select a file");
      return;
    }
    console.log(file.name);
    checkOrSubmitFile(file.name);
  };

  return (
    <>
      <H1Title title="Hash Calculator" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6 rounded-lg shadow-lg bg-zinc-200">
          <div className="mb-4 relative">
            <div className="m-4 mb-2 text-center">
              <Tag type="blue"> Upload File </Tag>
              <div className=" mt-6 relative h-40 rounded-lg border-2 border-dashed border-gray-300 bg-white flex justify-center items-center hover:border-gray-400 focus-within:border-blue-500">
                <input
                  className="h-full w-full opacity-0 absolute cursor-pointer"
                  type="file"
                  onChange={handleFileChange}
                  id="avatar"
                />
                <p className="pointer-events-none text-blue-500 text-sm select-none">
                  "Drag and drop file here or click to select file"
                </p>
              </div>
              <p className="mt-2 text-gray-700 text-sm"> {file?.name}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="p-6 bg-blue-500 text-white rounded relative"
            disabled={isPending} // Disable the button while loading
          >
            {isPending ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <PulseLoader color="white" size={12} />
              </div>
            ) : (
              "Calculate Hash"
            )}
          </motion.button>
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
        </div>
      </form>
    </>
  );
};

export default FileUpload;
