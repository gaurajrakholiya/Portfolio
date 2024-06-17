import React , { useRef} from "react";
import { FaTimes , FaBars } from 'react-icons/fa'
import "./navbar.css";
import vec1 from "./img/vec.png";
import Pdf from "./doc/resume.pdf";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navRef = useRef()

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    <>
      <header className="dsk">
        <nav className="container" ref={navRef}>
          <div className="logo">
            <img className="img" alt="" src={vec1} />
          </div>
          <div className="section">
            <ol>
              <li>
                <a href="/#about" style={{textDecoration:'none'}}>

                  <span>01.</span>
                  <b>About</b>
                  </a>
                
              </li>
              <li>
               <a href="/#experience" style={{textDecoration:'none'}}>

                  <span>02.</span><b>Skills</b>
                  </a>
              </li>
              <li>
              <a href='/#contact' style={{textDecoration:'none'}}>
                  <span>03.</span><b>Contact</b>
                  </a>
              </li>
              
            </ol>
            <div className="button1">
              <a
                style={{ textDecoration: "none", width: "-100px" }}
                href={Pdf} target="_blank" >
                <button>Resume</button>
              </a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes/>
            </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars/>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
