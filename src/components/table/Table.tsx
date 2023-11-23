import React, { ReactNode } from "react";
import TableHeader from "./TableHead";

type TableProps = {
  children: ReactNode;
};

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-auto mx-auto max-h-[900px] overflow-y-auto overflow-hidden">
      <table className="table-fixed w-auto">
        <TableHeader isSuperuser={null} dataType={"files"} />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
