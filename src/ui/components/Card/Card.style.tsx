import { experimentalStyled as styled, Typography } from "@material-ui/core";

export const ContainerCard = styled("div")`
  display: flex;
  flex-direction: column;
  height: 70vh;
  border-radius: 4px;
  box-shadow: 0px 0px 7px grey;
`;

export const TextCard = styled(Typography)`
  font-size: 1.17rem;
  margin-right: 1vw;
  margin-left: 1vw;
  margin-bottom: 5vh;
  font-family: "Roboto Condensed", sans-serif;
`;
