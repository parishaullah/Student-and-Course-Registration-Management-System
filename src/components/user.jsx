import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import UserTable from "./userTable";
import Pagination from "./common/pagination";
import {getUsers} from "../services/userService";

import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class User extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "user_id", order: "asc" }
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users: users });
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
        users: allUsers
      } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter(m =>
        m.user_id.toString().startsWith(searchQuery.toString())||
        m.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())||
        m.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
     

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { totalCount, data: users } = this.getPagedData();

    return (
      <div>
          <Link
            to="/users/new"
            className="btn btn-dark"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Add New user
          </Link>
          <p>Showing {totalCount} user in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <UserTable
            users={users}
            sortColumn={sortColumn}
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

export default User;
