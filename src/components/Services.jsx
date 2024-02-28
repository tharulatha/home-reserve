import React from 'react';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import {ArrowForwardOutlined} from '@mui/icons-material'
function Services() {
  return (
    <section class="service" id="service">
    <div class="container">

      <p class="section-subtitle">Our Services</p>

      <h2 class="h2 section-title">Our Main Focus</h2>

      <ul class="service-list">

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src={service1} alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Buy a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="#" class="card-link">
              <span>Find A Home</span>

              <ArrowForwardOutlined />
            </a>

          </div>
        </li>

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src={service2} alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Rent a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="#" class="card-link">
              <span>Find A Home</span>

              <ArrowForwardOutlined />
            </a>

          </div>
        </li>

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src={service3} alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Sell a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="#" class="card-link">
              <span>Find A Home</span>

              <ArrowForwardOutlined />
            </a>

          </div>
        </li>

      </ul>

    </div>
    </section>
  )
}

export default Services