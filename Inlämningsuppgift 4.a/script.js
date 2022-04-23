function printMovies(movies) {
  /*
        Todo: Skriv ut alla filmer i arrayen "movies". Varje film ska ha följande format:

        <li data-grade="5" data-title="Star Wars">
            Star Wars
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="delete.png" alt="Delete movie" class="delete-movie">
        </li>
    */
}

function loadMovies() {
  /*
        Todo: Filmerna ska snart laddas in från localStorage, men till
        en början nöjer vi oss med en vanlig array med filmer
    */
  const movies = [
    { title: 'Star Wars', grade: 5 },
    { title: 'Titanic', grade: 4 },
    { title: 'Drive', grade: 1 },
  ]

  return movies
}

function getStars(rating) {
  /*
        Todo: Baserat på "rating" (en siffra) så returnerar denna
        funktion HTML-kod för antalet stjärnor (betyg) för en film.
    */

  let stars
  for (let i in rating) stars += '<img src="star.png" alt="Star">'

  return stars
}

function saveMovies(movies) {
  /*
        Todo: Sparar filmerna till localStorage (JSON-format)
    */
}

$('#new-movie-form').on('submit', function (e) {
  /*
        Todo: När man klickar på knappen "Spara film" så ska funktionen:
        1. Validera att man skrivit in en titel & valt ett betyg. Om inte
        så ska vi visa upp (i en popup-ruta) ett meddelande om att både
        titel & betyg måste fyllas i.
        2. Lägga till en film i vår lista av filmer i localStorage
        3. Visa den nya filmen i vår lista av filmer
        4. Återställa formuläret (ingen titel, eller betyg valt)
    */

  console.log(getStars(5))
})

$('#order-alphabetic').on('click', function () {
  /*
        Todo: Sortera filmlistan alfabetiskt stigande
    */
})

$('#order-grade').on('click', function () {
  /*
        Todo: Sortera filmlistan fallande efter betyg
    */
})

$('#movie-list').on('click', '.delete-movie', function () {
  /*
        Todo: Ska ta bort en film från:
        1. Filmlistan i localStorage
        2. Från filmlistan som visas på webbsidan
    */
})

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
  const movies = loadMovies()
  printMovies(movies)
})
