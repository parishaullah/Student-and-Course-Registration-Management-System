import React, { Component } from "react";
import Table from "./common/tctable";

class CourseTable extends Component {
  columns = 
  [
    {
      path: "student_id", label: "ID",
    },
    { path: "course_id", label: "Course ID" },
    { path: "section_id", label: " Section" },
    { path: "course_updated_by_user_id", label: "Updated By" },
  ];

  render() {
    const { courses, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={courses}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CourseTable;
