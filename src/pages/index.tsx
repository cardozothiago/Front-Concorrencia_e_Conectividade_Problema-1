import React, { useEffect } from "react";
import { Container, IconButton, Collapse, Typography } from "@material-ui/core";
import Header from "ui/components/Header/Header";
import List from "ui/components/List/List";
import ListItem from "ui/components/ListItem/ListItem";
import { useIndex } from "data/hooks/useIndex";
import { useMemo } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import Card from "ui/components/Card/Card";
import { grid } from "@material-ui/system";
export default function Home() {
  const {
    patients,
    onClickButtonHandle,
    clicked,
    isClicked,
    webSocketConnection,
    con,
    setClicked,
  } = useIndex();

  useEffect(() => {
    webSocketConnection();
  }, [con]);

  useMemo(() => {
    if (clicked) {
      patients.map((patient) => {
        if (patient.name == clicked.name) {
          setClicked(patient);
        }
      });
    }
  }, [patients]);
  return (
    <>
      <Header title="Monitoramento de Pacientes"></Header>
      <Container
        sx={{
          /*display: "flex",
          
          ,*/
          justifyContent: "space-between",
          display: "grid",
          alignItems: "center",
          grid: "80vh/5fr 5fr",
          gap: "10px",
          maxWidth: "auto",
        }}
      >
        <List>
          {patients ? (
            patients.map((patient, index) => {
              return (
                <ListItem key={index} patient={patient}>
                  <IconButton
                    sx={{
                      borderRadius: "4px",
                      width: "fit-content",
                    }}
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
            <Typography sx={{ textAlign: "center", color: "white" }}>
              Nenhum dado de pacientes no momento
            </Typography>
          )}
        </List>
        <Collapse
          in={isClicked}
          sx={{
            marginTop: "5vh",
            //width: "30vw",
            height: "fit-content",
            borderRadius: "4px",
          }}
        >
          {clicked ? (
            <Card
              name={clicked.name}
              freqCorp={clicked.freqCorp}
              freqResp={clicked.freqResp}
              freqCard={clicked.freqCard}
              presArt={clicked.presArt}
              oxigen={clicked.oxigen}
              situation={clicked.situation}
            ></Card>
          ) : (
            <Typography sx={{ color: "white" }}>
              Nenhum dado de pacientes no momento
            </Typography>
          )}
        </Collapse>
      </Container>
    </>
  );
}
