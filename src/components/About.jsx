import React from "react";
import banner1 from "../assets/images/about-banner-1.png";
import banner2 from "../assets/images/about-banner-2.jpg";
import {
  HomeOutlined,
  SpaOutlined,
  WineBarOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={banner1} alt="House interior" />

          <img src={banner2} alt="House interior" className="abs-img" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">What is Turnkey?</h2>

          <p className="about-text">
            A turnkey project refers to a type of project that is delivered to
            the client in a ready to move. In other words, the client just needs
            to "turn the key" to start using the completed project. Turnkey
            projects are typically fully designed, constructed, a project
            management team before being handed over to the client.
          </p>

         

          <h2 className="h2 section-title">What We Do?</h2>
          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <HomeOutlined sx={{ color: "hsl(9, 100%, 62%) " }} />
              </div>

              <p className="about-item-text">Design and Construction</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <SpaOutlined sx={{ color: "hsl(9, 100%, 62%) " }} />
              </div>

              <p className="about-item-text">Architects</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <WineBarOutlined sx={{ color: "hsl(9, 100%, 62%) " }} />
              </div>

              <p className="about-item-text">Interiors</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <VerifiedUserOutlined sx={{ color: "hsl(9, 100%, 62%) " }} />
              </div>

              <p className="about-item-text">Renovations</p>
            </li>
          </ul>


          {/* <p className="callout">
            "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem
            ipsum dolor sit amet"
          </p> */}

          <a href="#service" className="btn">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
