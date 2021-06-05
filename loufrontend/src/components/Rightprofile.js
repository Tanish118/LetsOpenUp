import React from 'react'
import styled from'styled-components'
import MeChat from './MeChat'
import MeSide from './MeSide'
import Sidebar from './Sidebar'
function Rightprofile() {
    return (
        <Container>
            <TryBall>
               <MeSide/>
           
                <MeChat/>
                </TryBall>
        </Container>
    )
}
const TryBall=styled.div`
  
  top:70px;bottom:0;
  position:sticky;
`;
const Container =styled.div`
@media(max-width:768px){
    display: none;
}
`;

export default Rightprofile
