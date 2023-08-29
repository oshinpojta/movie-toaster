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
            Website to watch movie ratings and reviews and much more. Free for everyone.
            Your one single stop for all movie recommendations. All new releases and old pictures for small, big, old, young, ladies and gentlemen, for every ethenicity, race, gender and all of the species on Earth.
        </h3>
        <br />
        <h3>
          An elegant website to showcase responsive design. If you checkout this website on different displays or even when decreasing browser-window width, it displays smoth transition between movie-grid items.
          Added advanced features like Top-Loader and Infinite Scroll which makes user-experience even better.
          <ul className="home-list">
            <li>1. Added Search Bar for searching based on title, plot, cast, directors, genres, languages etc</li>
            <li>2. Use of webhooks like useState, useEffect, useRef, useContext </li>
            <li>3. Added features like setting offset and limit for pagination</li>
            <li>4. Advanced UI like Top-Loader and Infinite-Scroll</li>
            <li>5. Elegant card responsive-ui</li>
            <li>6. Enjoy this piece of Art ...!!!</li>
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
