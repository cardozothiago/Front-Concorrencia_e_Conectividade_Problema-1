import {
  Typography,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React from "react";
import { ListItemStyled, ColumnStyled } from "./ListItem.style";
import PersonIcon from "@material-ui/icons/Person";
import { PatientInterface } from "data/@types/patientInterface";
interface ListItemProps {
  patient: PatientInterface;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  if (props.patient.situation.toUpperCase() == "ESTÁVEL") {
    return (
      <ListItemStyled sx={{ backgroundColor: "#509253" }}>
        <ListItemAvatar>
          <PersonIcon sx={{ fontSize: "3rem" }} />
        </ListItemAvatar>
        <ColumnStyled>
          <Typography
            sx={{ fontSize: "1.2rem", margin: "0px", padding: "0px" }}
          >
            {props.patient.name}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
            {"Situação: " + props.patient.situation.toUpperCase()}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
            {"Oxigenação: " + props.patient.oxigen + "%"}
          </Typography>
        </ColumnStyled>
        <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
      </ListItemStyled>
    );
  } else {
    return (
      <ListItemStyled sx={{ backgroundColor: "#ffc107" }}>
        <ListItemAvatar>
          <PersonIcon sx={{ fontSize: "3rem" }} />
        </ListItemAvatar>
        <ColumnStyled>
          <Typography
            sx={{ fontSize: "1.2rem", margin: "0px", padding: "0px" }}
          >
            {props.patient.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", color: "#dc3545" }}
          >
            {"Situação: " + props.patient.situation.toUpperCase()}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", color: "#dc3545" }}
          >
            {"Oxigenação: " + props.patient.oxigen + "%"}
          </Typography>
        </ColumnStyled>
        <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
      </ListItemStyled>
    );
  }
};

export default ListItem;
