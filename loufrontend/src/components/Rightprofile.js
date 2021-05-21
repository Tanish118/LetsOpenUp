import React from 'react'
import styled from'styled-components'
function Rightprofile(props) {
    return (
        <Container>
               <SideBar>
                   
                   <SideTop>
                        <h3>Room  </h3>
                        <img src="/images/down-icon.svg" alt="" />
                   </SideTop>
                   <SideChannels>
                        <ChannelHeader>
                            <BarHeader>
                            <img src="/images/down-icon.svg" alt="" />
                            <h4>Text Channels</h4>
                            </BarHeader>
                        </ChannelHeader>
                   </SideChannels>

               </SideBar>
        </Container>
    )
}

export default Rightprofile
const Container= styled.div`
grid-area:right;
`;
const SideBar=styled.div`
display: flex;
flex-direction: column;
flex:0.25;
height:100vh;
background-color:#607d77;
`;
const SideTop=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:3px;
    background-color:white ;
    color:black;
    border-bottom: 3px solid black;
`;
const SideChannels=styled.div`
`;
const ChannelHeader=styled.div`
`;
const BarHeader=styled.div`
`;