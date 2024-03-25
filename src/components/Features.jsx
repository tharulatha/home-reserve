import React from 'react';
import {AllInbox,WaterDropOutlined,VerifiedUserOutlined,Person, ArrowForwardOutlined } from '@mui/icons-material'

function Features() {
  return (
    <section className="features">
    <div className="container">

      <p className="section-subtitle">Why we are</p>

      <h2 className="h2 section-title">Why We?</h2>

      <ul className="features-list">

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <Person fontSize='large'/>
            </div>

            <h3 className="card-title">Single Point of Responsibility</h3>

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

            <h3 className="card-title">Quality Assurance and Control</h3>

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

            <h3 className="card-title">Flexible Payments</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <AllInbox fontSize='large' />
            </div>

            <h3 className="card-title">On Time Delivery</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li>

        {/* <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <AutoStoriesOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Library Area</h3>

            <div className="card-btn">
              <ArrowForwardOutlined/>
            </div>

          </a>
        </li> */}

        {/* <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <BedOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">King Size Beds</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li> */}

        {/* <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <HomeOutlined fontSize="large"/>
            </div>

            <h3 className="card-title">Smart Homes</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li> */}

        {/* <li>
          <a href="#" className="features-card">

            <div className="card-icon">
              <SportsVolleyballOutlined fontSize='large'/>
            </div>

            <h3 className="card-title">Kid’s Playland</h3>

            <div className="card-btn">
              <ArrowForwardOutlined />
            </div>

          </a>
        </li> */}

      </ul>

    </div>
  </section>


  )
}

export default Features