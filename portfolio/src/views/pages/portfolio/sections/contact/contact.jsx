import React from "react";
import "./contact.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact" id="section-contact" >
        <LineHeader label="Contact" />
      </section>
    );
  }
}
