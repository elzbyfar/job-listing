import React, { Fragment, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import customerSuccess from "../../assets/customer-success.png";
import engineering from "../../assets/engineering.png";
import marketing from "../../assets/marketing.png";
import engineeringArrow from "../../assets/arrow-engineering.svg";
import customerSuccessArrow from "../../assets/arrow-customer-success.svg";
import marketingArrow from "../../assets/arrow-marketing.svg";
import "./styles.css";

const Results = () => {
  const { listings, activeDepartments } = useContext(FilterContext);

  const deptIcons = {
    Engineering: engineering,
    Marketing: marketing,
    "Customer Success": customerSuccess,
    "Engineering Arrow": engineeringArrow,
    "Marketing Arrow": marketingArrow,
    "Customer Success Arrow": customerSuccessArrow,
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
                  <a
                    target="_blank"
                    className="job-link"
                    href={`https://airtable.com/jobs/${listing.id}`}
                  >
                    <div className="job-container" key={j}>
                      <div className="border-arrow-container">
                        <div className={border(deptName)}>
                          <img
                            src={`${deptIcons[`${deptName} Arrow`]}`}
                            alt="right-arrow"
                            className="arrow"
                          ></img>
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
                  </a>
                );
              }
              return;
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
