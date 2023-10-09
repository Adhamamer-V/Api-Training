// script.js
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("name");
fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const country = data.find((country) => country.name === countryName);
    if (country) {
      const flagElement = document.querySelector(".flag");
      const nameElement = document.querySelector(".name");
      const populationElement = document.querySelector(".population");
      const regionElement = document.querySelector(".region");
      const subregionElement = document.querySelector(".subregion");
      const capitalElement = document.querySelector(".capital");
      const languageElement = document.querySelector(".language");
      const currenciesElement = document.querySelector(".currencies");
      const topLevelDomainElement = document.querySelector(".top-level-domain");
      flagElement.src = country.flags.png; // Use the src attribute instead of background-image
      flagElement.alt = `${country.name} flag`;
      nameElement.textContent = country.name;
      populationElement.textContent = `Population: ${country.population}`;
      regionElement.textContent = `Region: ${country.region}`;
      subregionElement.textContent = `Subregion: ${country.subregion}`;
      capitalElement.textContent = `Capital: ${country.capital}`;
      languageElement.textContent = `Language: ${country.languages[0].name}`;
      currenciesElement.textContent = `Currencies: ${country.currencies[0].name}`;
      topLevelDomainElement.textContent = `Top Level Domain: ${country.topLevelDomain}`;
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function redirectToHome() {
  window.location.href = "index.html";
}
