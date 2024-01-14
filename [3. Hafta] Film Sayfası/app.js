const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const movieListRandom = document.querySelectorAll(".movie-list-random");

document.addEventListener("DOMContentLoaded", () => {
  const refreshMovieList = () => {
    fetch("https://api.ahmetaydin.dev/api/v1/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API isteği başarısız.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          const movieList = document.querySelector(`[customName="randomList"]`);

          movieList.innerHTML = "";

          data.data.forEach((movie) => {
            const movieItem = document.createElement("div");
            movieItem.classList.add("movie-list-item");

            movieItem.innerHTML = `
                      <img class="movie-list-item-img" src="${movie.thumbnail}" alt="${movie.title}">
                      <span class="movie-list-item-title">${movie.title}</span>
                      <p class="movie-list-item-desc">${movie.extract}</p>
                      <button class="movie-list-item-button">İzle</button>
                  `;

            movieList.appendChild(movieItem);
          });
        } else {
          console.error("API yanıtı beklenen veri yapısal bir sorun içeriyor.");
        }
      })
      .catch((error) => console.error(error));
  };

  refreshMovieList();

  const refreshButton = document.getElementById("refreshButton");
  refreshButton.addEventListener("click", refreshMovieList);
});

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
