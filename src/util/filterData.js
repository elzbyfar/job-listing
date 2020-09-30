const filterData = async (data, department, location) => {
  let filteredListings = await data;

  if (department !== "All Departments") {
    filteredListings = await data.filter((listing) => {
      if (listing.departments[0].name === department) {
        return listing;
      }
    });
  }

  if (location !== "All Locations") {
    filteredListings = await filteredListings.filter((listing) => {
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
