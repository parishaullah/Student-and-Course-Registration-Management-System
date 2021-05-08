import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import CourseTable from "./courseTable";
import Pagination from "./common/pagination";
import {getCourses} from "../services/courseService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Course extends Component {
  state = {
    courses: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "course_id", order: "asc" }
  };

  async componentDidMount() {
    const { data: courses } = await getCourses();
    this.setState({ courses: courses });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handlePageChange = page => {
      this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      courses: allCourses
    } = this.state;

    let filtered = allCourses;
    if (searchQuery)
      filtered = allCourses.filter(m =>
        m.course_id.toString().startsWith(searchQuery.toString())||
        m.course_title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const students = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: students };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { totalCount, data: courses } = this.getPagedData();

    return (
      <div>
          <Link
            to="/courses/new"
            className="btn btn-dark"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Add New course
          </Link>
          <p>Showing {totalCount} courses in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CourseTable
            courses={courses}
            sortColumn={sortColumn}
           // onLike={this.handleLike}
            //onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
           <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
         
        
      </div>
    );
  }
}

export default Course;
