import React from "react";
import { ContainerCard, TextCard } from "./Card.style";

interface CardProps {
  name: string;
  tempCorp: number;
  freqResp: number;
  freqCard: number;
  presArt: number;
  oxigen: number;
  situation: string;
}

const Card: React.FC<CardProps> = (props) => {
  if (props.situation.toUpperCase() == "ESTÁVEL") {
    return (
      <>
        <ContainerCard sx={{ backgroundColor: "#509253" }}>
          <TextCard
            sx={{
              fontSize: "1.5rem",
              marginBottom: "0vh",
              marginTop: "3vh",
            }}
          >
            {props.name.toUpperCase()}
          </TextCard>
          <TextCard sx={{ fontSize: "1.5rem", fontWeight: "300" }}>
            {props.situation.toUpperCase()}
          </TextCard>
          <TextCard>
            {"Temperatura Corporal: " + props.tempCorp + " ºC."}
          </TextCard>
          <TextCard>
            {"Frequencia Respiratória: " + props.freqResp + " Mpm."}
          </TextCard>
          <TextCard>
            {"Frequencia Cardíaca: " + props.freqCard + " Bpm."}
          </TextCard>
          <TextCard>{"Pressão Arterial: " + props.presArt + " mmHg."}</TextCard>
          <TextCard>{"Oxigenação do Sangue: " + props.oxigen + "%."}</TextCard>
        </ContainerCard>
        {props.children}
      </>
    );
  } else {
    return (
      <>
        <ContainerCard sx={{ backgroundColor: "#ffc107" }}>
          <TextCard
            sx={{
              fontSize: "1.5rem",
              marginBottom: "0vh",
              marginTop: "3vh",
            }}
          >
            {props.name.toUpperCase()}
          </TextCard>
          <TextCard
            sx={{ fontSize: "1.5rem", fontWeight: "300", color: "#dc3545" }}
          >
            {props.situation.toUpperCase()}
          </TextCard>
          <TextCard>
            {"Temperatura Corporal: " + props.tempCorp + " ºC."}
          </TextCard>
          <TextCard>
            {"Frequencia Respiratória: " + props.freqResp + " Mpm."}
          </TextCard>
          <TextCard>
            {"Frequencia Cardíaca: " + props.freqCard + " Bpm."}
          </TextCard>
          <TextCard>{"Pressão Arterial: " + props.presArt + " mmHg."}</TextCard>
          <TextCard>{"Oxigenação do Sangue: " + props.oxigen + "%."}</TextCard>
        </ContainerCard>
        {props.children}
      </>
    );
  }
};

export default Card;
