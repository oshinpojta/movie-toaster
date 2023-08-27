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
    </div>
    </>
  )
}

export default Home
