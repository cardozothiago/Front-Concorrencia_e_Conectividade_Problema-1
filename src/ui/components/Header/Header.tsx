import React from "react";
import { ContainerHeader, TextHeader } from "./Header.style";
import { Divider } from "@material-ui/core";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <ContainerHeader>
        <TextHeader>{props.title}</TextHeader>
      </ContainerHeader>
      <Divider variant="fullWidth" sx={{ backgroundColor: "white" }} />
      {props.children}
    </>
  );
};

export default Header;
