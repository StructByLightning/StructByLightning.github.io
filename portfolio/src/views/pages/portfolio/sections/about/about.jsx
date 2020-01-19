import React from "react";
import "./about.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";

export default class About extends React.Component {
  render() {
    return (
      <section className="about" id="section-about">
        <LineHeader label="About" />
      </section>
    );
  }
}
