import React from 'react'
import "./NavBar.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';


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
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
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
