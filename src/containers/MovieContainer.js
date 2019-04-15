import React, {Component} from "react";
import Title from "../components/title.js";
import MovieList from "../components/MovieList.js";
import MoreMovies from "../components/MoreMovies.js";

class MovieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
                {
                  id: 1,
                  name: "Avengers: Endgame",
                  url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
                },
                {
                  id: 2,
                  name: "Tolkien",
                  url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
                },
                {
                  id: 3,
                  name: "A Dog's Journey",
                  url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
                },
                {
                  id: 4,
                  name: "Pokémon Detective Pikachu",
                  url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
                },
                {
                  id: 5,
                  name: "Aladdin",
                  url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
                }
              ],
              moreMovies: "https://www.imdb.com/calendar/?region=gb"
    }
  }
  render() {
    return(
      <div className="movie-box">
        <Title title="Best Movies"/>
        <MovieList data={this.state.data} />
        <MoreMovies url={this.state.moreMovies}/>
      </div>
    )
  }
}

export default MovieContainer;
