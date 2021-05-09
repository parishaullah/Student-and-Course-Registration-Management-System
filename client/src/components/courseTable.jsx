import React, {Component} from "react";
import {Link} from "react-router-dom";
import Table from "./common/tctable";

class CourseTable extends Component {
    columns =
        [
            {path: "course_id", label: "Code",},
            {path: "course_title", label: "Course Title"},
            {path: "course_dept_name", label: "Dept."},
            {path: "course_credit", label: "Credit"},
            {path: "p", label: "Update", content: course => <Link to={`/courses/${course.course_id}`}> Edit </Link>},

        ];

    render() {
        const {courses, onSort, sortColumn} = this.props;

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
