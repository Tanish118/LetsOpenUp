import {useEffect} from'react'
import React from 'react'
import styled from'styled-components'
import {connect} from 'react-redux'
import {getChannelAPI} from '../actions'
function SideBarChannel(props) {
    useEffect(()=>{
        props.getChannels();
    },[]);
    return (
        <Container>
            {props.user && props.user.displayName?props.user.displayName:"User"}
            {props.channels && props.channels.ChannelName}
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
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
        channels:state.messageState.messages,
    };
  };
  const mapDispatchToProps=(dispatch)=>({
    getChannels:(payload)=>dispatch(getChannelAPI(payload)),
});
  
  export default connect(mapStateToProps,mapDispatchToProps)(SideBarChannel);
