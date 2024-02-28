import React from 'react';
import {DirectionsCarFilledOutlined,WaterDropOutlined,VerifiedUserOutlined,MonitorHeartOutlined,AutoStoriesOutlined,BedOutlined, ArrowForwardOutlined, HomeOutlined, SportsVolleyballOutlined  } from '@mui/icons-material'

function Features() {
  return (
    <section class="features">
    <div class="container">

      <p class="section-subtitle">Our Aminities</p>

      <h2 class="h2 section-title">Building Aminities</h2>

      <ul class="features-list">

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <DirectionsCarFilledOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">Parking Space</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <WaterDropOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">Swimming Pool</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <VerifiedUserOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">Private Security</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <MonitorHeartOutlined fontSize='large' />
            </div>

            <h3 class="card-title">Medical Center</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <AutoStoriesOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">Library Area</h3>

            <div class="card-btn">
              <ArrowForwardOutlined/>
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <BedOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">King Size Beds</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <HomeOutlined fontSize="large"/>
            </div>

            <h3 class="card-title">Smart Homes</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" class="features-card">

            <div class="card-icon">
              <SportsVolleyballOutlined fontSize='large'/>
            </div>

            <h3 class="card-title">Kid’s Playland</h3>

            <div class="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

      </ul>

    </div>
  </section>


  )
}

export default Features