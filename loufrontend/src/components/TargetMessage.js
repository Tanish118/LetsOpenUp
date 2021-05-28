import { Avatar } from '@material-ui/core'
import React from 'react'
import{useState,useEffect} from'react'
import styled from'styled-components'
import"./TargetMessage.css"
import {setChat} from '../reducers/chatSlice'
import{useDispatch } from'react-redux'
import db from '../firebase';
import firebase from'firebase'
function TargetMessage({id,chatName}) {
    const dispatch=useDispatch();
    const [chatInfo,setChatInfo]=useState([]);
    useEffect(()=>{
      db
    //   .collection("chats").doc(id)
      .collection("messages")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot)=>
        setChatInfo(snapshot.docs.map((doc)=>doc.data()))
      );
    },[id]);
    return (
        
        <Container onClick={()=>
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName,
                })
            )}
        >
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}                 
                </p>
                <small>
                    {/* {chatInfo[0].timestamp?.toDate().toLocaleTimeString()} */}
                      time
                    </small>
            </div >
        </Container>
    )
}

const Container=styled.div`
    display:flex;
    align-items: center;
    padding:20px;
    border-bottom:1px solid lightgray;
    cursor:pointer;
    &:hover{
        background-color: #21c2a2;
        color:white;
    }
`;
export default TargetMessage
