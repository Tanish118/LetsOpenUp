import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
function Messege(props) {
    return (
        <Mess>
            <AccountCircleIcon/>
           <MessageInfo>
                <h4>
                    UserName_Kami_Karan
                
                <span>
                    this is timestamp
                </span></h4>
                <p>
                    this is message
                </p>
           </MessageInfo>
        </Mess>
    )
}
const MessageInfo=styled.div`
    margin-left:10px;
    h4{
    span{
        color:blue;
        margin-left:10px;
        font-size:x-small;
     }
    }

`;
const Mess=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    color:purple;
`;
export default Messege
