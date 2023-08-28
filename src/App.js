import './App.css';
import GridLayout from './components/GridLayout/GridLayout';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  


  return (
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
  );
}

export default App;
