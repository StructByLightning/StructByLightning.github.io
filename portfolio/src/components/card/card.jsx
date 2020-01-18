import React from "react";
import "./card.scss";

export default class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <img class="card-image" src={this.props.image} />
        <div class="card-label">
          <div>{this.props.label}</div>
        </div>
        <div class="card-content">{this.props.children}</div>
      </div>
    );
  }
}
