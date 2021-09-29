import React, { useEffect } from "react";
import {
  Container,
  IconButton,
  Collapse,
  Typography,
  Button,
} from "@material-ui/core";
import Header from "ui/components/Header/Header";
import List from "ui/components/List/List";
import ListItem from "ui/components/ListItem/ListItem";
import { useIndex } from "data/hooks/useIndex";
import { useMemo } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import Card from "ui/components/Card/Card";
import FilterField from "ui/components/FilterField/FilterField";

export default function Home(props) {
  const { classes } = props;
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
          justifyContent: "space-between",
          display: "grid",
          alignItems: "center",
          grid: "70vh 10vh/5fr 5fr",
          gap: "10px",
          gridTemplateAreas: "'patients card' 'filter card' ",
          maxWidth: "auto",
        }}
      >
        {patients ? (
          <List>
            {patients.map((patient, index) => {
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
            })}
          </List>
        ) : (
          <Typography sx={{ textAlign: "center", color: "white" }}>
            Nenhum dado de pacientes no momento
          </Typography>
        )}

        <Collapse
          in={isClicked}
          sx={{
            marginTop: "5vh",
            height: "fit-content",
            borderRadius: "4px",
            gridArea: "card",
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
            <Typography>Nenhum dado de pacientes no momento</Typography>
          )}
        </Collapse>

        {patients ? (
          <div
            style={{
              marginTop: "20px",
              gridArea: "filter",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FilterField
              type="number"
              label="Filtrar quantidade de pacientes"
              inputProps={{ min: 1 }}
            ></FilterField>
            <Button
              variant="contained"
              sx={{ marginTop: "10px", borderRadius: "4px" }}
            >
              Filtrar
            </Button>
          </div>
        ) : (
          <Typography></Typography>
        )}
      </Container>
    </>
  );
}
