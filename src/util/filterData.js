const filterData = (data, department, location) => {
  let filteredListings = data.jobs;

  if (department !== "All Departments") {
    filteredListings = filteredListings.filter((listing) => {
      if (listing.department.name === department) {
        return listing;
      }
    });
  }

  if (location !== "All Locations") {
    filteredListings = filteredListings.filter((listing) => {
      let matchingLocations = 0;
      listing.offices.filter((office) => {
        if (office.name === location) {
          matchingLocations++;
        }
      });
      if (matchingLocations > 0) {
        return listing;
      }
    });
  }

  return filteredListings;
};

export default filterData;
