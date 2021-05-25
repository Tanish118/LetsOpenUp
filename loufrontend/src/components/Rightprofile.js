import React, { useState ,useEffect}from 'react'
import {connect} from 'react-redux'
import styled from'styled-components'
import SideBarChannel from './SideBarChannel'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase'
function Rightprofile(props) {
    const [channels,setChannels]=useState([])
    useEffect(() => {
       db.collection("channels").onSnapshot((snapshot)=>
        setChannels(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                channel:doc.data(),
            }))
        )
       )
    }, [])
    const handleAddChannel=()=>{
        const channelName=prompt("Enter new Channel name");
        if(channelName){
            db.collection("channels").add({
                channelName:channelName
           });
        }
    }
    return (
        
               <SideBar>                   
                   <SideTop>
                        <h3>HangOut Room  </h3>
                        <KeyboardArrowDownIcon/>
                   </SideTop>
                   <SideChannels>
                        <ChannelHeader>
                            <BarHeader>
                            <KeyboardArrowDownIcon/>
                            <h4>Channels</h4>
                            </BarHeader>
                            <AddCircleIcon onClick={handleAddChannel}/>
                        </ChannelHeader>
                        <ChannelList>
                                {
                                    channels.map((channel)=>(
                                        <SideBarChannel/>
                                    ))
                                }
                                                              
                        </ChannelList>
                   </SideChannels>   
                   
                    <UserVoice>
                        <SignalCellularAltIcon fontSize="medium"/>
                        <br/>
                        <p>@{props.user && props.user.displayName?props.user.displayName:"User"} | Connected</p>
                       <InfoIcon/>
                    </UserVoice>                
               </SideBar>
        
    )
}



const SideBar=styled.div`
border:1px solid black;
border-radius: 4px;
display: flex;
flex-direction: column;
flex:0.25;
height:89vh;
background-color:#d3f0ea;
overflow: visible;
`;
const SideTop=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:3px;
    background-color:white ;
    color:#40464b ;
    border-bottom: 3px solid black;  
    
`;
const SideChannels=styled.div`
    flex:1;
`;
const ChannelHeader=styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px;
    background-color: #15967b;
    color:white;
`;
const BarHeader=styled.div`
    display: flex;
    align-items:center;    
    img{
        padding:4px;
    }
`;
const ADDchannel=styled.span`
    cursor:pointer;
    border-radius:50%;
  
    &:hover{
        background-color: white;
    }
`;
const UserVoice=styled.div`
    border-top:1px solid black; 
    display:flex;    
    padding:10px;
   justify-content:space-between;
   align-items: center;
   color:Green;
   P{
       font-weight: 600;
   }
   span{
       color:grey;
   }
`;
const ChannelList=styled.div`
    /* overflow-y: scroll; */
`;
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    };
  };
  
  export default connect(mapStateToProps)(Rightprofile);
