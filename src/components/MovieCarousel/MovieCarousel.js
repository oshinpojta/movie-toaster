import React from 'react'
import "./MovieCarousel.css"
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import m1 from "../../assets/images/3207173-adventure-astronaut-interstellar-mystery-poster-sci-fi-space-spaceship.jpg"
import m3 from "../../assets/images/Hollywood-Upcoming-Movies-Doctor-Strange-2016-HD-Poster.jpg"
import m2 from "../../assets/images/wp4019390.jpg"
import m4 from "../../assets/images/1324815.jpg"
import m5 from "../../assets/images/wallpapersden.com_oppenheimer-2023-movie-poster_1920x1080.jpg"

// https://www.npmjs.com/package/react-material-ui-carousel

function Item(props)
{   const { img } = props.item;
    return (
      <section className="carousel-section" style={{backgroundImage:`url(${img})`}}>
      </section>
    )
}


const MovieCarousel = () => {
  
  var items = [
    {
        img: m1,
        alt : "image"
    },
    {
      img: m4,
      alt : "image"
    },
    {
      img: m5,
      alt : "image"
    },
    {
        img: m2,
        alt : "image"
    },
    {
      img: m3,
      alt : "image"
    }
]

  return (
    <>
        <Carousel stopAutoPlayOnHover={false} animation={"slide"} interval={3000} duration={900} IndicatorIcon={ <AcUnitSharpIcon />} NextIcon={<ArrowForwardIosSharpIcon/>} PrevIcon={<ArrowBackIosSharpIcon/>}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </>
  )
}

export default MovieCarousel
