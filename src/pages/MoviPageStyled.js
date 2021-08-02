import styled from "styled-components";

export const MoviePageStyled = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  .homeTrendTitle {
    margin-bottom: 20px;
  }

  .moviesSearchList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-top: -5px;
  }

  .movieSearchItem {
    margin-left: 5px;
    margin-top: 5px;
    flex-basis: calc((100% - 25px) / 5);
    text-align: center;
  }

  .movieSearchImage {
    width: 100%;

    &:hover {
      transform: scale(1.03);
      cursor: cursor;
    }
  }
`;
