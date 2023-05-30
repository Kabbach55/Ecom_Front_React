import React from "react";
import PageNotFound from "./PageNotFound";

function Home() {
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
    </div>
  );
}

export default Home;
