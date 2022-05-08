import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  /* width: 240px; */
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    /* width: 100%; */
    /* height: 240px; */
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
