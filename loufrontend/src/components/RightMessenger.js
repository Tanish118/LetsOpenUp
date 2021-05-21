
import React from 'react'
import styled from'styled-components'
import ChatArea from './ChatArea';
import Main from './Main';
import Rightprofile from './Rightprofile';


function RightMessenger() {
    return (
        <Container>
            
                <Rightprofile/>
                <ChatArea/>
            
        </Container>

    )
}

export default RightMessenger

const Container= styled.div`
   display: flex;
   /* flex-direction:column; */
   @media(max-width:768px){
    flex-direction:column;
    padding:0 5px;
    }
`;
