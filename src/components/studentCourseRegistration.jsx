import React, { Component } from "react";
import StudentTable from "./studentTable";
import Pagination from "./common/pagination";
import { getStudents} from "../services/studentInfoService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import Courses from "./takenCourse";
import StudentRegisterForm from "./courseRegistrationForm";

class Student extends Component {


  state = {
    students: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "student_id", order: "asc" }
  };

  async componentDidMount() {
    const { data: students } = await getStudents();
    this.setState({ students: students });
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
        students: allStudents
      } = this.state;

      let filtered = allStudents;
      if (searchQuery)
        filtered = allStudents.filter(m =>
          m.student_id.toString().startsWith(searchQuery.toString())||
          m.student_name.toLowerCase().startsWith(searchQuery.toLowerCase())||
          m.student_cgpa.toLowerCase().startsWith(searchQuery.toString())
        
        );

      const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
      const students = paginate(sorted, currentPage, pageSize);
      return { totalCount: filtered.length, data: students };
    };
    

    render() {
      const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
      const { totalCount, data: students } = this.getPagedData();

      return (
        <div>
          <h1 className="text-center text-dart"> Student Course Registration</h1> 
             
          <h3 > Student Information:</h3>
          <p>Showing {totalCount} students from the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <StudentTable
            students={students}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          <Courses/>
          <StudentRegisterForm/>
        </div>
      );
    }
  }

  export default Student;
