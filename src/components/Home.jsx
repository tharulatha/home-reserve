import React from 'react';
import { Gite } from '@mui/icons-material';
import heroBanner from '../assets/images/hero-banner.png';

function Home() {
  return (
    <section className="hero" id="home">
    <div className="container">

      <div className="hero-content">

        <p className="hero-subtitle">
         <Gite sx={{color: "hsl(9, 100%, 62%) "}}/>

          <span>THE ORIGIN BUILD INDIA</span>
        </p>

        <h2 className="h1 hero-title">Your Vision Our Mission</h2>

        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <button className="btn">Make An Enquiry</button>

      </div>

      <figure className="hero-banner">
        <img src={heroBanner} alt="Modern house model" className="w-100"/>
      </figure>

    </div>
  </section>
  )
}

export default Home