import React from "react";
import logo from "../assets/images/logo.png";
import {
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Search,
  Person,
  ShoppingCart,
  Menu,
} from "@mui/icons-material";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li>
                <a href="mailto:info@homeverse.com" className="header-top-link">
                  <Email
                    sx={{ color: "hsl(9, 100%, 62%) " }}
                    fontSize="small"
                  />

                  <span>info@homeverse.com</span>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-link">
                  <LocationOn
                    sx={{ color: "hsl(9, 100%, 62%) " }}
                    fontSize="small"
                  />

                  <address>15/A, Nest Tower, NYC</address>
                </a>
              </li>
            </ul>

            <div className="wrapper">
              <ul className="header-top-social-list">
                <li>
                  <a href="#" className="header-top-social-link">
                    <Facebook fontSize="small" />
                  </a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link">
                    <Twitter fontSize="small" />
                  </a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link">
                    <Instagram fontSize="small" />
                  </a>
                </li>

                <li>
                  <a href="#" className="header-top-social-link">
                    <Pinterest fontSize="small" />
                  </a>
                </li>
              </ul>

              <button className="header-top-btn">Add Listing</button>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <a href="#" className="logo">
              <img src={logo} alt="Homeverse logo" />
            </a>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src="../assets/images/logo.png" alt="Homeverse logo" />
                </a>

                <button
                  className="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <div className="navbar-bottom">
                <ul className="navbar-list">
                  <li>
                    <Link
                      activeClass="active"
                      className="navbar-link"
                      to="home"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                  <Link
                      activeClass="active"
                      className="navbar-link"
                      to="about"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                  <Link
                      activeClass="active"
                      className="navbar-link"
                      to="service"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                  <Link
                      activeClass="active"
                      className="navbar-link"
                      to="property"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Property
                    </Link>
                  </li>

                  <li>
                  <Link
                      activeClass="active"
                      className="navbar-link"
                      to="blog"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                  <Link
                      activeClass="active"
                      className="navbar-link"
                      to="contact"
                      offset={-1}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <button className="header-bottom-actions-btn" aria-label="Search">
                <Search className="nav-icons" />

                <span>Search</span>
              </button>

              <button className="header-bottom-actions-btn" aria-label="Profile">
                <Person className="nav-icons" />

                <span>Profile</span>
              </button>

              <button className="header-bottom-actions-btn" aria-label="Cart">
                <ShoppingCart className="nav-icons" />

                <span>Cart</span>
              </button>

              <button
                className="header-bottom-actions-btn"
                data-nav-open-btn
                aria-label="Open Menu"
              >
                <Menu className="nav-icons" />

                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
