import React from "react";
import "./home.scss";
import LinkCard from "components/linkCard/linkCard.jsx";
import LineHeader from "components/lineHeader/lineHeader.jsx";
import { ReactComponent as InfoIcon } from "icons/info.svg";
import { ReactComponent as CodeIcon } from "icons/code.svg";
import { ReactComponent as ContactIcon } from "icons/contact.svg";

export default class Home extends React.Component {
  render() {
    return (
      <section class="home">
        <header>
          <h1>Raven Schultz</h1>
          <LineHeader label="Software Engineer" />
        </header>

        <div class="content">
          <div class="card-wrapper">
            <LinkCard label="About" href="#section-about">
              <InfoIcon />
            </LinkCard>
            <LinkCard label="Projects" href="#section-projects">
              <CodeIcon />
            </LinkCard>
            <LinkCard label="Contact" href="#section-contact">
              <ContactIcon />
            </LinkCard>
          </div>
        </div>
      </section>
    );
  }
}
