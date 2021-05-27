import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from'styled-components'
import"./TargetMessage.css"
function TargetMessage() {
    return (
        <Container>
            <Avatar/>
            <div className="info">
                <h3>Yo Mumma</h3>
                <p>we Dont Talk AnyMore                  
                </p>
                <small>timestamp</small>
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
