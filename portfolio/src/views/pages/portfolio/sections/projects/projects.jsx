import React from "react";
import "./projects.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";
import Card from "components/card/card.jsx";

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects" id="section-projects">
        <LineHeader label="Projects" />
        <div class="card-wrapper">
          <Card label="Stax" image="/images/gears.jpg">
            <p>
              Stax is a Chrome extension for Amazon Mechanical Turk, a gig platform where workers perform various menial tasks such as tagging images or filling out psychological surveys. It is built with React and is entirely clientside.
            </p>
            Features:
            <ul>
              <li><b>Streamlined interface:</b> Stax completely redesigns the MTurk interface, making it easier for for workers to manage their task queue.</li>
              <li><b>Integrated Turkopticon:</b> Turkopticon is a third-party site that allows users to rate employers. Stax automatically hides work from abusive employers.</li>
              <li><b>Filtering:</b> Users can blacklist or whitelist employers with one click.</li>
              <li><b>Automatic scans:</b> Users normally have to register for work to secure it before anyone else does. Stax automatically registers users for work, and users are then able to reject the work if they don't like it (there is no cost associated with rejecting work).</li>
            </ul>

          </Card>

          <Card label="Game bot" image="/images/ai.jpg">
            <p>
              I wrote a bot in Java/C++ for an MMORPG that gathered resources (in-game virtual gold), which could then be sold for real-world money.
            </p>
            Features:
            <ul>
              <li><b>Coordination:</b> bots were connected to a bot server that kept them from interfering with each other.</li>
              <li><b>Multithreading:</b> each bot client could control three game clients.</li>
              <li><b>Computer vision:</b> bots could see and understand the game world like a human would.</li>
              <li><b>Recovery:</b> bots could recover from unforeseen issues, such as crashing or getting lost in the game world.</li>
              <li><b>Auto-setup:</b> bots could create new accounts and level up fresh characters with no human input.</li>
              <li><b>Extensibility:</b> bots could be given arbitrary commands through a custom scripting language.</li>
              <li><b>Masking:</b> bots mimicked human behavior to avoid detection by other players and game masters.</li>
            </ul>
          </Card>
          <Card label="Web serial site" image="/images/books.jpg">
            <p>
              I designed, developed, and deployed a website for a web serial, which is a sort of book that gets published one chapter at a time. The site was built from scratch with Angular and hosted on an AWS elastic cloud compute (EC2) instance.
            </p>
            Features:
            <ul>
              <li><b>Comments:</b> Users could make an account and leave comments on individual chapters.</li>
              <li><b>Subscription:</b> Users could subscribe to the site and receive a notification through RSS or email whenever a new chapter was posted.</li>
              <li><b>Integration:</b> The site was listed on TopWebFiction and followed its interface guidelines.</li>
              <li><b>Performance:</b> The site loaded in 1.3 seconds during testing on a simulated mobile device.</li>
            </ul>
          </Card>
        </div>
      </section>
    );
  }
}
