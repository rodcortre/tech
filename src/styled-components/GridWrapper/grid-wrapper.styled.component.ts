
import styled from 'styled-components'
export const GridWrapperStyle = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: minmax(100px, auto);
width:95%;
@media only screen and (min-width: 1000px){
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

`