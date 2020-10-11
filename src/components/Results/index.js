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
          <div className="department-name-container">
            <img alt={`${deptName}`} src={`${deptIcons[deptName]}`} />
            <h2 className="department-name">{deptName}</h2>
          </div>
          <div className="results-grid">
            {listings.map((listing, j) => {
              if (listing.department.name === deptName) {
                return (
                  <div className="job-container" key={j}>
                    <hr
                      className={`decorative-line ${deptName
                        .replace(" ", "-")
                        .toLowerCase()}-${j}-line`}
                    />
                    {listing.offices.map((office, k) => {
                      return (
                        <span className="office-names" key={k}>
                          {k === listing.offices.length - 1
                            ? office.name
                            : office.name + ", "}
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
    return items;
  };

  return <div className="results-container">{resultsLayout()}</div>;
};

export default Results;
