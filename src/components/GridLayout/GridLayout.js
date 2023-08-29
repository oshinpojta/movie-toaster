import React, { useContext, useEffect, useState } from 'react';
import "./GridLayout.css"
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopLoader from '../TopLoader/TopLoader';
import Spinner from '../Spinner/Spinner';
import TagFacesSharpIcon from '@mui/icons-material/TagFacesSharp';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import SearchBar from '../SearchBar/SearchBar';
import AppContext from '../../contexts/AppContext';

const jsonHeaders = { headers: { "Content-Type": "application/json" } };

const serverURL = process.env.REACT_APP_NODEJS_URL;
// const Genres = [ 
//   { title : 'Comedy'},
//   { title : 'Crime'},
//   { title : 'Horror'},
//   { title : 'Drama'},
//   { title : 'Adventure'},
//   { title : 'Biography'},
//   { title : 'Animation'},
//   { title : 'Documentary'},
//   { title : 'Action'}
// ]

const GridLayout = (props) => {

  // regular variables
  let offset = 0;
  let bookmarked_movies = localStorage.getItem("bookmarked_movies");
  let favorite_movies = localStorage.getItem("favorite_movies");
  if(bookmarked_movies){
    bookmarked_movies = bookmarked_movies.split(",");
  }else{
    bookmarked_movies = [];
  }
  if(favorite_movies){
    favorite_movies = favorite_movies.split(",");
  }else{
    favorite_movies = [];
  }

  const state = useContext(AppContext);
  // states
  const { movies, setMovies } = state;
  const { progress, setProgress } = state;
  const { limit, setLimit } = state;
  const { hasMore, setHasMore } = state;
  const { searchText} = state;

  const [ favoriteMovies, setFavouriteMovies ] = useState(favorite_movies);
  const [ bookmarkedMovies, setBookmarkedMovies ] = useState(bookmarked_movies);

  const handleFavorites = (_id) => {
    let isFavorite = favoriteMovies.includes(_id);
    if(isFavorite){
      setFavouriteMovies(favoriteMovies.filter( id => id !== _id ));
      localStorage.setItem("favorite_movies", favoriteMovies.filter( id => id !== _id))
    }else{
      setFavouriteMovies( [...favoriteMovies, _id] );
      localStorage.setItem("favorite_movies", [...favoriteMovies, _id] )
    }
  } 

  const handleBookmarks = (_id) => {
    let isBookmarked = bookmarkedMovies.includes(_id);
    if(isBookmarked){
      setBookmarkedMovies(bookmarkedMovies.filter( id => id !== _id));
      localStorage.setItem("bookmarked_movies", bookmarkedMovies.filter( id => id !== _id))
    }else{
      setBookmarkedMovies([...bookmarkedMovies, _id]);
      localStorage.setItem("bookmarked_movies", [...bookmarkedMovies, _id])
    }
  }

  const handleDelete = (_id) => {
    setProgress(15);
    setBookmarkedMovies(bookmarkedMovies.filter( id => id !== _id));
    setFavouriteMovies(favoriteMovies.filter( id => id !== _id ));
    axios.delete(`${serverURL}/movies/delete/${_id}`).then(response => {
      getMovies();
    })
  }

  const loadMore = () => {
    setProgress(40)
    setLimit(2*limit);
    axios.post(`${serverURL}/movies/all?limit=${limit*2}&offset=${offset}`, { search_text : searchText }, jsonHeaders).then((response) => {
      setMovies(response.data.data.movies);
      setProgress(100)
      if(response.data.data.movies.length < limit){
        setHasMore(false);
      }
    })
  }

  const getMovies = () => {
    setProgress(40)
    axios.post(`${serverURL}/movies/all?limit=${limit}&offset=${offset}`,  { search_text : searchText }, jsonHeaders).then((response) => {
      setMovies(response.data.data.movies);
      // console.log(response.data.data.movies)
      setProgress(100)
    })
  }

  useEffect(getMovies, []);

  return (
    <>
    <TopLoader progress={progress} setProgress={setProgress} />
    <div className='spacing-container'>
    </div>
     <SearchBar />
    <div className='filters-div'> 
      {/* <CheckboxItem fontSize="medium" genres={Genres} className="checkbox-item"/> */}
    </div>
    <InfiniteScroll
      dataLength={movies.length+12} //This is important field to render the next data
      next={loadMore}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center', fontSize:"2rem", paddingTop:"3rem", paddingBottom:"3rem", color:"white", backgroundColor:"#262525", justifyContent:"center", alignItems:"center" }}>
          <TagFacesSharpIcon style={{ fontSize:"5rem"}} /><WavingHandIcon style={{ fontSize:"3rem", marginLeft:"0.3rem"}}  />
        </p>
      }
    >
     <div className="wrapper">
        {movies.map((item, index)=>{
          return <MovieCard key={item._id} properties={{
            isBookmarked : bookmarkedMovies.includes(item._id),
            isFavorite : favoriteMovies.includes(item._id),
            handleBookmarks,
            handleFavorites,
            handleDelete
          }} movie={{...item}} />
        })}
    </div> 
    </InfiniteScroll>
    </>
  )
}

export default GridLayout
