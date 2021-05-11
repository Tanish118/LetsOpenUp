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
                       <img src="/images/gallery.svg" alt="" width="20" height="20"/>
                       <span>Photo</span>
                   </button>
                   <button>
                       <img src="/images/videoframe.svg" alt=" " width="20" height="20"/>
                       <span>Video</span>
                   </button>
                   <button>
                       <img src="/images/events-icon.svg" alt=" " width="20" height="20"/>
                       <span>Event</span>
                   </button>
                   <button>
                       <img src="/images/article-icon.svg" alt=" " width="20" height="20"/>
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
    background:white;
    div{
        button{
            outline:none;
            color:rgba(0,0,0,0.6);
            font-size:14px;
            line-height:1.5;
            min-height:48px;
            background:transparent;
            align-items:center;
            border: none;
            display:flex;
            font-weight:600;
        }
        &:first-child{
            display:flex;
            align-items:center;
            padding:8px 16px 0px 16px;
            img{
                width:48px;
                height:48px;
                border-radius:50%;
            }
            button{
                margin:4px 0;
                flex-grow:1;
                border-radius:35px;
                padding-left:16px;
                border:1px solid rgba(0,0,0,0.2);
                background-color:white;
                text-align:left;

            }
        }
        &:nth-child(2){
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            padding-bottom:4px;
            button{
                img{
                    margin:0 4px 0 -2px;
                }
                span{
                    color:#70b5f9;
                }
            }
        }
    }
`;
