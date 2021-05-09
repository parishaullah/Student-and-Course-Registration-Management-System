import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/tctable";

class CourseTable extends Component {
  columns = 
  [
    /*{
      path: "p",
      label: "Action",
     content: course => <Link to={`/courses/${course.course_id}`}> Edit </Link>
    },*/
    {
      path: "student_id", label: "ID",
    },
    { path: "course_id", label: "Course ID" },
    { path: "section_id", label: " Section" },
    { path: "course_updated_by_user_id", label: "Updated By" },
   /* { path: "course_rating", label: "Rating" },
    { path: "course_created_by_user_id", label: "Created By" },
    { path: "course_updated_by_user_id", label: "Updated By" },
    { path: "last_update_time", label: "Updated Time" },*/
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
