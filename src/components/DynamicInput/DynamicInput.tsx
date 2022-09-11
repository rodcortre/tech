import { ErrorMessage, useField } from "formik";
import React from "react";
import {
  ContainerInputStyled,
  ErrorStyled,
  InputStyled,
} from "./styled-components";
interface IDynamic {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}
const DynamicInputBasic: React.FC<IDynamic> = ({ ...props }): JSX.Element => {
  const [field] = useField(props);

  return (
    <>
      <ContainerInputStyled>
        <InputStyled {...field} {...props} />
        <ErrorMessage
          name={props.name}
          render={(errorMessage) => <ErrorStyled>{errorMessage}</ErrorStyled>}
        />
      </ContainerInputStyled>
      <br></br>
    </>
  );
};
export default DynamicInputBasic;
