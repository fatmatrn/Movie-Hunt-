import { searchShows,getShowDetails,getShowDetailsWithQuery } from "./tvmaze-api.js";

const filmImg1 = document.querySelectorAll(".film-img1");
const filmImg2 = document.querySelectorAll(".film-img2");
const filmImg3 = document.querySelectorAll(".film-img3");
//const p = filmImg1.parentElement.querySelector("#firstP")
let randomNum = Math.floor(Math.random()*10000);


getShowDetailsWithQuery("you", (score)=>{
    console.log(score[5].show);

    //p.innerHTML = score[5].show.name;
    for(let [i, film]  of filmImg1.entries()){
        film.setAttribute("src", score[i].show.image.medium);

        film.parentElement.querySelector("div h5").innerText=score[i].show.name;
        film.parentElement.querySelector("div p").innerHTML="Language:"+score[i].show.language;
    }
    for(let [i, film]  of filmImg2.entries()){
        film.setAttribute("src", score[i+3].show.image.medium);

        film.parentElement.querySelector("div h5").innerText=score[i].show.name;
        film.parentElement.querySelector("div p").innerHTML="Language:"+score[i].show.language;
    }
    for(let [i, film]  of filmImg3.entries()){
        film.setAttribute("src", score[i+6].show.image.medium);

        film.parentElement.querySelector("div h5").innerText=score[i].show.name;
        film.parentElement.querySelector("div p").innerHTML="Language:"+score[i].show.language;

   // filmImg1.setAttribute("src", score[5].show.image.medium);
    //filmImg2.setAttribute("src", score[7].show.image.medium);
    //filmImg3.setAttribute("src", score[8].show.image.medium);
}});