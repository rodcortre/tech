import useWindowSize from "@/hooks/Window/useWindowsSize";
import { useEffect, useState } from "react";
import { FormContainer } from "../Login/components";
import {
  BackgroundContainerStyled,
  FormContainerStyled,
} from "../Login/styled-components";
import { FormRegister } from "./components/Form";

const Register = () => {
  const windowsSize = useWindowSize();
  const [dynamicHeight, setDynamicHeight] = useState("0px");

  useEffect(() => {
    if (windowsSize?.height) {
      setDynamicHeight(`${windowsSize.height}px`);
    }
  }, [windowsSize]);

  return (
    <BackgroundContainerStyled heigth={dynamicHeight}>
      <FormContainerStyled>
        <FormContainer>
          <FormContainer.Title title="Register new account" />
          <FormContainer.Description description="Register new account with email and password" />
          <FormContainer.Form form={<FormRegister />} />
          <FormContainer.Link
            to="/Login"
            description="Back
"
          />
        </FormContainer>
      </FormContainerStyled>
    </BackgroundContainerStyled>
  );
};

export default Register;
