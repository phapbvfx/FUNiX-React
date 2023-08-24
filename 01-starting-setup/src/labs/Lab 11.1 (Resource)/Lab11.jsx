import React from "react";
import UserFinder from "./components/UserFinder.jsx";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Lab11 = () => {
  return (
    <div>
      <UserFinder users={DUMMY_USERS} />
    </div>
  );
};

export default Lab11;
