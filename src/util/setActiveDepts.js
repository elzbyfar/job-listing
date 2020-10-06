const setActiveDepts = async (allListings) => {
  const depts = await new Set();

  await allListings.forEach((listing) => {
    if (listing.departments) {
      depts.add(listing.departments[0].name);
    }
  });

  return depts;
};

export default setActiveDepts;
