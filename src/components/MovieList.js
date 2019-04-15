import React, {Component} from "react";
import Movie from "./Movie.js";

class MovieList extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const commentComponents = this.props.data.map(comment => {
      return (<Movie key={comment.id} title={comment.name} url={comment.url}/>)
    })

    return(
      <div className="movie-title">
        {commentComponents}
      </div>
    )
  }
}

export default MovieList;
