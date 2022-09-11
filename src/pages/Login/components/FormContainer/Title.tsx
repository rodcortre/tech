import { CenterContainerStyled } from "@/styled-components";

export const Title = ({ title }: { title?: string }) => {
  return (
    <CenterContainerStyled>
      <h1>{title}</h1>
    </CenterContainerStyled>
  );
};
