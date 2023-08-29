import React, { useContext, useEffect, useRef, useState } from 'react';
import "./SearchBar.css"
import axios from 'axios';
import AppContext from '../../contexts/AppContext';

const serverURL = process.env.REACT_APP_NODEJS_URL;
const jsonHeaders = { headers: { "Content-Type": "application/json" } };


export default function SearchBar() {

  const state = useContext(AppContext);
  const { setMovies,  searchText, setSearchText, setProgress, limit, setHasMore  } = state;

  const [checkRef, setCheckRef] = useState(false);
  const [ btnValue, setBtnValue ] = useState("Search");

  const btnRef = useRef(null);
  const inputSearchRef = useRef(null);

  useEffect(() => {
    if(checkRef){
      setCheckRef(true);
    }
  }, [])
  
  const addSearchText = (e) => {
    e.preventDefault();
    setSearchText(inputSearchRef.current.value)
  }

  const searchMovies = (searchText) => {
    setProgress(40)
    setSearchText(searchText);
    axios.post(`${serverURL}/movies/all`, { search_text : searchText }, jsonHeaders).then((response) => {
      // console.log(response);
      setMovies(response.data.data.movies);
      setProgress(100)
      if(response.data.data.movies.length < limit){
        setHasMore(false);
      }
    })
  }

  const getSearchData = (e) => {
    e.preventDefault();
    if(searchText && searchText!=="" && btnValue === "Search"){
      searchMovies(searchText);
      btnRef.current.style.backgroundColor = "red";
      setBtnValue("Clear");

    }else if(btnValue === "Clear"){
      searchMovies("");
      btnRef.current.style.backgroundColor = "crimson";
      setBtnValue("Search");
    }
  }

  return (
    <form id="demo-3">
      <input type="search" placeholder="Title, Genres, Cast, Plot..." ref={inputSearchRef} value={searchText} onChange={addSearchText }/>
      <input className="search-btn" type="submit" ref={btnRef} value={btnValue}  onClick={getSearchData}/>
    </form>
  );
}