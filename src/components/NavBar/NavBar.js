import React from 'react'
import "./NavBar.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
            <div className="logo">
                <LiveTvIcon style={{ marginRight:"2rem", color:"white", width:'40px', height:'25px' }}/>
                <a className='toaster-header' href="/">Movies Toaster</a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link target='_blank' to="https://oshinpojta.netlify.app/">Portfolio</Link></li>
                    <li><Link target='_blank' to="https://www.linkedin.com/in/oshin-pojta/">Contact</Link></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    </>
  )
}

export default NavBar
