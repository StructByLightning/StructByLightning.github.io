import React from "react";
import "./lineHeader.scss";

export default class Header extends React.Component {
  render() {
    return (
      <h2 class="line-header" id={this.props.id}>
        <hr />
        <span >{this.props.label}</span>
        <hr />
      </h2>
    );
  }
}
