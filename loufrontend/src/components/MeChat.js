import React from 'react'
import{useState,useEffect} from'react'
import styled from'styled-components'
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import{Avatar, IconButton} from'@material-ui/core'
import TextMess from './TextMess';
import { useSelector } from 'react-redux';
import{connect} from'react-redux'
import { selectChatId, selectChatName } from '../reducers/chatSlice';
import db from '../firebase';
import firebase from'firebase'
function Chat(props) {
    const[input,setInput] = useState("");    
    const chatName=useSelector(selectChatName);
    const [messages,setMessages]=useState([]);
    const chatId=useSelector(selectChatId);
 
   ;
    useEffect(()=>{
        if(chatId){
        db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp','asc')
        .onSnapshot(snapShot=>(
            setMessages(snapShot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })))
        ))}
    },[chatId]);
  

    const sendMessage=e=>{
         e.preventDefault();       
        
        db
        .collection('chats').doc(chatId)
        .collection('messages').add({
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:props.user.uid,
            displayName:props.user.displayName,
            email:props.user.email,
            photo:props.user.photoURL,
        });
        
        setInput("");

    };
    return (
        <Container>
           
           <Header>
                <h4>To :<span>  {chatName}</span></h4>
                <strong >Details </strong>
           </Header>
            
           { chatId?<Message>  
           { chatName && messages.map(({id,data:{message,email,photo,displayName,uid,timestamp,logged}})=>(
                 <TextMess key={id} id={id} email={email} message={message} photo={photo} displayName={displayName} uid={uid} timestamp={timestamp} logged={props.user.email}/>
            ))}
            </Message>:
            <CheckIn></CheckIn>
            }
           { chatId &&
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
           </ChatInput>}
        </Container>
    )
}
const CheckIn=styled.div`
     background: url("/images/crazy.png"); background-repeat: no-repeat;background-size: 100% 100%;
  
     background-position: center; flex:1;
   
`;
const Container=styled.div`
     display: flex;
    flex-direction: column;
    flex:0.65;
    height:370px;   border:1px solid lightgray;
    
`;
const Header=styled.div`
   padding:20px;
   display:flex;
    padding:20px;
    justify-content: space-between; 
    border-bottom:1px solid lightgray;
    background-color: white;
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
  overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
   flex:1;

   background-color:white;
   background-size: 100% 100%;
   padding: 5px;
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
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,       
    };
  };
  export default connect(mapStateToProps)(Chat);
