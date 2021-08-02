import styled from "styled-components";

export const CastStyled = styled.div`
  padding: 20px;

  .movieCastList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-top: -5px;
  }

  .movieCastItem {
    margin-left: 5px;
    margin-top: 5px;
    flex-basis: calc((100% - 30px) / 6);
    border: 1px solid grey;
    text-align: center;
  }

  .movieCastImage {
    width: 100%;
  }

  .movieCastName {
    font-size: 14px;
    font-weight: bold;
  }

  .movieCastCharacter {
    font-size: 14px;
  }
`;
