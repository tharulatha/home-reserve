import React from 'react';
import {ArrowForwardOutlined} from '@mui/icons-material'

function Cat() {
  return (
    <section class="cta">
    <div class="container">

      <div class="cta-card">
        <div class="card-content">
          <h2 class="h2 card-title">Looking for a dream home?</h2>

          <p class="card-text">We can help you realize your dream of a new home</p>
        </div>

        <button class="btn cta-btn">
          <span>Explore Properties</span>

          <ArrowForwardOutlined />
        </button>
      </div>

    </div>
  </section>

  )
}

export default Cat