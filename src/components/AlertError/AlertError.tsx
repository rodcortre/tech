import { CenterContainerStyled } from "@/styled-components";
interface Props {
  message: string;
}
export const AlertError = ({ message }: Props) => {
  return (
    <CenterContainerStyled>
      <h1>{message}</h1>
    </CenterContainerStyled>
  );
};
