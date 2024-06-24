import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';

const NavBar: React.FC = () => {
  return (
    <Router>
      <nav className="nav-bar">
        <div >
          <h1 className="nav">JUSTIN KWINECKI</h1>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects.html">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                ABOUT
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/About.html">
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Resume.pdf" target="_blank">
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default NavBar;