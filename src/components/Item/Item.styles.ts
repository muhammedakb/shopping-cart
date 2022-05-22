import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 210px;
  padding: 5px;
  padding-bottom: 15px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 8px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    &:hover {
      box-shadow: none;
      transform: scale(1);
    }
  }

  figure {
    width: 200px;
    height: 280px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
    position: relative;
    border-radius: 8px 8px 0 0;
    img {
      position: absolute;
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }
    figcaption {
      position: absolute;
      background-color: #0d111785;
      color: #fff;
      font: smaller sans-serif;
      padding: 5px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-width: 220px;
      bottom: 0;
      &.active {
        white-space: normal;
      }
    }
  }

  .rating {
    margin-top: 8px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &-avg {
      display: inline-block;
      margin-left: 5px;
      font-size: 13px;
    }
    &-price {
      text-align: center;
      font-size: 18px;
      letter-spacing: 0.5px;
    }
  }

  button {
    border-radius: 8px;
    width: 80%;
    margin-left: 10%;
    margin-top: -10px;
    background-color: #fb923c;
    color: #fff;
    visibility: hidden;
    @media screen and (max-width: 768px) {
      visibility: visible;
    }
    &.active {
      visibility: visible;
    }
    &:hover {
      background-color: #fb923c;
      opacity: 0.9;
    }
  }
`;
