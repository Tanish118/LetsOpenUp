
import React from 'react'
import styled from'styled-components'
import ChatHeader from './ChatHeader'
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

function ChatArea(props) {
    return (
        <Container>            
            <ChatHeader/>
            <ChatMess>
            </ChatMess>
            <ChatInput>
                <ControlPointIcon/>
                <form >
                    <InputArea type="text" placeholder="Message "/>
                    <button type="submit">Send Message</button>
                </form>
                <ChatInputIcons>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </ChatInputIcons>
            </ChatInput>
            
        </Container>
    )
}
const ChatInput=styled.div`    
    color:red;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:8px;
    border-radius:5px;
    margin:5px;
    background-color: #889491;
    form{
        InputArea{
            
        } 
    }
`;
const ChatMess=styled.div`
`;
const InputArea=styled.input`
    padding:2px;
    border:none;
    color:white;
    font-size:large;
    color:white;
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
