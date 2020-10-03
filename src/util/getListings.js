import urls from "./urls";

const getListings = async () => {
  const result = await fetch(urls.getListings(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  let data = await result.json();

  return data;
};

export default getListings;
