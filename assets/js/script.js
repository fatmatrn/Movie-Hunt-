import { searchShows,getShowDetails } from "./tvmaze-api.js";

const filmImg1 = document.querySelector(".film-img1");
const filmImg2 = document.querySelector(".film-img2");
const filmImg3 = document.querySelector(".film-img3");
let randomNum = Math.floor(Math.random()*10000);

const fillCarousel = ()=>{

         
    getShowDetails(1111, (show)=>{
        console.log(show);
        console.log("65")
    
        //const title = document.getElementById("title");
    
        //title.innerHTML = show.name;
       filmImg1.setAttribute("src", show.image.original);
    })
    }

