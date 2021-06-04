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
 
`;

export default Rightprofile
