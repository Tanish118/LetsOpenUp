import React from 'react'
import styled from'styled-components'
function UserPost({created,logged,post}) {
    return (
        <SharedImg>
             <span> {created} | {logged}</span> 
                        <a>
                              <img src="post" alt=""/> 
                              
                        </a>
        </SharedImg>
    )
}
const SharedImg=styled.div`
    margin-top:8px;
    width:100%;
    display:block;
    position:relative;
    background-color:#f9fafb;
    img{
        object-fit:contain;
        width:100%;
        max-height: 500px;
        @media (max-width: 768px) {
            max-height: 400px;
        }
    }
`;
export default UserPost
