import { useState } from "react";
import { PatientInterface } from "data/@types/patientInterface";
import { ApiService } from "data/services/apiService";
import { FixedPatientInterface } from "data/@types/fixedPatientInterface";

export function useIndex() {
  const [patients, setPatients] = useState<PatientInterface[]>();
  const [clicked, setClicked] = useState<FixedPatientInterface>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [con, setCon] = useState(false);
  const [filterQtd, setFilterQtd] = useState("");

  async function onClickButtonHandle(index: number) {
    if (clicked === patients[index]) {
      setIsClicked(false);
      setTimeout(() => setClicked(null), 500);
    } else {
      if (clicked === null) {
        //setClicked(patients[index]);
        getPatientInfo(patients[index].FogId, patients[index].name);
        setTimeout(() => setIsClicked(true), 300);
      } else {
        setIsClicked(false);
        //setTimeout(() => setClicked(patients[index]), 300);
        setTimeout(() => setIsClicked(true), 400);
      }
    }
  }

  async function webSocketConnection() {
    try {
      const { data } = await ApiService.get("/patients");
      console.log(data);
      setPatients(data);
      setTimeout(() => {
        setCon(!con);
      }, 2000);
    } catch (error) {
      console.log(
        "Erro ao se reconectar ao servidor. Tentando novamente em 10 segundos..."
      );
      setTimeout(() => {
        setCon(!con);
      }, 10000);
    }
  }

  async function filterPatients(qtd: string) {
    await ApiService.post("/filter", { amount: qtd });
    const { data } = await ApiService.get("/patients");
    console.log(data);
    setPatients(data);
    console.log(qtd);
  }

  async function getPatientInfo(fogId: number, name: string) {
    const { data } = await ApiService.post("/fixedPatient", {
      fogId: fogId,
      name: name,
    });
    console.log(data);
  }

  return {
    patients,
    onClickButtonHandle,
    clicked,
    isClicked,
    webSocketConnection,
    con,
    setClicked,
    filterQtd,
    setFilterQtd,
    filterPatients,
  };
}
