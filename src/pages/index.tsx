import React, { useEffect } from "react";
import {
  Container,
  IconButton,
  Collapse,
  Paper,
  Typography,
  ListSubheader,
} from "@material-ui/core";
import Header from "ui/components/Header/Header";
import List from "ui/components/List/List";
import ListItem from "ui/components/ListItem/ListItem";
import { useIndex } from "data/hooks/useIndex";
import PageviewIcon from "@material-ui/icons/Pageview";
import Card from "ui/components/Card/Card";
export default function Home() {
  const {
    patients,
    onClickButtonHandle,
    Clicked,
    isClicked,
    webSocketConnection,
  } = useIndex();

  useEffect(() => {
    webSocketConnection();
  }, []);
  return (
    <>
      <Header title="Monitoramento de Pacientes"></Header>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          {patients ? (
            patients.map((patient, index) => {
              return (
                <ListItem
                  key={index}
                  situation={patient.situation}
                  name={patient.name}
                >
                  <IconButton
                    onClick={() => {
                      onClickButtonHandle(index);
                    }}
                    edge="end"
                    aria-label="view-information"
                  >
                    <PageviewIcon sx={{ fontSize: "3rem" }} />
                  </IconButton>
                </ListItem>
              );
            })
          ) : (
            <Typography></Typography>
          )}
        </List>
        <Collapse
          in={isClicked}
          sx={{
            margin: "5vh",
            width: "30vw",
            height: "fit-content",
            borderRadius: "4px",
          }}
        >
          {Clicked ? (
            <Card
              name={Clicked.name}
              freqCorp={Clicked.freqCorp}
              freqResp={Clicked.freqResp}
              freqCard={Clicked.freqCard}
              presArt={Clicked.presArt}
              oxigen={Clicked.oxigen}
              situation={Clicked.situation}
            ></Card>
          ) : (
            <Typography></Typography>
          )}
        </Collapse>
      </Container>
    </>
  );
}
