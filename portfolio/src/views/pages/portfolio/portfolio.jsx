import React from 'react';
import Home from "./sections/home/home.jsx";
import './portfolio.scss';



export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <Home />
      </div>
    );
  }
}


//import About from "./sections/about/about.jsx";
//import Contact from "./sections/contact/contact.jsx";

//import Projects from "./sections/projects/projects.jsx";
