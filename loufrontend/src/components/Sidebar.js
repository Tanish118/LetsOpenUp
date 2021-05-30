import React from 'react'
import{useState,useEffect} from'react'
import{Avatar,IconButton} from'@material-ui/core'
import styled from'styled-components'
import RateReviewIcon from '@material-ui/icons/RateReview';
import SearchIcon from '@material-ui/icons/Search';
import"./sidebar.css"
import TargetMessage from './TargetMessage';
import{connect} from'react-redux'
import db from '../firebase'
import firebase from'firebase'
function Sidebar(props) {
    const [chats,setChats]=useState([]);
    useEffect(()=>{
        db.collection('chats')  .orderBy("timestamp","desc")      
        .onSnapshot(snapShot=>(
            setChats(snapShot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })))
        ))
    },[]);
    const addChat=()=>{
        const chatName=prompt('Enter ChatName');
        if(chatName){
        db.collection('chats').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            chatName:chatName,
        });
        }
    };
    return (
        <Container>      
        <Header>
        
            <Avatar src={props.user && props.user.photoURL} className="side_avatar"/>
            <SideInput>
                    <SearchIcon/>
                    <input placeholder="search"></input>
            </SideInput>
            <IconButton variant="outlined" className="inputButton">
            <RateReviewIcon onClick={addChat}/>
            </IconButton>
        </Header>
        <Chats>
            {chats.map(({id,data:{chatName}})=>(
                 <TargetMessage key={id} id={id} chatName={chatName}/>
            ))}
             
           
        </Chats>
        </Container>
    )
}
const Container=styled.div`
    flex:0.35;
    height:89vh;
    display:flex;
    flex-direction:column;
    background-color:#f5f5f5;
    border-right:1px solid lightgray;
`;
const SideInput=styled.div`
    display:flex;
    padding-top:5px;
    padding-left:15px;
    padding-bottom:5px;
    align-items:center;
    justify-content:left;
    flex:1;
    background-color: #e1e1e1;
    color:gray;
    border-radius:5px;
    &>input{
        padding-left:15px;
        border:none;
        background-color: transparent;
        outline-width:0;
    }
`;
const Header=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    height:50px;
    border-bottom: 2px solid lightgray;
`;
const Chats=styled.div`
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`;
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
       
    };
  };
;
export default connect(mapStateToProps)(Sidebar);
