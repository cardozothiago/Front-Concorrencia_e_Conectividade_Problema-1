import React from "react";
import { FilterFieldStyled } from "./FilterField.style";
import { TextFieldProps } from "@material-ui/core";
const FilterField: React.FC<TextFieldProps> = (props) => {
  return <FilterFieldStyled {...props} />;
};

export default FilterField;
