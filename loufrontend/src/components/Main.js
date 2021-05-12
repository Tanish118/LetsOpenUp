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
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="/images/more.svg" alt="" height="30" width="30"/>
                        </button>
                    </SharedActor>
                    <Description>
                        Text
                    </Description>
                    <SharedImg>
                        <a>
                            <img src="/images/postbg.jpg" alt=""/>
                        </a>
                    </SharedImg>
                    <SocialCount>
                        <li><button>
                            <img src="/images/flikes.svg" alt="" width="20" height="15"/>
                         
                            <img src="/images/react-clap.svg" alt="" width="20" height="15"/>
                            <span>75</span>
                            </button></li>
                        <li><a>
                           <span>2 comments</span>
                            </a></li>
                    </SocialCount>
                </Article>
            </div>
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
const Article=styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow:visible;

`;
const SharedActor=styled.div`
    padding-right:40px;
    flex-wrap:nowrap;
    padding :12px 16px 0;
    margin-bottom:8px;
    align-items:center;
    display:flex;
    a{
        margin-right:12px;
        flex-grow:1;
        overflow:hidden;
        display:flex;
        text-decoration:none;

        img{
            width:48px;
            height:48px;
        }
        &>div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis:0;
            margin-left:8px;
            overflow:hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size:14px;
                    font-weight:700;
                    color:rgba(0,0,0,1);
                }
                &:nth-child(n+1){
                    font-size:12px;
                    color:rgba(0,0,0,0.6);
                }
            }
        }
    }
    button{
        position:relative;
        right:12px;
        top:0;
        background:transparent;
        border:none;
        outline:none;
    }

`;
const Description=styled.div`
    padding:0 16px;
    overflow:hidden;
    color:black;
    font-size:14px;
    text-align:left;

`;

const SharedImg=styled.div`
    margin-top:8px;
    width:100%;
    display:block;
    position:relative;
    background-color:#f9fafb;
    img{
        object-fit:contain;
        width:100%;
        height:100%;
    }
`;
const SocialCount=styled.ul`
    line-height:1.3;
    display:flex;
    align-items:flex-start;
    overflow:auto;
    margin:0 16px;
    padding:8px 0;
    border-bottom:1px solid #e9e5df;
    list-style:none;
    li{
        align-items:center;
        margin-right:5px;
        font-size:12px;
        button{
           display:flex;
           border:none;
        }
    }
`;
