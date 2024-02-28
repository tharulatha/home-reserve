import React from 'react';
import property1 from '../assets/images/property-1.jpg';
import author from '../assets/images/author.jpg';
import property2 from '../assets/images/property-2.jpg';
import property3 from "../assets/images/property-3.jpg";
import property4 from '../assets/images/property-4.png';
import { LocationOn, CameraAlt, Movie, Bed,Boy,CheckBoxOutlineBlank, OpenInFull,Favorite,ControlPoint   } from '@mui/icons-material';
 

function Property() {
  return (
    <section class="property" id="property">
    <div class="container">

      <p class="section-subtitle">Properties</p>

      <h2 class="h2 section-title">Featured Listings</h2>

      <ul class="property-list has-scrollbar">

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src={property1} alt="New Apartment Nice View" class="w-100"/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                 <LocationOn fontSize='small'/>

                  <address>Belmont Gardens, Chicago</address>
                </button>

                <button class="banner-actions-btn">
                 <CameraAlt fontSize='small' />

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <Movie fontSize='small'/>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>$34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">New Apartment Nice View</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <Bed fontSize='small' className='ion-icon'/>

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <Boy fontSize='small'className='ion-icon'/>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                 <CheckBoxOutlineBlank fontSize='small' className='ion-icon'/>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src={author} alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">William Seklo</a>
                  </p>

                  <p class="author-title">Estate Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <OpenInFull fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <Favorite fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <ControlPoint fontSize='small'/>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src={property2} alt="Modern Apartments" class="w-100"/>
              </a>

              <div class="card-badge orange">For Sales</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <LocationOn fontSize='small'/>

                  <address>Belmont Gardens, Chicago</address>
                </button>

                <button class="banner-actions-btn">
                  <CameraAlt fontSize='small'/>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                 <Movie fontSize='small'/>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>$34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Modern Apartments</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <Bed fontSize='small' className='ion-icon' />

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                 <Boy fontSize='small' className='ion-icon'/>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <CheckBoxOutlineBlank fontSize='small' className='ion-icon'/>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src={author} alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">William Seklo</a>
                  </p>

                  <p class="author-title">Estate Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <OpenInFull fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <Favorite fontSize='small' />
                </button>

                <button class="card-footer-actions-btn">
                  <ControlPoint fontSize='small'/>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src={property3} alt="Comfortable Apartment" class="w-100"/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                 <LocationOn fontSize='small'/>

                  <address>Belmont Gardens, Chicago</address>
                </button>

                <button class="banner-actions-btn">
                  <CameraAlt fontSize='small'/>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <Movie fontSize='small'/>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>$34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Comfortable Apartment</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                 <Bed fontSize='small' className='ion-icon' />

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <Boy fontSize='small' className='ion-icon'/>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <CheckBoxOutlineBlank fontSize='small' className='ion-icon' />

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src={author} alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">William Seklo</a>
                  </p>

                  <p class="author-title">Estate Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <OpenInFull fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <Favorite fontSize='small' />
                </button>

                <button class="card-footer-actions-btn">
                  <ControlPoint fontSize='small'/>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src={property4} alt="Luxury villa in Rego Park" class="w-100"/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <LocationOn fontSize='small'/>

                  <address>Belmont Gardens, Chicago</address>
                </button>

                <button class="banner-actions-btn">
                  <CameraAlt fontSize='small' />

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <Movie fontSize='small' />

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>$34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Luxury villa in Rego Park</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                 <Bed fontSize='small' className='ion-icon' />

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <Boy fontSize='small' className='ion-icon' />

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <CheckBoxOutlineBlank fontSize='small' className='ion-icon' />

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src={author} alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">William Seklo</a>
                  </p>

                  <p class="author-title">Estate Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <OpenInFull fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <Favorite fontSize='small'/>
                </button>

                <button class="card-footer-actions-btn">
                  <ControlPoint fontSize='small'/>
                </button>

              </div>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default Property