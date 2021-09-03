import React from "react";
import { ListStyled } from "./List.style";

interface ListProps {}

const List: React.FC<ListProps> = (props) => {
  return <ListStyled>{props.children}</ListStyled>;
};

export default List;
