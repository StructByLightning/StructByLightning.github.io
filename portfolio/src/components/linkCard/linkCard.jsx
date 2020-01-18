import React from "react";
import "./linkCard.scss";

export default class LinkCard extends React.Component {
  render() {
    return (
      <a class="link-card" href={this.props.href}>
        <svg class="lc-border top" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin slice">
          <line class="top" x1="0" y1="0" x2="300%" y2="0" />
        </svg>
        <svg class="lc-border bottom" viewBox="0 0 100 100" preserveAspectRatio="xMinYMax slice">
          <line class="bottom" x1="100%" y1="100%" x2="-200%" y2="100%" />
        </svg>

        <svg class="lc-border right" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMin slice">
          <line class="right" x1="100%" y1="0" x2="100%" y2="300%" />
        </svg>
        <svg class="lc-border left" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin slice">
          <line class="left" x1="0" y1="100%" x2="0" y2="-200%" />
        </svg>

        {this.props.children}

        <div class="lc-label">{this.props.label}</div>
      </a>
    );
  }
}
