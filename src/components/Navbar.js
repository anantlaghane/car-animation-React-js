import React from "react";

import { NavLink } from "react-router-dom";
import './Navbar.css'
// import { useState } from "react";

// import Industries from './Industries'

const Navbar = () => {  
  return (
        <>
          <div className="  fixed-top nav5">
            <div className="row" id="trans">
              <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <NavLink className="navbar-brand mt-n3 mb-n1" to="/">
                    
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                  
                    <span className="navbar-toggler-icon"></span>
                 </button>
    
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                    <ul className="navbar-nav ml-auto" id="navItems">
                      <li className="nav-item ">
                        {/* <NavLink className="nav-link  "  to="/"  >
                          Home <span class="sr-only">(current)</span>
                        </NavLink> */}
                      </li>
                      
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about" id="navItems">
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems">Industries</span>
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/industries/automotion">
                            Automotion & Ancilliries <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/smartcity">
                            Smart City & Building Mgmt
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/defense">
                            Defence & Aerospace
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/pharma">
                            Pharma & Others
                          </NavLink>
                          
                        </div>
                      </li>
                          
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/product" id="navItems">
                          Product
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/capabilities" id="navItems">
                          Capabilities
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/adisara" id="navItems">
                          Adisra-Thetavega
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" id="navItems">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                
                </nav>
              </div>
            </div>
          </div>
        </>
      )
    };
    

export default Navbar;
