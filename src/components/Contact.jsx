import React from 'react';
import logo from '../assets/images/logo-light.png'
import {PlaceOutlined, CallOutlined, EmailOutlined, FacebookRounded,Twitter,LinkedIn,YouTube  } from '@mui/icons-material'
function Contact() {
  return (
    <section id='contact'>
        <footer class="footer">

<div class="footer-top">
  <div class="container">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src={logo} alt="Homeverse logo" />
      </a>

      <p class="section-text">
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
      </p>

      <ul class="contact-list">

        <li>
          <a href="#" class="contact-link">
            <PlaceOutlined fontSize='small' />

            <address>Brooklyn, New York, United States</address>
          </a>
        </li>

        <li>
          <a href="tel:+0123456789" class="contact-link">
          <CallOutlined  fontSize='small'/>

            <span>+0123-456789</span>
          </a>
        </li>

        <li>
          <a href="mailto:contact@homeverse.com" class="contact-link">
                    <EmailOutlined fontSize='small' />

            <span>contact@homeverse.com</span>
          </a>
        </li>

      </ul>

      <ul class="social-list">

        <li>
          <a href="#" class="social-link">
            <FacebookRounded fontSize='small' />
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <Twitter fontSize='small' />
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <LinkedIn fontSize='small' />
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <YouTube fontSize='small' />
          </a>
        </li>

      </ul>

    </div>

    <div class="footer-link-box">

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Company</p>
        </li>

        <li>
          <a href="#" class="footer-link">About</a>
        </li>

        <li>
          <a href="#" class="footer-link">Blog</a>
        </li>

        <li>
          <a href="#" class="footer-link">All Products</a>
        </li>

        <li>
          <a href="#" class="footer-link">Locations Map</a>
        </li>

        <li>
          <a href="#" class="footer-link">FAQ</a>
        </li>

        <li>
          <a href="#" class="footer-link">Contact us</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Services</p>
        </li>

        <li>
          <a href="#" class="footer-link">Order tracking</a>
        </li>

        <li>
          <a href="#" class="footer-link">Wish List</a>
        </li>

        <li>
          <a href="#" class="footer-link">Login</a>
        </li>

        <li>
          <a href="#" class="footer-link">My account</a>
        </li>

        <li>
          <a href="#" class="footer-link">Terms & Conditions</a>
        </li>

        <li>
          <a href="#" class="footer-link">Promotional Offers</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Customer Care</p>
        </li>

        <li>
          <a href="#" class="footer-link">Login</a>
        </li>

        <li>
          <a href="#" class="footer-link">My account</a>
        </li>

        <li>
          <a href="#" class="footer-link">Wish List</a>
        </li>

        <li>
          <a href="#" class="footer-link">Order tracking</a>
        </li>

        <li>
          <a href="#" class="footer-link">FAQ</a>
        </li>

        <li>
          <a href="#" class="footer-link">Contact us</a>
        </li>

      </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
    </p>

  </div>
</div>

</footer>

    </section>
  )
}

export default Contact