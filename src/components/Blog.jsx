import React from 'react';
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import {Person, LocalOffer, CalendarMonth} from '@mui/icons-material'

function Blog() {
  return (
    <section className="blog" id="blog">
    <div className="container">

      <p className="section-subtitle">Packages</p>

      <h2 className="h2 section-title">Packages</h2>

      <ul className="blog-list has-scrollbar">

        <li>
          <div className="blog-card">

            <figure className="card-banner">
              <img src={blog1} alt="The Most Inspiring Interior Design Of 2021" className="w-100"/>
            </figure>

            <div className="blog-content">

              <div className="blog-content-top">

                {/* <ul className="card-meta-list">

                  <li>
                    <a href="#" className="card-meta-link">
                      <Person fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}}/>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Interior</span>
                    </a>
                  </li>

                </ul> */}

                <h3 className="h3 blog-title">
                  <a href="#">Budget Package</a>
                </h3>
                <span className='price'>Rs.1699/Sft</span>
              </div>

              {/* <div className="blog-content-bottom">
                <div className="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                
              </div> */}

            </div>

          </div>
        </li>

        <li>
          <div className="blog-card">

            <figure className="card-banner">
              <img src={blog2} alt="Recent Commercial Real Estate Transactions" className="w-100"/>
            </figure>

            <div className="blog-content">

              <div className="blog-content-top">

                  {/*  <ul className="card-meta-list">

                   <li>
                    <a href="#" className="card-meta-link">
                        <Person fontSize='small' sx={{ color: "hsl(9, 100%, 62%)" }} />

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Estate</span>
                    </a>
                  </li> 

            </ul> */}

                <h3 className="h3 blog-title">
                  <a href="#">Standard Package</a>
                </h3>
                <span className='price'>Rs.1999/Sft</span>
              </div>

              {/* <div className="blog-content-bottom">
                <div className="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" className="read-more-btn">Read More</a>
              </div> */}

            </div>

          </div>
        </li>

        <li>
          <div className="blog-card">

            <figure className="card-banner">
              <img src={blog3} alt="Renovating a Living Room? Experts Share Their Secrets"
                className="w-100"/>
            </figure>

            <div className="blog-content">

              <div className="blog-content-top">

                {/* <ul className="card-meta-list">

                  <li>
                    <a href="#" className="card-meta-link">
                      <Person fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                     <LocalOffer fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                      <span>Room</span>
                    </a>
                  </li>

                </ul> */}

                <h3 className="h3 blog-title">
                  <a href="#">Premium Package</a>
                </h3>
                <span className='price'>Rs.1299/Sft</span>
              </div>

              {/* <div className="blog-content-bottom">
                <div className="publish-date">
                  <CalendarMonth fontSize='small' sx={{color: "hsl(9, 100%, 62%)"}} />

                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" className="read-more-btn">Read More</a>
              </div> */}

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>

  )
}

export default Blog