import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filters = styled.div`
  position: absolute;
  left: 220px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  p {
    font-size: 12px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
