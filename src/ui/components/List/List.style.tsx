import { experimentalStyled as styled } from "@material-ui/core";
import { List } from "@material-ui/core";

export const ListStyled = styled(List)`
  margin-top: 5vh;
  width: 30vw;
  overflow: scroll;
  height: 70vh;
  box-shadow: 0px 0px 7px grey;
  border-radius: 4px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #39b9f9;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #07a1ed;
  }
  ::-webkit-scrollbar-track {
    background: #bce7fd;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;
