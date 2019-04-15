import React, { Component } from "react";

class MoreMovies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.url}>View upcoming releases</a>
    )
  }
}

export default MoreMovies;
