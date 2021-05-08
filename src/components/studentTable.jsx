import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class StudentTable extends Component {
  columns = 
  [
    {
      path: "p",
      label: "Action",
     content: student => <Link to={`/students/${student.student_id}`}> Edit </Link>
    },
    {
      path: "student_id",
      label: "ID",
    },
    { path: "student_first_name", label: "First Name" },
    { path: "student_last_name", label: "Last Name" }, 
    { path: "student_grade_level", label: "Grade Level" },
    { path: "student_university_name", label: "University" },
    { path: "student_phone_number", label: "Phone No" },
    { path: "student_email", label: "Email" },
    { path: "student_address", label: "Address" },
    { path: "student_city", label: "City" },
    { path: "student_state", label: "State" },
    { path: "student_country", label: "Country" },
    { path: "student_created_by_user_id", label: "Created by" },
    { path: "student_updated_by_user_id", label: "Updated by" },
    { path: "last_update_time", label: "Update Time" },

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
