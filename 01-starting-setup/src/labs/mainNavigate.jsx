import React from "react";
import { Outlet, Link } from "react-router-dom";
const navigateData = [
  { label: "Lab2", path: "/" },
  { label: "Expenses", path: "/exp" },
  { label: "Lab5", path: "/lab5" },
  { label: "Lab7", path: "/lab7" },
  { label: "Lab9", path: "/lab9" },
  { label: "Lab10", path: "/lab10" },
  { label: "Lab11", path: "/lab11" },
  { label: "Lab12", path: "/lab12" },
  { label: "Lab13", path: "/lab13" },
  { label: "Lab14", path: "/lab14" },
  { label: "Lab15", path: "/lab15" },
  { label: "Lab16", path: "/lab16" },
  { label: "Lab17", path: "/lab17" },
  { label: "Lab20", path: "/lab20" },
];

const MainNavigate = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#d9d9d9",
          padding: "10px 20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {navigateData.map((nav) => (
            <li key={nav.path}>
              <Link to={nav.path}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default MainNavigate;
