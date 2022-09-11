import useWindowSize from "@/hooks/Window/useWindowsSize";
import { useEffect, useState } from "react";
import { Form, FormContainer } from "./components";

import {
  BackgroundContainerStyled,
  FormContainerStyled,
} from "./styled-components";

const Login = () => {
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
          <FormContainer.Title title="Sign In" />
          <FormContainer.Description description="login to view user application" />
          <FormContainer.Form form={<Form />} />
          <FormContainer.Link
            to="/Register"
            description="Click to register
"
          />
        </FormContainer>
      </FormContainerStyled>
    </BackgroundContainerStyled>
  );
};

export default Login;
