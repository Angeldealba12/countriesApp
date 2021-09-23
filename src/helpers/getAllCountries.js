export const getAllCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const response = await data.json();
    return response
  };