import React, { Component } from "react";
import Table from "./common/table";

class StudentTable extends Component {
  columns = 
  [
    {
      path: "student_id", label: "ID",
    },
    { path: "student_name", label: "Student Name" },
    { path: "student_cgpa", label: "CGPA" }, 

  ];

  render() {
    const { students, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={students}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default StudentTable;
