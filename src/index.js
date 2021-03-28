import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import { store } from "./services/store/store";
const $ = require("jquery");
const unsubscribe = store.subscribe(() => {
  console.log("state changed");
});

store.dispatch({
  type: "addedMovie",
  payload: {
    title: "Kids",
    genre: "Drama",
    year: 1987,
  },
});
store.dispatch({
  type: "addedMovie",
  payload: {
   title: "Getting Go, the Go Doc Project",
    genre: "Drama",
    year: 2013,
  },
});
store.dispatch({
  type: "addedMovie",
  payload: {
    title: "Blackadder's Christmas Carol",
    genre: "Comedy",
    year: 1983,
  },
});
store.dispatch({
  type: "alteredYear",
  payload: {
    id: 1,
    year: 2002,
  },
});

store.getState().forEach(({ title, year, genre }) => 
  document.querySelector("#movie_table").insertAdjacentHTML(
    "beforeend",
    `
<tr>
        <td>${title}</td>
        <td>${genre}</td>
        <td>${year}</td>
      </tr>`
  )
);

//  function displayMovies(movies) {
//   const movie_table = document.getElementById("movie_table");

//   movies.forEach((movie) => {
//     /*if (movie.year !== Number(movieSlider.value)) {
//       return;
//     }*/
//     let movie_row = document.createElement("tr");
//     // name, genre, year
//     let title_element = document.createElement("td");
//     title_element.classList.add("movie-row");
//     title_element.innerHTML = movie.title;
//     let genre_element = document.createElement("td");
//     genre_element.classList.add("movie-row");
//     genre_element.innerHTML = movie.genre;
//     let year_element = document.createElement("td");
//     year_element.innerHTML = movie.year;
//     year_element.classList.add("movie-row");
//     movie_row.appendChild(title_element);
//     movie_row.appendChild(genre_element);
//     movie_row.append(year_element);

//     movie_table.appendChild(movie_row);
//   });
// }

// function initGenreSelect() {
//   const genreSelect = document.getElementById("genre_select");

//   let genres = [];
//   // populate genres array
//   movies_db.forEach((movie) => {
//     movie.genre.split("|").forEach((genre) => {
//       if (genres.includes(genre)) {
//         return;
//       }
//       genres.push(genre);
//     });
//   });

//   genres.sort();

//   genres.forEach((genre) => {
//     const optionElement = document.createElement("option");
//     optionElement.innerHTML = genre;
//     genreSelect.appendChild(optionElement);
//   });
// }

// initGenreSelect();
// displayMovies(movies_db);

// movieSlider.addEventListener("change", filterMovies);

// function filterMovies() {
//   const movieYear = document.getElementById("year");
//   movieYear.innerText = movieSlider.value;

//   const filteredMovies = movies_db.filter(
//     (movie) => movie.year === Number(movieSlider.value)
//   );
//   displayMovies(filteredMovies);
// }
// let searchBar = document.querySelector(".search-bar");

// let names = [];
// movies_db.forEach((movie) => {
//   names.push(movie.title);
//   return names;
// });
// // console.log(names);

// searchBar.addEventListener("input", function (e) {
//   let autoSearch = [];
//   if (e.target.value) {
//     autoSearch = names.filter((name) => {
//       // console.log(name,e.target.value)
//      return name.toLowerCase().includes(e.target.value.toLowerCase())});
//     }

//   console.log(autoSearch);
// });
