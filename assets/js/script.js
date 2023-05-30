import { searchShows,getShowDetails,getShowDetailsWithQuery } from "./tvmaze-api.js";

const carouselItems = document.querySelectorAll(".carousel-item");
let randomNum = Math.floor(Math.random()*10000);

let arr = [335,3594,82,431,123,2097,716,541,19]

for(let i=0; i<=arr.length;i++){

getShowDetails(arr[i], (show)=>{
    //console.log(show.premiered.substring(0,4));
    let span = document.createElement("span");
    span.innerHTML=show.premiered.substring(0,4);

        carouselItems[i].querySelector("img").setAttribute("src", show.image.medium);
        

        carouselItems[i].querySelector("h5").innerText=show.name;
        carouselItems[i].querySelector("p").innerHTML="Language:"+show.language;
        carouselItems[i].querySelector("div").appendChild(span);
      
    
    });
}

let timeoutSearch = null;
const lstTvShows = document.getElementById("lstTvShows");


document.getElementById("txtSearch").addEventListener("input", (e) => {
  const query = e.target.value;

  if (timeoutSearch) clearTimeout(timeoutSearch);
  timeoutSearch = setTimeout(() => {
    searchShows(query, (shows) => {
      createMovies(shows);
    });
  }, 500);
});

lstTvShows.addEventListener("click", (e)=>{
  const selectedCard = e.target.closest(".card");
  const showId = selectedCard.dataset.show;
  location.href = `107-tvshow-details.html?id=${showId}`;
});

const createMovies = (shows) => {
  lstTvShows.innerHTML = "";
  shows.forEach((item) => {
    const movieCard = createMovieCard(item);
    lstTvShows.insertAdjacentHTML("afterbegin", movieCard);
  });
};

const createMovieCard = (item) => {
  const { id, image, name, genres } = item.show;

  let movieImage = "../img/purple.png";

  if (image) {
    movieImage = image.medium;
  }


  return `
    <div class="col">
        <div class="card h-100" style="cursor:pointer" data-show="${id}">
          <img src=${movieImage} class="card-img-top" alt="${name}" />
          <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${genres.join("-")}</p>
          </div>
        </div>
    </div>`;
};

