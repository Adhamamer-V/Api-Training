// script.js
let allCountries = []; // Variable to store all countries data
fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    allCountries = data; // Store all countries data in the variable
    displayCountries(allCountries); // Display all countries initially
  })
  .catch((error) => {
    console.error("Error:", error);
  });
const countryCards = document.getElementById("country-cards");
const input = document.getElementById("search-input");
const searchIcon = document.querySelector(".searchIcon");

function filterCountries() {
  const searchTerm = input.value.toLowerCase();
  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm)
  );

  displayCountries(filteredCountries);
}

function displayCountries(countries) {
  countryCards.innerHTML = "";

  countries.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const flag = document.createElement("img");
    flag.src = country.flags.png;
    flag.alt = `${country.name} flag`;
    card.appendChild(flag);

    const textCard = document.createElement("div");
    textCard.classList.add("Text-Card");
    card.appendChild(textCard);

    const countryName = document.createElement("h2");
    countryName.textContent = country.name;
    textCard.appendChild(countryName);

    const population = document.createElement("p");
    population.textContent = `Population: ${country.population}`;
    textCard.appendChild(population);

    const region = document.createElement("p");
    region.textContent = `Region: ${country.region}`;
    textCard.appendChild(region);

    const capital = document.createElement("p");
    capital.textContent = `Capital: ${country.capital}`;
    textCard.appendChild(capital);

    card.addEventListener("click", () => {
      window.open(`country-details.html?name=${country.name}`, "_blank");
    });

    countryCards.appendChild(card);
  });

  if (countries.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No matching countries found.";
    countryCards.appendChild(noResults);
  }
}

function performSearch() {
  filterCountries();
}

input.addEventListener("input", performSearch);
searchIcon.addEventListener("click", performSearch);
