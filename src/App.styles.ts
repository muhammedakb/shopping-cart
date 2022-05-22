import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Grid, LinearProgress } from "@material-ui/core";

export const Wrapper = styled.section`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export const Loading = styled(LinearProgress)`
  margin-top: calc(100vh - 49vh);
  width: 50%;
  margin-left: 25%;
`;

export const GridContainer = styled(Grid)`
  @media screen and (max-width: 600px) {
    .MuiGrid-item {
      /* original width: 222px + xs-4 width: 32px  */
      margin-left: calc((100% - 254px) / 2);
    }
  }
`;
