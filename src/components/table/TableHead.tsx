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
        <th className="p-4">Vendor</th>
        <th className="p-4">Product</th>
        <th className="p-4">Version</th>
        <th className="p-4">Edition</th>
        <th className="p-4">Update</th>
        <th className="p-4">Language</th>
        <th className="p-4">Checked</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
