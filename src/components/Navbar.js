import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    const path = window.location.pathname.toLocaleLowerCase();
    setCurrentAction(path.slice(1, path.length));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              onClick={() => setCurrentAction("")}
              className={currentAction === "" ? "nav-link active" : "nav-link "}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => setCurrentAction("product")}
              className={
                currentAction === "product" ? "nav-link active" : "nav-link"
              }
              to={"/product"}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => setCurrentAction("newproduct")}
              className={
                currentAction === "newproduct" ? "nav-link active" : "nav-link"
              }
              to={"/newproduct"}
            >
              New Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
