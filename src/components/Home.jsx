import React from 'react';
import { Gite } from '@mui/icons-material';
import heroBanner from '../assets/images/hero-banner.png';

function Home() {
  return (
    <section class="hero" id="home">
    <div class="container">

      <div class="hero-content">

        <p class="hero-subtitle">
         <Gite sx={{color: "hsl(9, 100%, 62%) "}}/>

          <span>Real Estate Agency</span>
        </p>

        <h2 class="h1 hero-title">Find Your Dream House By Us</h2>

        <p class="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <button class="btn">Make An Enquiry</button>

      </div>

      <figure class="hero-banner">
        <img src={heroBanner} alt="Modern house model" class="w-100"/>
      </figure>

    </div>
  </section>
  )
}

export default Home