import React from 'react'
import styled from'styled-components'
function ChatHeader() {
    return (
        <Container>
           <Header_left>
                <h3>#Test Channel Name</h3>
           </Header_left>
           <Header_right>

           </Header_right>
        </Container>
    )
}
const Container=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:gray;
    padding:10px;
    border-bottom: 2px solid black;
  
`;
const Header_left=styled.div`

    h3{
        display: flex;
        flex-direction: column;
        align-items: center;
        color:black
    }
`;
const Header_right=styled.div``;
export default ChatHeader
