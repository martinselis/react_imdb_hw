import React, {Component} from "react";

class Movie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    )
  }

}

export default Movie;
