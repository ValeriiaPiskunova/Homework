const apiKey = "b85745f8";
let realPoster;
const movieForm = document.querySelector("#movies-form");
const resultsContainer = document.querySelector("#results");
const detailsContainer = document.querySelector("#details");
const paginationContainer = document.querySelector("#pagination");

movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  paginationContainer.style.display = "none";

  const title = document.querySelector("#title").value;
  const type = document.querySelector("#type").value;
  let page = 1;

  const movies = await searchMovies(title, type, page);
  displayMovies(movies);
});

async function searchMovies(title, type, page) {
  const url = `https://www.omdbapi.com/?s=${title}&type=${type}&page=${page}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  const totalResults = data.totalResults;

  if (data.Response === "True") {
    displayPagination(totalResults, title, type, page);
    return data.Search;
  } else {
    return [];
  }
}

function displayPagination(totalResults, title, type, page) {
  let currentPage = page;
  let totalPages = Math.min(10, Math.ceil(totalResults / 10));

  paginationContainer.style.display = "flex";
  paginationContainer.innerHTML = `
      <button class="previous-button">previous page</button>    
      <p class="current-page">Page ${currentPage} of ${totalPages}</p>
      <button class="next-button">next page</button>
  `;

  const previousButton = document.querySelector(".previous-button");
  const nextButton = document.querySelector(".next-button");

  if (currentPage === 1) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
    previousButton.addEventListener("click", async (event) => {
      currentPage--;

      document.querySelector("#movies-form").scrollIntoView({
        behavior: "smooth",
      });

      const movies = await searchMovies(title, type, currentPage);
      displayMovies(movies);
    });
  }

  if (currentPage === 10 || currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;

    nextButton.addEventListener("click", async (event) => {
      currentPage++;

      document.querySelector("#movies-form").scrollIntoView({
        behavior: "smooth",
      });

      const movies = await searchMovies(title, type, currentPage);
      displayMovies(movies);
    });
  }
}

function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  if (movies.length === 0) {
    resultsContainer.innerHTML = `<h1>Movie not found!</h1>`;
    return;
  }

  for (const movie of movies) {
    const div = document.createElement("div");
    div.classList.add("movie-item");

    realPoster =
      movie.Poster === "N/A" ? "./no_image.jpg" : movie.Poster;

    div.innerHTML = `
      <img src="${realPoster}" alt="Poster">
      <p>${movie.Title} (${movie.Year})</p>
      <button class="details-button" data-imdbid="${movie.imdbID}">details</button>
    `;
    resultsContainer.appendChild(div);
  }

  const detailsButtons = document.querySelectorAll(".details-button");
  for (const button of detailsButtons) {
    button.addEventListener("click", async (event) => {
      const imdbID = event.target.getAttribute("data-imdbid");
      const movie = await getMovieDetails(imdbID);
      displayDetails(movie);
      document.querySelector("#details").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

async function getMovieDetails(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayDetails(movie) {
  realPoster =
    movie.Poster === "N/A" ? "./img/no_image.jpg" : movie.Poster;

  detailsContainer.style.display = "flex";

  detailsContainer.innerHTML = `
      <img src="${realPoster}" alt="Poster">
      <div class="details-wrapper">
      <h2>${movie.Title} (${movie.Year})</h2> 
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>imdbRating:</strong> ${movie.imdbRating}</p>
      <button class="close-button">close</button>
      </div>`;

  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", (event) => {
    detailsContainer.innerHTML = "";
    detailsContainer.style.display = "none";
  });
}
