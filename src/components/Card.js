import React from "react";
import star from "../images/star.svg";
import swimmer from "../images/swimmer.png";

export default function Card() {
  return (
    <div className="card">
      <img src={swimmer} alt="experience illustration" className="showcase" />
      <div className="card-info">
        <div className="rating-info">
          <img src={star} alt="star icon" className="star" />
          <p className="rating">
            5.0 <span className="faint">(6) · </span> 
            <span className="faint">USA</span>
          </p>
        </div>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="pricing">
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
