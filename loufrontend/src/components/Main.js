import React from 'react'
import styled from 'styled-components'
function Main(props) {
    return (
        <Container>
            <Sharebox>
               <div>
                   <img src="/images/user.svg" alt=""/>
                   <button>Start a Post</button>
               </div>
               <div>
                   <button>
                       <img src="/images/edit.png" alt=""/>
                       <span>Photo</span>
                   </button>
                   <button>
                       <img src="/images/videoframe.svg" alt=" "/>
                       <span>Video</span>
                   </button>
                   <button>
                       <img src="/images/events-icon.svg" alt=" "/>
                       <span>Event</span>
                   </button>
                   <button>
                       <img src="/images/article-icon.svg" alt=" "/>
                       <span>Write Article</span>
                   </button>
               </div>
            </Sharebox>
        </Container>
    )
}

export default Main
const Container=styled.div`
grid-area:main;
`;
const CommonCard=styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Sharebox=styled(CommonCard)`
    display:flex;
    flex-direction:column;
    color:grey;
    margin:0 0 0px;
`;