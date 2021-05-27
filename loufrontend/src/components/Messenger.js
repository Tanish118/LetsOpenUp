import React from 'react'
import styled from'styled-components'
import Chat from './Chat'
import Sidebar from'./Sidebar'
function messenger() {
    return (
        <Imessage>
        {/* Adding Sidebar */}
        <Sidebar/>
        {/* Chatting Area */}
        <Chat/>
        
    </Imessage>
    )
}
const Imessage=styled.div`
    margin-top:70px;
   display:flex;
   border:2px solid lightgray;
   border-radius:6px;
`;
export default messenger
