import React from "react";
import "./contact.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact" id="section-contact" >
        <LineHeader label="Contact" />
        <div class="content">
          <div class="email-wrapper">
            <label for="sender-email">Your email:</label>
            <input class="input" id="sender-email" />
          </div>
          <div class="message-wrapper">
            <label for="message">Message:</label>
            <textarea class="input" id="message" />
          </div>
          <div class="button-wrapper">
            <button class="button" onClick={() => { console.log("send an email!") }}>Send</button>
          </div>

        </div>
      </section>
    );
  }
}
