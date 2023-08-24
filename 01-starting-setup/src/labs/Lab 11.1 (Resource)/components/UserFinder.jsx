import React, { Component, useEffect, useState } from "react";

import classes from "./UserFinder.module.css";
import Users from "./Users.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchItem: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchItem !== this.state.searchItem) {
      this.setState((prevState) => ({
        ...prevState,
        filteredUsers: prevState.filteredUsers.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchItem)
        ),
      }));
    }
  }

  searchChangeHandler = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      searchItem: e.target.value,
    }));
  };
  render() {
    return (
      <div className={classes.finder}>
        <input
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
          value={this.state.searchItem}
          placeholder="enter what are you searching"
        />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

export const UserFinder = () => {
  const [searchItem, setSetsearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchItem))
    );
  }, [searchItem]);

  const searchChangeHandler = (e) => {
    setSetsearchItem(e.target.value);
  };
  return (
    <div className={classes.finder}>
      <input
        type="search"
        onChange={searchChangeHandler}
        value={searchItem}
        placeholder="enter what are you searching"
      />
      <Users users={filteredUsers} />
    </div>
  );
};

export default UserFinderList;
