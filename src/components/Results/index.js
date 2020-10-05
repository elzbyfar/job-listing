import React, { Fragment, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { ResultsContext } from "../../contexts/ResultsContext";
import customerSuccess from "../../assets/customer-success.png";
import engineering from "../../assets/engineering.png";
import marketing from "../../assets/marketing.png";
import "./styles.css";

const Results = () => {
  const { listings } = useContext(FilterContext);
  const { activeDepartments } = useContext(ResultsContext);

  const existingDepartments = new Set();
  const deptIcons = {
    Engineering: engineering,
    "Customer Success": customerSuccess,
    Marketing: marketing,
  };

  const resultsLayout = () => {
    let layout = listings.map((listing, i) => {
      let deptName = listing.departments[0].name;
      let locations = listing.offices;
      let jobTitle = listing.title;

      let output = [];

      if (!existingDepartments.has(deptName)) {
        existingDepartments.add(deptName);

        output.push(
          <Fragment key={i}>
            <div className="result-title-container">
              <img alt={`${deptName}`} src={`${deptIcons[deptName]}`} />
              <h2 className="result-title">{deptName}</h2>
            </div>
            <div>
              <hr />
              {locations.map((location, j) => {
                if (j > 0) {
                  return <span key={j}>, {location.name}</span>;
                } else {
                  return <span key={j}>{location.name}</span>;
                }
              })}
              <div>
                <h2>{jobTitle}</h2>
              </div>
            </div>
          </Fragment>
        );
      }

      output.push(
        <div key={i}>
          <hr />
          {locations.map((location, j) => {
            if (j > 0) {
              return <span key={j}>, {location.name}</span>;
            } else {
              return <span key={j}>{location.name}</span>;
            }
          })}
          <div>
            <h2>{jobTitle}</h2>
          </div>
        </div>
      );

      return output[0];
    });
    return layout;
  };

  console.log(activeDepartments);

  return <div>{resultsLayout()}</div>;
};

export default Results;
