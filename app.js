fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>displayCountries(data))

const displayCountries = countries =>{
    const countriesDiv = document.getElementById("countries-conatainer");

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className ='country';
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onClick="displayCountryDetail('${country.name}')">Details</button>
        `;
        
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
   
}
const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
   fetch(url)
   .then(res =>res.json())
   .then(data => renderContryInfo(data[0]))
}
 
const renderContryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h3>Population : ${country.population}</h3>
        <h3>Area :${country.area}</h3>
        <h3>Native Name: ${country.nativeName}</h3>
        <img src="${country.flag}">
    `


}