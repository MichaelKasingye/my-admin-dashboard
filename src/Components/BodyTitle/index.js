import React from "react";
import { Link } from "react-router-dom";

export default function BodyTitle({title}) {
  return (
    <div className="pagetitle">
    <h1>{title}</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">{title}</li>
      </ol>
    </nav>
  </div>
  );
}


