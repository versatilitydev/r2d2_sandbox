import React from "react";

interface ShowingPagesProps {
  currentPage: number;
  itemsPerPage: number;
  filteredUsers: number; // Replace `any[]` with the actual type of `filteredUsers`
}

const ShowingPages: React.FC<ShowingPagesProps> = ({
  currentPage,
  itemsPerPage,
  filteredUsers,
}) => {
  return (
    <div>
      Showing <span>{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
      <span>
        {currentPage !== currentPage
          ? itemsPerPage
          : currentPage * itemsPerPage}
      </span>{" "}
      of <span>{filteredUsers}</span> results
    </div>
  );
};

export default ShowingPages;
