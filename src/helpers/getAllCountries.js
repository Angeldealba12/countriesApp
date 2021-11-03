export const getAllCountries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const response = await data.json();
    return response
  };