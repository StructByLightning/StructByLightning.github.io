import React from "react";
import "./about.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <LineHeader label="About" id="section-about" />
      </div>
    );
  }
}
