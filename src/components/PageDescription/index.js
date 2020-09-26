import React from "react";
import "./styles.css";
import openPositions from "../../assets/open-positions.png";

const PageDescription = () => {
  return (
    <section id="page-description-container">
      <div className="page-description">
        <small>OPEN POSITIONS</small>
        <h1>Help us create the future of software</h1>
        <p>
          The ability to make software opens up tremendous creative
          possibilities, and we want to empower people to bring these
          possibilities to life--no mater how ambitious. The good news is that
          creating software doesn't mean writing code. What will you create?
        </p>
      </div>
      <div className="page-image">
        <img src={openPositions} />
      </div>
    </section>
  );
};

export default PageDescription;
