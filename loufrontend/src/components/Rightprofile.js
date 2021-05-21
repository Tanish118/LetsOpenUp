import React from 'react'
import {connect} from 'react-redux'
import styled from'styled-components'
import SideBarChannel from './SideBarChannel'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
function Rightprofile(props) {
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
                            <h4>Text Channels</h4>
                            </BarHeader>
                            <AddCircleIcon/>
                        </ChannelHeader>
                        <ChannelList>
                                <SideBarChannel/>
                                <SideBarChannel/>
                                <SideBarChannel/>
                                <SideBarChannel/>
                        </ChannelList>
                   </SideChannels>   
                   
                    <UserVoice>
                        <SignalCellularAltIcon fontSize="medium"/>
                        <br/>
                        <p>@{props.user && props.user.displayName?props.user.displayName:"User"} <br/> Connected</p>
                       
                    </UserVoice>                
               </SideBar>
        
    )
}



const SideBar=styled.div`
 grid-area: channel;
border:1px solid black;
border-radius: 4px;
display: flex;
flex-direction: column;
flex:0.25;
height:100vh;
background-color:#d3f0ea;
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
    border-top:1px solid black; border-bottom:1px solid black;
    display:flex;
    padding:10px;
   justify-content:left;
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

`;
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    };
  };
  
  export default connect(mapStateToProps)(Rightprofile);
