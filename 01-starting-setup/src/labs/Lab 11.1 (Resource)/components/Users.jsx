import React, { Component } from "react";

import classes from "./Users.module.css";
import User from "./User.jsx";

const usersList = (users) => (
  <ul>
    {users.map((user) => (
      <User
        key={user.id}
        name={user.name}
      />
    ))}
  </ul>
);

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
      message: "Member notfound",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => ({
      ...curState,
      showUsers: !curState.showUsers,
    }));
  }
  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers &&
          this.props.users &&
          usersList(this.props.users)}
      </div>
    );
  }
}

export default Users;
