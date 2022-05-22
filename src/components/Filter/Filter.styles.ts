import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filters = styled.div`
  padding: 3px;
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
    font-size: 11px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
