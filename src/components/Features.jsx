import React from 'react';
import {DirectionsCarFilledOutlined,WaterDropOutlined,VerifiedUserOutlined,MonitorHeartOutlined,AutoStoriesOutlined,BedOutlined, ArrowForwardOutlined, HomeOutlined, SportsVolleyballOutlined  } from '@mui/icons-material'

function Features() {
  return (
    <section className="features">
    <div className="container">

      <p className="section-subtitle">Our Aminities</p>

      <h2 className="h2 section-title">Building Aminities</h2>

      <ul className="features-list">

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <DirectionsCarFilledOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Parking Space</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <WaterDropOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Swimming Pool</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <VerifiedUserOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Private Security</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <MonitorHeartOutlined fontSize='large' />
            </div>

            <h3 className="card-title">Medical Center</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <AutoStoriesOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Library Area</h3>

            <div className="card-btn">
              <ArrowForwardOutlined/>
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <BedOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">King Size Beds</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <HomeOutlined fontSize="large"/>
            </div>

            <h3 className="card-title">Smart Homes</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <SportsVolleyballOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Kid’s Playland</h3>

            <div className="card-btn">
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