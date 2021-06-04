import React from 'react'
import styled from'styled-components'
import MeChat from './MeChat'
import MeSide from './MeSide'
import Sidebar from './Sidebar'
function Rightprofile() {
    return (
        <Container>
            
               <MeSide/>
           
                <MeChat/>
            
        </Container>
    )
}
const Container =styled.div`
@media(max-width:768px){
    display: none;
}
`;

export default Rightprofile
