import { useMemo, useState } from "react";
import { PatientInterface } from "data/@types/patientInterface";

export function useIndex() {
  const [patients, setPatients] = useState<PatientInterface[]>();

  const [Clicked, setClicked] = useState<PatientInterface>(null);
  const [isClicked, setIsClicked] = useState(false);

  async function onClickButtonHandle(index) {
    if (Clicked === patients[index]) {
      setIsClicked(false);
      setTimeout(() => setClicked(null), 500);
    } else {
      if (Clicked == null) {
        setClicked(patients[index]);
        setIsClicked(true);
      } else {
        setIsClicked(false);
        setTimeout(() => setClicked(patients[index]), 300);
        setTimeout(() => setIsClicked(true), 400);
      }
    }
  }

  function webSocketConnection() {
    const ws = new WebSocket("ws://26.91.70.227:8000");
    ws.addEventListener("open", () => {
      console.log("Conectado ao Servidor");
    });
    ws.onmessage = function (message) {
      setPatients(JSON.parse(message.data));
    };
  }

  return {
    patients,
    onClickButtonHandle,
    Clicked,
    isClicked,
    webSocketConnection,
  };
}
