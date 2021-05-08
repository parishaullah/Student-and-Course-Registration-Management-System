import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/tctable";

class CourseTable extends Component {
  columns = 
  [
    {
      path: "p",
      label: "Action",
     content: course => <Link to={`/courses/${course.course_id}`}> Edit </Link>
    },
    {
      path: "course_id",
      label: "ID",
    },
    { path: "course_title", label: "Title" },
    { path: "course_description", label: "Description" },
    { path: "course_price", label: "Price" },
    { path: "course_rating", label: "Rating" },
    { path: "course_created_by_user_id", label: "Created By" },
    { path: "course_updated_by_user_id", label: "Updated By" },
    { path: "last_update_time", label: "Updated Time" },
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
