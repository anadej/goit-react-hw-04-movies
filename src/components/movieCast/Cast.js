import React, { Component } from "react";
import { fetchMovieCredits } from "../../services/api";
import { CastStyled } from "./CastStyled";

class Cast extends Component {
  state = {
    movieCast: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const response = await fetchMovieCredits(this.props.movieId);
      this.setState({ movieCast: [...response.cast] });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  render() {
    const { movieCast } = this.state;

    return (
      <CastStyled>
        <ul className="movieCastList">
          {movieCast.map((cast) => (
            <li className="movieCastItem" key={cast.id}>
              <img
                className="movieCastImage"
                src={
                  cast.profile_path !== null
                    ? `https://www.themoviedb.org/t/p/w300${cast.profile_path}`
                    : "../../images/no_image.png"
                }
                alt={cast.original_name}
              />
              <p className="movieCastName">{cast.original_name}</p>
              <p className="movieCastCharacter">{cast.character}</p>
            </li>
          ))}
        </ul>
      </CastStyled>
    );
  }
}

export default Cast;
