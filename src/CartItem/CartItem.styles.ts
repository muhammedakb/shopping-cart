import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 20px;
  &:nth-child(3) {
    border-top: 1px solid #e2e2e2;
  }

  div {
    flex: 1;
    margin-right: 85px;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    position: absolute;
    width: 100px;
    height: 120px;
    margin-left: 40px;
    right: 10px;
    bottom: 20px;
    object-fit: contain;
  }
`;
