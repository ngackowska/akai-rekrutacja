/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
console.log(pokemons);

  //uzupełnij tutaj

  document.querySelector(".pokemons").innerHTML = "";
  
  
  for (var i = 0; i < pokemons.length; i++) {

    // pokemon container
    let pokemon = document.createElement('div');
    pokemon.classList = "pokemon";
    pokemon.id = pokemons[i].name;
    pokemonsContainer.appendChild(pokemon);

    // pokemon image
    let pokemonImg = document.createElement('img');
    pokemonImg.src = pokemons[i].image;
    pokemon.appendChild(pokemonImg);

    //pokemon name and type container
    let nameTypeDiv = document.createElement('div');
    nameTypeDiv.classList = "div-name-type";
    pokemon.appendChild(nameTypeDiv);

    // pokemon name
    let name = document.createElement('p');
    name.innerHTML = pokemons[i].name;
    name.classList = "div-pokemon-name";
    nameTypeDiv.appendChild(name);

    //pokemon type
    let typeDiv = document.createElement('div');
    typeDiv.classList = "div-pokemon-type";
    nameTypeDiv.appendChild(typeDiv);

    let pokemonType = pokemons[i].types;
    for (let j = 0; j < pokemonType.length; j++) {
      let type = document.createElement("p");
      type.innerHTML = pokemonType[j];
      type.classList = "pokemon-type " + pokemonType[j];
      typeDiv.appendChild(type);
    }
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów

  // checked types
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  let filteredTypes = [];
  for (let i = 0; i < checkboxes.length; i++) {
    filteredTypes.push(checkboxes[i].id);
  }

  let filteredPokemons = [];  // filtered pokemons list

  let filteredName = document.querySelector("#pokemon-name").value;

  for (let i = 0; i < pokemons.length; i++) {

    // if pokemon's type(s) is one of the checked ones
    if (pokemons[i].types.some( ai => filteredTypes.includes(ai) )) {

      // if we also filter by name
      if (filteredName != "") {

        // if pokemon's name includes phrase from the provided filter
        if (pokemons[i].name.toLowerCase().includes(filteredName.toLowerCase())) {
          filteredPokemons.push(pokemons[i]);
        } 

      } else {  // if we don't filter the name
        filteredPokemons.push(pokemons[i]);
      }

    }
  }

  return filteredPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
