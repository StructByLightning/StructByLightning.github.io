import React from "react";
import "./about.scss";
import LineHeader from "components/lineHeader/lineHeader.jsx";

export default class About extends React.Component {
  render() {
    return (
      <section className="about" id="section-about">
        <LineHeader label="About" />

        <div class="content">
          <p class="overview">
            I've been programming since I was eight and always knew I was destined to be a software engineer. I love solving problems and building intricate machines out of nothing but information. I'm currently a senior studying Computer Science at Portland State University. In my spare time I write fiction and play DoTA.
          </p>

          <div class="community">
            <h2>Community</h2>
            <ul>
              <li><a class="link" href="https://github.com/StructByLightning">Github</a></li>
              <li><a class="link" href="https://gitlab.com/StructByLightning">Gitlab</a></li>
            </ul>

          </div>
        </div>






      </section>
    );
  }
}
