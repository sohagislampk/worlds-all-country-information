function loadAllCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayAllCountry(data))
}
const displayAllCountry = (countrys) => {
    const countryContainer = document.getElementById('country-container');
    countrys.forEach(country => {
        console.log(country.flags.png);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
       <img src="${country.flags.png}">
        <h1> Name : ${country.name.common}</h1>
        `
        countryContainer.appendChild(countryDiv);

    })

}
loadAllCountry();