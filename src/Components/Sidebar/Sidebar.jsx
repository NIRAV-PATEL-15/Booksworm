import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {  Info, LocalMall,Login,  Menu } from '@mui/icons-material';
import Home from '../Dashboard/Home';
import RegisterationForm from '../Register/RegisterationForm';
import LoginForm from '../Login/LoginForm';
export const Sidebar = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
    const [collapse, setCollapse] = useState(isDesktop);
    const [active,setActive] = useState()
    const handleClick = (event,name)=>{
      setActive(name)
      event.stopPropagation()
    }
    const handleCollapse = ()=>{
      if(isDesktop){
        setCollapse(!collapse)
      }
    }
    useEffect(() => {
      const handleResize = (event) => {
        setIsDesktop(window.innerWidth > 600);
      event.stopPropagation()

      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };}, [collapse,isDesktop]);
  return (
<div className="wrapper">
<div className={`${collapse ? "sidenav-collapsed": "sidenav"}`} >
        <div className="logo-container" onClick={handleCollapse} >
            <span  className="logo"  ><Menu  /></span>
            <div className="logo-text"  ><span>Booksworm</span></div>
        </div>
        <ul className="sidenav-nav">
            <li className="sidenav-nav-item">
                <Link to={'/'} onClick={(event)=>{handleClick(event,"home")}} className={`sidenav-nav-link ${active === "home" ? "active" :""}`}>
                <i className="sidenav-link-icon"><HomeOutlinedIcon /></i>
                    <span className="sidenav-link-text">Home</span>
                </Link>
            </li>
            <li className="sidenav-nav-item">
                <Link to={'/about'} onClick={(event)=>{handleClick(event,"about")}} className={`sidenav-nav-link ${active === "about" ? "active" :""}`}>
                    <i className="sidenav-link-icon"><Info/></i>
                    <span className="sidenav-link-text">About</span>
                </Link>
            </li>
            <li className="sidenav-nav-item">
                <Link to={'/bag'} onClick={(event)=>{handleClick(event,"bag")}} className={`sidenav-nav-link ${active === "bag" ? "active" :""}`}>
                    <i className="sidenav-link-icon"><LocalMall/></i>
                    <span className="sidenav-link-text">Bag</span>
                </Link>
            </li>
            <li className="sidenav-nav-item login" >
                <Link to={'/login'} onClick={(event)=>{handleClick(event,"login")}} className={`sidenav-nav-link ${active === "login" ? "active" :""}`}>
                    <i className="sidenav-link-icon"><Login/></i>
                    <span className="sidenav-link-text">Login</span>
                </Link>
            </li>
        </ul>

    </div>

    <main className={`${collapse ? "main-collapsed": "main"}`}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/login' element={<LoginForm/>} />
          <Route  path='/register' element={<RegisterationForm/>} />
        </Routes>
      </main>
</div>
  )
}
