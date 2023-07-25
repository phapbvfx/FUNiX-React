import React from "react";

import Card from "../UI/Card.js";
import classes from "./UsersList.module.css";

const UsersList = function (props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
