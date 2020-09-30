const formatOptions = async (data) => {
  const departments = new Set(["All Departments"]);
  const offices = new Set(["All Locations"]);

  data.forEach((listing) => {
    let departmentName = listing.departments[0].name;
    if (!departments.has(departmentName)) {
      departments.add(departmentName);
    }

    listing.offices.forEach((office) => {
      let officeName = office.name;
      if (!offices.has(officeName)) {
        offices.add(officeName);
      }
    });
  });

  return {
    departments: Array.from(departments),
    locations: Array.from(offices),
  };
};

export default formatOptions;
