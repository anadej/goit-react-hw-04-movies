import React, { Component } from "react";
import { fetchMoviesDetails } from "../../services/api";
import { ReviewsStyled } from "./ReviewStyled";

class Review extends Component {
  state = {
    movieReviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const response = await fetchMoviesDetails(this.props.movieId);
      this.setState({ movieReviews: [...response.results] });
      console.log(`this.state`, this.state.movieReviews);
    } catch (error) {
      console.log(`error`, error);
    }
  }
  render() {
    const { movieReviews } = this.state;

    return (
      <ReviewsStyled>
        {movieReviews.length ? (
          <ul className="movieReviewList">
            {movieReviews.map((review) => (
              <li className="movieReviewItem" key={review.id}>
                <h3 className="movieReviewTitle">Author: {review.author}</h3>
                <p className="movieReviewText">{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="movieReviewText">
            We don't have any reviews for thi movie
          </p>
        )}
      </ReviewsStyled>
    );
  }
}

export default Review;
