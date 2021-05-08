import React, { Component } from "react";
import Table from "./common/tutable";

class UserTable extends Component {
  columns = 
  [
   /* {
      path: "p",
      label: "Action",
     content: user => <Link to={`/users/${user.user_id}`}> Edit </Link>
    },*/
    {
      path: "user_id",
      label: "ID",
    },
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    { path: "email", label: "Email" },
    { path: "password", label: "Password" },
    { path: "user_status" , label: "Status" },
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UserTable;
