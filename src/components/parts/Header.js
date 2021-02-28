import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

function Header() {
    
  return (
    <header className="header text-center">	    
	    <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Khoa's Blog</a></h1>
        
        <Navbar className="navbar navbar-expand-lg navbar-dark" expand="lg">
            <Navbar.Toggle className="navbar-toggler" data-toggle="collapse" aria-controls="navigation" />
            <Navbar.Collapse id="navigation" className="flex-column" >
                <div className="profile-section pt-3 pt-lg-0">
                    <img className="profile-image mb-3 rounded-circle mx-auto" src="images/profile.png" alt="about me" />          
                    
                    <div className="bio mb-3">Hi, my name is Dang Khoa. Briefly introduce yourself here. You can also provide a link to the about page.
                        <br/>
                        <NavLink exact to="/about">Find out more about me</NavLink>
                    </div>
                    <ul className="social-list list-inline py-3 mx-auto">
                        <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter fa-fw"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin-in fa-fw"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="fab fa-github-alt fa-fw"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="fab fa-stack-overflow fa-fw"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="fab fa-codepen fa-fw"></i></Link></li>
                    </ul>
                    <hr/> 
                </div>

                <Nav className="flex-column text-left">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">
                            <i className="fas fa-home fa-fw mr-2"></i> Blog Home 
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/blogs" className="nav-link">
                            <i className="fas fa-bookmark fa-fw mr-2"></i> Posts Server Repl
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/blogs_graphcms" className="nav-link">
                            <i className="fas fa-bookmark fa-fw mr-2"></i> Posts Server GraphCMS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" className="nav-link">
                            <i className="fas fa-user fa-fw mr-2"></i> About Me
                        </NavLink>
                    </li>
                </Nav>
                
                <div className="my-2 my-md-3">
                    <Link className="btn btn-primary" to="#">Get in Touch</Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    </header>
    );
}
    
export default Header;