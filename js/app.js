function loadAllCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayAllCountry(data))
}
const displayAllCountry = (countrys) => {
    const countryContainer = document.getElementById('country-container');
    countrys.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
       <img onclick = loadDetails('${country.cca2}') src="${country.flags.png}">
        <h1> Name : ${country.name.common}</h1>
        <p> Capital : ${country.capital ? country.capital[0] : 'No Capital'
            } </p >
    `
        countryContainer.appendChild(countryDiv);

    })

}
const loadDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl m-auto">
     <h2 class="text-center text-3xl text-bold">Country Details : </h2>
                    <figure class="px-10 pt-10">
                        <img src="${country.flags.png}" alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name : ${country.name.common}</h2>
                        <p> Capital : ${country.capital ? country.capital[0] : 'No Capital'
        } </p >
                        <p> Continents : ${country.continents} </p >
                        <p> Population : ${country.population} </p>
                        
                    </div>
                </div> 
    `



}
loadAllCountry();