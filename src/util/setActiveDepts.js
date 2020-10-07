const setActiveDepts = async (allListings) => {
  const activeDepts = await new Set();

  await allListings.forEach((listing) => {
    if (listing.departments) {
      activeDepts.add(listing.departments[0].name);
    }
  });

  return Array.from(activeDepts);
};

export default setActiveDepts;
