import React from "react";
import "./card.css";
export const Card = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
        </div>
        <div className="card-title">By Category</div>
      </div>{" "}
      <div className="card">
        <div className="card-body"></div>
        <div className="card-title">By Genere</div>
      </div>{" "}
      <div className="card">
        <div className="card-body"></div>
        <div className="card-title">By Author</div>
      </div>
    </div>
  );
};
