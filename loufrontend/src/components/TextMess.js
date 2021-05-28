import { Avatar } from '@material-ui/core'
import React from 'react'

import styled from'styled-components'
function TextMess({id,email,message,photo,displayName,uid,timestamp}) {  
    
    return (       
        <Container >
            <Avatar src={photo} />
            <p>
              {id} ---{displayName} --{email}    --       {message}  --{uid}
             
            </p>
            <small>  {timestamp.toDate().toLocaleTimeString('en-US')} {timestamp.toDate().toDateString()} timestamps</small>
        </Container>
    )
}
const Container=styled.div`
    display:flex;
    align-items: center;
    position:relative;
    width:fit-content;
    justify-content: space-between;
    margin:15px;
    &>p{
        margin:10px;
        border-radius:20px 5px 20px 5px;
        padding:15px;
        background-color: #22bfa0;
        color:white;
        margin-right: auto;
    }
    &>small{
        color:gray;
        position: absolute;
       bottom:-5px;
       right:0;
    }
`;

export default TextMess
