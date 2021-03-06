import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  padding: 15px;

  @media screen and (max-width: 425px) {
    width: 320px;
  }

  h2:first-child,
  .no-item {
    text-align: center;
    text-transform: uppercase;
  }

  .cart-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
