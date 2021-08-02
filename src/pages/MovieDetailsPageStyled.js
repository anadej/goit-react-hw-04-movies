import styled from "styled-components";

export const MovieDetailsPageStyled = styled.div`
  .movieDetailsContainer {
    display: flex;
    border-bottom: 3px solid #819ff5;
  }

  .leftSide,
  .rightSide {
    padding: 20px;
  }

  .movieDetailsImage {
    width: 250px;
  }

  .movieDetailsText {
    margin-top: 20px;
  }
  .movieDetailsTitel {
    margin-top: 20px;
  }

  .movieDetailsGenresList {
    display: flex;
    list-style: none;
  }

  .movieDetailsGenresItem {
    margin-top: 20px;
    margin-right: 20px;
  }

  .movieCastReviewsContainer {
    padding: 20px;
    border-bottom: 3px solid #819ff5;
  }

  .movieCastReviewsList {
    margin-top: 20px;
    padding-left: 40px;
  }

  .movieCastReviewsItem {
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    margin-left: 20px;
    padding: 8px 8px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    min-width: 100px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  button:hover,
  button:focus {
    background-color: #303f9f;
  }
`;
