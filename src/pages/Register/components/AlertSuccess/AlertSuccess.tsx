import { CenterContainerStyled } from "@/styled-components";

export const AlertSuccess = () => {
  return (
    <CenterContainerStyled>
      <div style={{ margin: "10px" }}>
        <h1>Creado con exito, regresa al login para iniciar sesion</h1>
      </div>
    </CenterContainerStyled>
  );
};
