import React, { Fragment, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import customerSuccess from "../../assets/customer-success.png";
import engineering from "../../assets/engineering.png";
import marketing from "../../assets/marketing.png";
import rightArrow from "../../assets/right-arrow.svg";
import "./styles.css";

const Results = () => {
  const { listings, activeDepartments } = useContext(FilterContext);

  const deptIcons = {
    Engineering: engineering,
    "Customer Success": customerSuccess,
    Marketing: marketing,
  };

  const border = (deptName) => {
    return `border ${deptName.replace(" ", "-").toLowerCase()}-line`;
  };

  const officeName = (k, listing, office) => {
    return k === listing.offices.length - 1 ? office.name : office.name + ", ";
  };

  const resultsLayout = () => {
    let results = activeDepartments.map((deptName, i) => {
      let deptSections = [];

      deptSections.push(
        <Fragment key={i}>
          <div className="dept-name-container">
            <img alt={`${deptName}`} src={`${deptIcons[deptName]}`} />
            <h2 className="dept-name">{deptName}</h2>
          </div>
          <div className="listings-grid">
            {listings.map((listing, j) => {
              if (listing.department.name === deptName) {
                return (
                  <div className="job-container" key={j}>
                    <div className={border(deptName)}>
                      <div className="arrow-container">
                        <span className="border-arrow"></span>
                      </div>
                    </div>
                    {listing.offices.map((office, k) => {
                      return (
                        <span className="office-names" key={k}>
                          {officeName(k, listing, office)}
                        </span>
                      );
                    })}
                    <h3 className="job-title">{listing.title}</h3>
                  </div>
                );
              }
            })}
          </div>
        </Fragment>
      );

      return deptSections;
    });
    return results;
  };

  return <div className="results-wrapper">{resultsLayout()}</div>;
};

export default Results;
