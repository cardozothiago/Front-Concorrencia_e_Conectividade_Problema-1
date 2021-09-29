import { useState } from "react";
import { PatientInterface } from "data/@types/patientInterface";

export function useIndex() {
  const [patients, setPatients] = useState<PatientInterface[]>();
  const [clicked, setClicked] = useState<PatientInterface>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [con, setCon] = useState(false);

  async function onClickButtonHandle(index: number) {
    if (clicked === patients[index]) {
      setIsClicked(false);
      setTimeout(() => setClicked(null), 500);
    } else {
      if (clicked === null) {
        setClicked(patients[index]);
        setTimeout(() => setIsClicked(true), 300);
      } else {
        setIsClicked(false);
        setTimeout(() => setClicked(patients[index]), 300);
        setTimeout(() => setIsClicked(true), 400);
      }
    }
  }

  function webSocketConnection() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://26.91.70.227:8080", false);
    try {
      xhttp.send();
      setPatients(JSON.parse(xhttp.responseText));
      setTimeout(() => {
        setCon(!con);
      }, 10000);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setCon(!con);
      }, 10000);
    }
  }

  return {
    patients,
    onClickButtonHandle,
    clicked,
    isClicked,
    webSocketConnection,
    con,
    setClicked,
  };
}
