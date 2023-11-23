import React from "react";

type TableHeaderProps = {
  isSuperuser: boolean | null;
  dataType: "files";
};

const TableHeader: React.FC<TableHeaderProps> = () => {
  return (
    <thead className="sticky top-0 bg-gray-200 font-extrabold text-gray-800 text-center">
      <tr className="bg-gray-200 font-extrabold text-gray-800 text-center">
        <th className="p-4">File Name</th>
        <th className="p-4">File Hash</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
