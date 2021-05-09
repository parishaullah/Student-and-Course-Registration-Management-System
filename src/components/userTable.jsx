import React, { Component } from "react";
import Table from "./common/tutable";

class UserTable extends Component {
  columns = 
  [
    {
      path: "user_id",
      label: "ID",
    },
    { path: "email", label: "Email" },
    { path: "user_name", label: "First Name" },
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
