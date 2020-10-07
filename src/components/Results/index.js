import React, { Fragment, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import customerSuccess from "../../assets/customer-success.png";
import engineering from "../../assets/engineering.png";
import marketing from "../../assets/marketing.png";
import "./styles.css";

const Results = () => {
  const { listings, activeDepartments } = useContext(FilterContext);

  const deptIcons = {
    Engineering: engineering,
    "Customer Success": customerSuccess,
    Marketing: marketing,
  };

  const resultsLayout = () => {
    let items = activeDepartments.map((deptName, i) => {
      let deptSections = [];

      deptSections.push(
        <Fragment key={i}>
          <div className="result-title-container">
            <img alt={`${deptName}`} src={`${deptIcons[deptName]}`} />
            <h2 className="result-title">{deptName}</h2>
          </div>
          {listings.map((listing, j) => {
            if (listing.departments[0].name === deptName) {
              return (
                <div key={j}>
                  {listing.offices.map((office, k) => {
                    return <span key={k}>{office.name}</span>;
                  })}
                  <h3>{listing.title}</h3>
                </div>
              );
            }
          })}
        </Fragment>
      );

      return deptSections;
    });
    return items;
  };

  return <div>{resultsLayout()}</div>;
};

export default Results;
