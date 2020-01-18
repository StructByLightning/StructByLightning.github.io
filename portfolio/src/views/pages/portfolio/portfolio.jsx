import React from 'react';
import Home from "./sections/home/home.jsx";
import './portfolio.scss';
import About from "./sections/about/about.jsx";
import Contact from "./sections/contact/contact.jsx";
import Projects from "./sections/projects/projects.jsx";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}