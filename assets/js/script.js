import { searchShows,getShowDetails,getShowDetailsWithQuery } from "./tvmaze-api.js";

const carouselItems = document.querySelectorAll(".carousel-item");
let randomNum = Math.floor(Math.random()*10000);

let arr = [335,3594,82,431,123,2097,716,541,19]

for(let i=0; i<=arr.length;i++){

getShowDetails(arr[i], (show)=>{
    console.log(show.premiered.substring(0,4));
    let span = document.createElement("span");
    span.innerHTML=show.premiered.substring(0,4);

        carouselItems[i].querySelector("img").setAttribute("src", show.image.medium);
        

        carouselItems[i].querySelector("h5").innerText=show.name;
        carouselItems[i].querySelector("p").innerHTML="Language:"+show.language;
        carouselItems[i].querySelector("div").appendChild(span);
      
    
    });
}