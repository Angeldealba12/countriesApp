
export const getCountry = async ( country ) => {

    const data = await fetch(`https://restcountries.com/v3.1/name/${ encodeURI( country )}`);
    const response = await data.json();

    const countryInfo = response.map(country => {
        return {
            name: country.name,
            capital: country.capital,
            alpha2Code: country.alpha2Code,
            region: country.region,
            flag: country.flags.svg,
        }
    })

   return countryInfo;
}
