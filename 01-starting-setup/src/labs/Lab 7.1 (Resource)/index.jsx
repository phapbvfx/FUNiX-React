import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser.js";
import UsersList from "./Components/Users/UsersList.js";

const initUsers = [
  {
    name: "Chuc Dung",
    age: 2349,
  },
  {
    name: "Manh Hoach",
    age: 2389,
  },
];

const Lab7 = () => {
  const [users, setUsers] = useState(initUsers);
  const handleAdduser = (user) => {
    setUsers((prev) => [...prev, user]);
  };
  return (
    <>
      <AddUser onAddUser={handleAdduser} />
      <UsersList users={users} />
    </>
  );
};

export default Lab7;
