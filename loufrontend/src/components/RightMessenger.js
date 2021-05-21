
import React from 'react'
import styled from'styled-components'
import ChatArea from './ChatArea';
import Rightprofile from './Rightprofile';


function RightMessenger() {
    return (
        <Container>
            <Messenger>
                <Rightprofile/>
                {/* <ChatArea/> */}
            </Messenger>
        </Container>

    )
}

export default RightMessenger
const Messenger=styled.div`

`;
const Container= styled.div`
    grid-area: right;
    /* display:grid;
    grid-template-areas:"channel chatArea";   
    grid-template-columns:minmax(0,8fr) minmax(0,8fr) ; */
`;
