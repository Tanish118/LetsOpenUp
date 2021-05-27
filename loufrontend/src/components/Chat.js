import React from 'react'
import{useState} from'react'
import styled from'styled-components'
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import{IconButton} from'@material-ui/core'

function Chat() {
    const[input,setInput] = useState("");
    const sendMessage=e=>{
        e.prevent.default();
        setInput("");
    };
    return (
        <Container>
           <Header>
                <h4>To :<span> Yo Mumma</span></h4>
                <strong>Details </strong>
           </Header>
           <Message>
               <h1> yo muumma cant bear me</h1>
               <h1> yo muumma cant bear me</h1>
               <h1> yo muumma cant bear me</h1>
           </Message>
           <ChatInput>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Lets Hangout"
                    type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <SettingsVoiceIcon/>
                </IconButton>
           </ChatInput>
        </Container>
    )
}

const Container=styled.div`
     display: flex;
    flex-direction: column;
    flex:0.65;
    height:89vh;
`;
const Header=styled.div`
   padding:20px;
   display:flex;
    padding:20px;
    justify-content: space-between; 
    border-bottom:1px solid lightgray;
    background-color: #f5f5f5;
    &>h4{
        font-weight:500;
        color:gray;
        span{
            color:black;
            font-weight:600;
        }
    }
    strong{
        color:blue;
    }
`;
const Message=styled.div`
   flex:1;
   background-color: white;
   background: url("/images/ggmessenger.jpg");
  
  background-position: center;
`;
const ChatInput=styled.div`
    display:flex;
    align-items: center;
    padding:10px 20px;
    border-top:1px solid lightgray;
    background-color: #f5f5f5;
    &>form{
        flex:1;
        &>input{
            width:98%;
            outline-width: 0;
            border:1px solid lightgray;
            padding:5px;
            border-radius:999px;
           
        }
        &>button{
            display: none;
        }
    }
`;
export default Chat
