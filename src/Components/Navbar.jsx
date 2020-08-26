import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render(){
        return(
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link 
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Portfolio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Blog
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
