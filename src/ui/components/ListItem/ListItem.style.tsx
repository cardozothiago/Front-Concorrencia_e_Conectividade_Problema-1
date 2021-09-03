import { experimentalStyled as styled } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

export const ListItemStyled = styled(ListItem)`
  border-style: solid;
  height: fit-content;
  border-radius: 4px;
  border-width: 1px;
  border-left-width: 0px;
  border-color: #8d8d8d;
  margin-bottom: 1vh;
  display: flex;
`;

export const ColumnStyled = styled("div")`
  display: flex;
  flex-direction: column;
`;
