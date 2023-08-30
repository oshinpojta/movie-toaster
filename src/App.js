import './App.css';
import GridLayout from './components/GridLayout/GridLayout';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import AppContext from './contexts/AppContext';
import axios from 'axios';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


const jsonHeaders = { headers: { "Content-Type": "application/json" } };
const offset = 0;
const serverURL = process.env.REACT_APP_NODEJS_URL;

function App() {

  const [ movies, setMovies ] = useState([]);
  const [ progress, setProgress ] = useState(10)
  const [ limit, setLimit ] = useState(12);
  const [ hasMore, setHasMore ] = useState(true);
  const [ searchText, setSearchText ] = useState("");

  const getMovies = () => {
    setProgress(40)
    axios.post(`${serverURL}/movies/all?limit=${limit}&offset=${offset}`,  { search_text : searchText }, jsonHeaders).then((response) => {
      setMovies(response.data.data.movies);
      // console.log(response.data.data.movies)
      setProgress(100)
    }).catch( err  => {
      console.log(err)
      setProgress(100);
    })
  }

  const state = {
    movies, setMovies,
    progress, setProgress,
    limit, setLimit,
    hasMore, setHasMore,
    searchText, setSearchText,
    getMovies, offset
  }


  return (
    <AppContext.Provider value={state}>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="App">
      <NavBar />
      <Routes>
        <Route key="moviespage" path='/movies' element={<GridLayout />} />
        <Route key="homepage" exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
