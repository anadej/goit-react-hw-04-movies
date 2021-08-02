import styled from "styled-components";

export const HomePageStyled = styled.div`
  padding: 20px;

  .homeTrendTitle {
    margin-bottom: 20px;
    color: cornflowerblue;
    text-transform: uppercase;
  }

  .homeTrendList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-top: -5px;
  }

  .homeTrendItem {
    margin-left: 5px;
    margin-top: 5px;
    flex-basis: calc((100% - 25px) / 5);
    text-align: center;
  }

  .homeTrendImage {
    width: 100%;

    &:hover {
      transform: scale(1.03);
      cursor: cursor;
    }
  }
`;
