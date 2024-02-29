import React, { useEffect, useState } from "react";
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
  Close
} from "@mui/icons-material";
import { Link } from "react-scroll";



function Header() {
const [nav, setNav] = useState()


  useEffect(() => {
   handleNavBar()
  }, [nav])
 
  const handleNavBar = () => {
    
    const elemToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };
  
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    
    const navElemArr = [overlay, navCloseBtn, navOpenBtn];
    
  
    for (let i = 0; i < navbarLinks.length; i++) {
      navElemArr.push(navbarLinks[i]);
    }
    
  
    for (let i = 0; i < navElemArr.length; i++) {
      navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
      });
    }
    
  
    
    const header = document.querySelector("[data-header]");
    
    window.addEventListener("scroll", function () {
      window.scrollY >= 400
        ? header.classList.add("active")
        : header.classList.remove("active");
    });
  }




  return (
    <div>
      <header className="header" data-header onClick={() => setNav("")}>
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
                  <img src={logo} alt="Homeverse logo" />
                </a>

                <button
                  className="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                >
                  <Close fontSize="small"/>
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
