import { experimentalStyled as styled } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

export const ListItemStyled = styled(ListItem)`
  border-style: solid;
  height: fit-content;
  border-radius: 4px;
  border-width: 1px;
  border-left-width: 0px;
  display: flex;
  flex-wrap: wrap;
  width: "fit-content";
  min-width: 190px;
`;

export const ColumnStyled = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
