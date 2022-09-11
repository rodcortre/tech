import styled from 'styled-components'
interface Props{
  heigth:string
}
export const BackgroundContainerStyled = styled.div<Props>`
  background:#326496;
  height: ${({ heigth }) => heigth};
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;

`