import React from 'react'
import styled from'styled-components'
function SideBarChannel({id,channel}) {
    return (
        <Container>
          <h4> <ChannelName>#</ChannelName>HangOut</h4>
        </Container>
    )
}
const Container=styled.div`
    h4{
        color:black;
        align-items: center;
        background-color: transparent;
        padding: 5px 10px;
        &:hover{
            color:white;
            background-color: #22bfa0;
        }
    }
`;
const ChannelName=styled.span`
    font-size:20px;
    padding:4px;
`;
export default SideBarChannel
