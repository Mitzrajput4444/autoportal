import React from "react";
import { useNavigate } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
export default function Header(){
  const navigate = useNavigate()
  const handleLogout = (e)=>{
    e.preventDefault()
    if(localStorage.getItem('admin')){
      localStorage.removeItem('admin');
      navigate('/')
 
    }
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      navigate('/')
      
    }
  }
    return(
        <>
   <header id="site-header" className="fixed-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg stroke p-0">
      <h1> <a className="navbar-brand" href="/">
          <span className="fa fa-regulaar fa-car-side" /> Auto Portal
        </a>
      </h1>
      <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
        <span className="navbar-toggler-icon fa icon-close fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-lg-5 mr-lg-auto">
          <LinkContainer to="/">
          <li className="nav-item active">
            <a className="nav-link">Home <span className="sr-only"></span></a>
          </li>
          </LinkContainer>
         
          {/* <LinkContainer to="/AddUser">
          <li className="nav-item @@about__active">
            <a className="nav-link">AddUser</a>
          </li>
          </LinkContainer> */}

    {
     localStorage.getItem('user') ?
    <>
          
          <LinkContainer to="/Product">
          <li className="nav-item @@contact__active">
            <a className="nav-link">Our Product</a>
          </li>
          </LinkContainer>
          <LinkContainer to="/About">
          <li className="nav-item @@about__active">
            <a className="nav-link" onClick={handleLogout}>Logout</a>
          </li>
          </LinkContainer>
          <LinkContainer to="/Crude">
          <li className="nav-item @@about__active">
            <a className="nav-link">Crude</a>
          </li>
          </LinkContainer>
         
         
         
        </>
        : (localStorage.getItem('admin')?
        <>
         <LinkContainer to="/Crude">
          <li className="nav-item @@about__active">
            <a className="nav-link">Crude</a>
          </li>
          </LinkContainer>
          <LinkContainer to="/About">
          <li className="nav-item @@about__active">
            <a className="nav-link" onClick={handleLogout}>Logout</a>
          </li>
          </LinkContainer>
      
         
          </>
          :
          <>
           <LinkContainer to="/About">
          <li className="nav-item @@about__active">
            <a className="nav-link">About</a>
          </li>
          </LinkContainer>
          <LinkContainer to="Signup">
          <li className="nav-item @@contact__active">
            <a className="nav-link" >SignUp</a>
          </li>
          </LinkContainer>
         <LinkContainer to="Login">
          <li className="nav-item @@contact__active">
            <a className="nav-link" >Login</a>
          </li>
          </LinkContainer> 
          
          </>
    )}
    

        </ul>
        <div className="navbar-nav search-right nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <input className="serach" type="text"/>
            <span className="fa fa-search" />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="search_form">
              <form action="search-results.html" method="GET">
                <input type="text" placeholder="Search" />
                <button type="submit" className="btn" value><span className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              
            </label>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</header>

        
        </>
    )
}