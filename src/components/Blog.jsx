import React from 'react';
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import {Person, LocalOffer, CalendarMonth} from '@mui/icons-material'

function Blog() {
  return (
    <section class="blog" id="blog">
    <div class="container">

      <p class="section-subtitle">News & Blogs</p>

      <h2 class="h2 section-title">Leatest News Feeds</h2>

      <ul class="blog-list has-scrollbar">

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src={blog1} alt="The Most Inspiring Interior Design Of 2021" class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                      <Person fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}}/>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                      <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Interior</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">The Most Inspiring Interior Design Of 2021</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src={blog2} alt="Recent Commercial Real Estate Transactions" class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                        <Person fontSize='small' sx={{ color: "hsl(9, 100%, 62%)" }} />

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                      <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Estate</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">Recent Commercial Real Estate Transactions</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src={blog3} alt="Renovating a Living Room? Experts Share Their Secrets"
                class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                      <Person fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                     <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Room</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">Renovating a Living Room? Experts Share Their Secrets</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>

  )
}

export default Blog