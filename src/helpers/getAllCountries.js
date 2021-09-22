export const getAllCountries = async () => {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    const response = await data.json();
    return response
  };