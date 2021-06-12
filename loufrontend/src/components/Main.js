import {useState,useEffect} from'react'
import React from 'react'
import styled from 'styled-components'
import PostModal from'./PostModal'
import{connect} from'react-redux'
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PhotoIcon from '@material-ui/icons/Photo';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {getArticlesAPI} from '../actions'
import ReactPlayer from'react-player'
import Comments from './Comments'
function Main(props) {
    const [showModal,setModal]=useState("close");
    const[input,setInput] = useState("");     
    useEffect(()=>{
        props.getArticles();
    },[]);

    const sendMessage=e=>{
        e.preventDefault();       
    
       setInput("");

   };
    const handleClick=(e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }
        switch(showModal){
            case "open":
                setModal("close");
                break;
            case "close":
                setModal("open");
                break;
            default:
                setModal("close");
                break;
        }
    };
    return (
        <>
        { props.articles.length===0?
        ( <p>Nothing Posted</p>)
        :(
        <Container>                    
            <Sharebox>
                
               <div>
               {props.user && props.user.photoURL? <img src={props.user.photoURL} alt="" />:
                        <img src="/images/user.svg" alt=""/>    }
                 
                   <button 
                   onClick={(event)=>handleClick(event)}
                   disabled={props.loading?true:false}
                   >Start a Post</button>
               </div>
               <div>
                   <button>
                       <PhotoIcon/>
                       <span>Photo</span>
                   </button>
                   <button>
                       <VideoLibraryIcon/>
                       <span>Video</span>
                   </button>
                   <button>
                       <EventIcon/>
                       <span>Event</span>
                   </button>
                   <button>
                       <AssignmentIcon/>
                       <span>Write Article</span>
                   </button>
               </div>
            </Sharebox>
            <Content>
              { props.loading && <img src="/images/loading.gif" alt=""/>}
                {   props.articles.length>0 &&
                    props.articles.map((article,key)=>(
                <Article key={key}>
                    <SharedActor>
                        {article.id}
                        <a>
                            <img src={article.actor.image} alt="" />
                            <div>
                                <span>{article.actor.title}</span>
                                <span>{article.actor.description}</span>                                
                                <span> {article.actor.date?.toDate().toDateString()}</span>
                            </div>
                        </a>
                        <button>
                            <MoreHorizIcon/>
                        </button>
                    </SharedActor>
                    <Description>
                    {article.description}<br></br>
                      
                    </Description>
                    <SharedImg>
                        <a>
                            {  article.video? <ReactPlayer width={"100%"} url={article.video}/>
                                :<img src={article.sharedImg} alt=""/>                                
                               
                            }
                           
                            
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
                            
                    <SocialActions>
                        <button>
                            <img src="/images/heart.svg" alt="" width="25" height="20"/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="/images/icon-comment.svg" alt="" width="25" height="20"/>
                            <span>Comment</span>
                        </button>
                        <button>
                            <img src="/images/next.svg" alt="" width="25" height="20"/>
                            <span>Share</span>
                        </button>
                    </SocialActions>
                    <CommentSection>
                    <form>
                        <input 
                        value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Lets Hangout" type="text"/>
                        <button onClick={sendMessage}>Send Message</button>
                    </form>
                        <Comments/>
                        <Comments/>
                        <Comments/> <Comments/>
                    </CommentSection>
                </Article> 
                    ))}               
                </Content>
            <PostModal showModal={showModal} handleClick={handleClick}/> 
        </Container>
        )}
        </>
    )
}

const CommentSection=styled.div`    
    align-items: center;
    padding:10px 20px;
    border-top:1px solid lightgray;
    background-color: #f5f5f5;
    &>form{
        flex:1;
        &>input{
            width:98%;
            outline-width: 0;
            border:1px solid lightgray;
            padding:5px;
            border-radius:9px;
           
        }
        &>button{
            display: none;
        }
    }
`;
const Content=styled.div`
    text-align:center;
    &>img{
        width: 30px;        
    }
`;
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
            border-radius:8px;
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
                &:hover{
                background-color:#dff5f0;               
                }
                &:active{
                background-color:#bacfca;               
                }
               
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
                &:active{
                background-color:#89e8d5;               
            }
            }
        }
    }
`;
const Article=styled(CommonCard)`
    
    padding:0;
    margin:5px 0 8px;
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
        /* max-height: 500px; */
        @media (max-width: 768px) {
            max-height: 400px;
        }
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
const SocialActions=styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-start;
    margin:0;
    min-height:40px;
    padding:4px 8px;
    button{
        display:inline-flex;
        align-items:center;
        border-radius:4px;
        border:none;
        padding:4px;
        background:transparent;
        color:blue;
        @media (min-width: 768px) {
             margin-left:8px;

        }
        &:hover{
            background-color:#d9d7d2;
        }
        &:first-child{
            &:active{
            background-color:#f2525a;
            }
        }
    }

`;
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
        loading:state.articleState.loading,
        articles:state.articleState.articles,
    };
  };
const mapDispatchToProps=(dispatch)=>({
    getArticles:(payload)=>dispatch(getArticlesAPI(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Main);