import { experimentalStyled as styled, Typography } from "@material-ui/core";

export const ContainerHeader = styled("div")`
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled(Typography)`
  font-size: 2.5rem;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
`;
