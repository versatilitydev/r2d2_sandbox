/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import H1Title from "../components/general/H1Title";
import Spinner from "../components/loaders/Spinner";
import Table from "../components/table/Table";
import TableRow from "../components/table/TableRows";
import { HashFile } from "../settings/constants";
import { useGetFiles } from "./useGetFileList";

const FileTable = () => {
  const { isLoading, data, error } = useGetFiles();

  if (error) {
    toast.error(error.message);
    return;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <H1Title title="File List" />
      <Table>
        {data?.map((file: HashFile) => (
          <TableRow key={file.id} file={file} />
        ))}
      </Table>
    </>
  );
};

export default FileTable;
