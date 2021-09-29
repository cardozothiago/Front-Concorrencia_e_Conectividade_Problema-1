import { experimentalStyled as styled } from "@material-ui/core";
import { List } from "@material-ui/core";

export const ListStyled = styled(List)`
  margin-top: 5vh;
  min-width: 350px;
  width: auto;
  overflow: auto;
  height: auto;
  max-height: 70vh;
  box-shadow: 0px 0px 7px grey;
  border-radius: 4px;
  padding: 0px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #2581af;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #0575ad;
  }
  ::-webkit-scrollbar-track {
    background: #282828;
    border-radius: 0px;
  }
`;
