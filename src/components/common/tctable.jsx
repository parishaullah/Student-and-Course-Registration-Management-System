import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tctableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table table-striped table-dark ">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
