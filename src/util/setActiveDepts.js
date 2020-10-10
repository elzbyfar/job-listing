const setActiveDepts = (allListings) => {
  const activeDepts = new Set();

  allListings.forEach((listing) => {
    if (listing.department) {
      activeDepts.add(listing.department.name);
    }
  });

  return Array.from(activeDepts);
};

export default setActiveDepts;
