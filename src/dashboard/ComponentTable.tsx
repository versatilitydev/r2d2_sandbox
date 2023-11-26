/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import H1Title from "../components/general/H1Title";
import Spinner from "../components/loaders/Spinner";
import Table from "../components/table/Table";
import TableRow from "../components/table/TableRows";
import { HashFile } from "../settings/constants";
import ShowingPages from "../components/Pagination/ShowingPages";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";
import { filterUsers } from "../settings/functions";
import ItemsPerPage from "../components/Pagination/ItemsPerPage";
import SearchInput from "../components/Search/SearchInput";
type FileProps = {
  data: any;
  error: any;
  isLoading: boolean;
};
const ComponentTable: React.FC<FileProps> = ({ data, error, isLoading }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  const filteredComponents = filterUsers(data, searchQuery);
  const currentItems = filteredComponents.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredComponents.length / itemsPerPage);
  if (error) {
    toast.error(error.message);
    return;
  }
  return (
    <>
      <ItemsPerPage value={itemsPerPage} onChange={setItemsPerPage} />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <H1Title title="Components List" />
      <Table>
        {currentItems?.map((file: HashFile) => (
          <TableRow key={file.id} file={file} />
        ))}
      </Table>
      <div className="flex justify-between mt-2">
        <ShowingPages
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          filteredUsers={data.length}
        />
        {/* Use Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ComponentTable;
