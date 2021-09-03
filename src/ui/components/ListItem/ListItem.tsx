import {
  Typography,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React from "react";
import { ListItemStyled, ColumnStyled } from "./ListItem.style";
import PersonIcon from "@material-ui/icons/Person";

interface ListItemProps {
  name: string;
  situation: string;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  if (props.situation.toUpperCase() == "ESTÁVEL") {
    return (
      <ListItemStyled role="button">
        <ListItemAvatar>
          <PersonIcon sx={{ fontSize: "3rem" }} />
        </ListItemAvatar>
        <ColumnStyled>
          <Typography sx={{ fontSize: "1.5rem" }}>{props.name}</Typography>
          <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
            {props.situation.toUpperCase()}
          </Typography>
        </ColumnStyled>
        <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
      </ListItemStyled>
    );
  } else {
    return (
      <ListItemStyled sx={{ backgroundColor: "#ffc107" }} role="button">
        <ListItemAvatar>
          <PersonIcon sx={{ fontSize: "3rem" }} />
        </ListItemAvatar>
        <ColumnStyled>
          <Typography sx={{ fontSize: "1.5rem" }}>{props.name}</Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", color: "#dc3545" }}
          >
            {props.situation.toUpperCase()}
          </Typography>
        </ColumnStyled>
        <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
      </ListItemStyled>
    );
  }
};

export default ListItem;
