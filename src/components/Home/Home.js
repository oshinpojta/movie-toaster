// import { useEffect, useState, useRef } from 'react'
import React from "react";
import "./Home.css"
import MovieCarousel from "../MovieCarousel/MovieCarousel";

const Home = () => {

  return (
    <>
    <MovieCarousel />
    <div className="text-container">
        <h1>Welcome to Movie Toaster</h1>
        <h3>
            Click on Movies in Nav-Bar. An Awesome Website to watch movie ratings and reviews and much more. Free for everyone.
            Your one single stop for all movie recommendations. All new releases and old pictures for small, big, old, young, ladies and gentlemen, for every ethenicity, race, gender and all of the species on Earth.
        </h3>
        <br />
        <h3>
          An elegant website to showcase responsive design. If you checkout this website on different displays or even when decreasing browser-window width, it displays smoth transition between movie-grid items.
          Added advanced features like Top-Loader and Infinite Scroll which makes user-experience even better.
          <br />
          <br />
          <ul className="home-list">
            <li> Added Search-Bar for searching based on title, plot, cast, directors, genres, languages etc.</li>
            <li> Use of webhooks like useState, useEffect, useRef, useContext.</li>
            <li> Added features like setting offset and limit for pagination.</li>
            <li> Edit movie details or delete movies, all CRUD operations working smoothly.</li>
            <li> You can now Bookmark and add Favorite movies to Storage.</li>
            <li> Advanced UI like Top-Loader and Infinite-Scroll added for seemless UX.</li>
            <li> Elegant card responsive-ui.</li>
            <li> Enjoy this piece of Art ...!!!</li>
          </ul>
          
        </h3>
        <br />
        <h3>
        Thank You for visiting this website! 
        </h3>
    </div>
    </>
  )
}

export default Home
