"use client"
import React from 'react';
import '../index.css';
// import Carousel from 'react-bootstrap/Carousel';
import heartImage from "./images/heart.jpg";
import origamiImage from "./images/origami.jpg";
import peopleImage from "./images/people.jpg";

const Header = () => {
  return (
    <>
    <nav id='navs' className="navbar fixed-top"> 
        <div className="navbar-left">
            <img src="https://t4.ftcdn.net/jpg/05/26/35/07/360_F_526350772_taMM7EVaoDzWAashADdBrYkjH24hqS3c.jpg" alt="Logo" class="logo"/>
        </div>
        <div className="navbar-middle">
            <a href='#caro'>Home</a>
            {/* <button className='home-button' onClick={() => console.log("Home clicked")}>Home</button> */}
            <a href="#about-id">About</a>
            <a href="#services">Services</a>
        </div>
        <div className="navbar-right">
          <a href='#volunteer'><button className="button">Volunteer now</button></a>
        </div>
    </nav>
    <div id='caro' className="carousel-wrapper">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src= {heartImage} 
      style = {{height: '70vh', objectFit: 'cover'}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={origamiImage}
      style = {{height: '70vh', objectFit: 'cover'}}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={peopleImage} 
      style = {{height: '70vh', objectFit: 'cover'}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>
  )
}
export default Header