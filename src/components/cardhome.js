import HomePage from "./homepage";
import HomePageData from "../constants/moviedata";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(){
    // const axios = require('axios');
    let [moviedata,setMovieData]=useState();

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'aabfdf78dfmshb304b19943edb80p1a9859jsnd1bc79ffd182',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

async function getMoviesData(){


    try {
         const response = await axios.request(options);
         setMovieData(response.data);
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
    }
}
 useEffect(()=>{
    getMoviesData();
 }
,[])
    return(
        <>
        {moviedata && moviedata.map((item, index) => {
            return (
                <HomePage
                    img={item.image}
                    title={item.title}
                    content={item.description}
                    rating={item.rating} />
            );
        })}
        </>
    );
}
export default Home;