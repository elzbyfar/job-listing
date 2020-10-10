import React from "react";
import "./styles.css";
import openPositions from "../../assets/open-positions.png";

const PageDescription = () => {
  return (
    <section id="page-description-section">
      <div className="page-description-container">
        <small className="small-title">OPEN POSITIONS</small>
        <h1 className="large-title">Help us create the future of software</h1>
        <p className="page-description">
          The ability to make software opens up tremendous creative
          possibilities, and we want to empower people to bring these
          possibilities to life--no mater how ambitious. The good news is that
          creating software doesn't mean writing code. What will you create?
        </p>
      </div>
      <div className="page-image-container">
        <div className="open-positions-image" />
        {/* <img
          src={openPositions}
          alt="Open Positions"
          className="open-positions-image"
        /> */}
      </div>
    </section>
  );
};

export default PageDescription;
