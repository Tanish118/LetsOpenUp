
import React from 'react'
import styled from'styled-components'
import ChatHeader from './ChatHeader'
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SearchIcon from '@material-ui/icons/Search';
function ChatArea(props) {
    return (
        <Container>            
            <ChatHeader/>
            <ChatMess>
            </ChatMess>
            <ChatInput>
                <ControlPointIcon/>
                <UsrMessage>
                    <div>
                    <input type="text" placeholder="Type Your Message here" />
                    
                    <button type="submit">Send</button>
                    </div>
                 </UsrMessage>
                <ChatInputIcons>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </ChatInputIcons>
            </ChatInput>
            
        </Container>
    )
}
const UsrMessage = styled.div`
  opacity: 1;  
  position: relative;
  color:white;
  flex:1;
  & > div {
     
    max-width: 280px;
    align-items: center;
    input {
        padding:10px;
        background-color: transparent;
        border:none;
        color:white;
        font-size:medium;
        outline-width:0;
    }
    button{
        display: none;
    }
  }
`;


const ChatInput=styled.div`    
    color:lightgray;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:8px;
    border-radius:5px;
    margin:5px;
    background-color: #383434;    
`;
const ChatMess=styled.div`
`;

const ChatInputIcons=styled.div`
     
`;
const Container=styled.div`   
border:1px solid black;
border-radius: 4px;
display: flex;
flex-direction: column;
flex:0.75;
height:95vh;
background-color:#caebe4;
overflow: visible;
`;
export default ChatArea
