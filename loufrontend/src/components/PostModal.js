import React from 'react'
import{useState} from'react'
import styled from'styled-components'
import{connect} from'react-redux'
 import ReactPlayer from'react-player'
import firebase from "../firebase";
import {newPostAPI, postArticleAPI} from'../actions'
function PostModal(props) {
    const[editorText,funcEditor] = useState("");
    const [shareImage,setShareImage]=useState("");
    const[videoLink, setVideoLink]=useState("");
    const[assetArea,setAssetArea]=useState("");
    const handleChange=(e)=>{
        const image=e.target.files[0];
        if(image ==='' ||image ===undefined){
            alert(`File selected is not a image, It is a ${typeof image}`);
            return;
        }
        setShareImage(image);
    };
    const switchAssetArea=(area)=>{
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle=(e)=>{
        console.log("Post Modal active")
        e.preventDefault();
        if(e.target!==e.currentTarget){
            console.log("This is insites");
            return;
        }
        const payload={
            image:shareImage,
            video:videoLink,
            user:props.user,
            description:editorText,
        //    timestamp:firebase.firestore.Timestamp.now(),
          
        };
        console.log(payload);
        props.postArticle(payload);
        reset(e);
    };
    const reset=(e)=>{
        funcEditor("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    };
    return (
        <>
        { props.showModal ==='open' &&
       <Container>
           <Content>
                <Header>
                    <h2>Create A Post</h2>
                    <button onClick={(event)=>reset(event)}> </button>                   
                </Header>
                <SharedContent>
                    <UserInfo>
                    {props.user && props.user.photoURL? <img src={props.user.photoURL} alt="" />:
                        <img src="/images/user.svg" alt=""/>    }              
                        <span>{props.user && props.user.displayName?props.user.displayName:""}</span>
                    </UserInfo>

                    <Editor>
                        <textarea value={editorText}
                        onChange={(e)=>funcEditor(e.target.value)}
                        placeholder="What Do you Like to Add to your Timeline..." 
                        autoFocus={true}/>
                        {
                            assetArea==='image'?
                        
                        <UploadImg>
                            <input type="file" accept="image/png, image/gif, image/jpeg"
                                name='image' id="file"  style={{display:"none"}}  onChange={handleChange} />
                            <label htmlFor="file">Select an image to share</label>                        
                            {
                                shareImage && <img src={URL.createObjectURL(shareImage)} alt=""/>
                            }  
                        </UploadImg>
                        :
                        assetArea==='media' &&
                            <>
                                <input type="text" placeholder="Enter Video Link"
                                value={videoLink} onChange={(event)=>setVideoLink(event.target.value)}/>
                                {
                                    videoLink && <ReactPlayer width={"100%"} url={videoLink}/>
                                }
                            </> 
                        } 
                    </Editor>
                </SharedContent>
                <SharedCreation>
                   <CustomButtons> 
                        <AssetButton onClick={()=>switchAssetArea("image")}>
                        <img src="/images/icon-gallery.svg" alt=""/>
                        </AssetButton>
                        <AssetButton onClick={()=>switchAssetArea("media")}>
                        <img src="/images/youtube.svg" alt=""/>
                        </AssetButton>
                   </CustomButtons>
                <SharedComment>
                   <AssetButton>
                        <img src="/images/comment.svg" alt="" height="25" width="30"/> Anyone
                   </AssetButton>
                   </SharedComment>

                   <PostButton 
                    disabled={!editorText?true:false}
                    onClick={(event)=>postArticle(event)}
                    >
                       Post
                   </PostButton>
                </SharedCreation>
           </Content>
       </Container>
        }
       </>
    )
}


const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9000;
    color:black;
    background-color:rgba(0,0,0,0.8);
`;
const Content=styled.div`
    width:100%;
    max-width:552px;
    background-color:white;
    max-height:90%;
    overflow:initial;
    border-radius:5px;
    position: relative;
    display:flex;
    flex-direction:column;
    top:32px;
    margin:0 auto;
`;
const Header=styled.div`
    display:block;
    padding:16px 20px;
    border-bottom:1px solid rgba(0,0,0,0.1);
    font-size:16px;
    line-height:1.5;
    color:rgba(0,0,0,0.6);
    font-weight:400;
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        height:20px;
        width:20px;
        min-width:auto;
        border:none;
        border-radius:50%;
        background:url("/images/close-icon.svg");
        cursor: pointer;
        svg,img{
            height:30px;
            width:30px;
        }      
    }
`;
const SharedContent=styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    overflow-y:auto;
    vertical-align:baseline;
    background:transparent;
    padding:8px 12px;

`;
const UserInfo=styled.div`
    display:flex;
    align-items:center;
    padding:12px 24px;
    svg,img{
        width:48px;
        height:48px;
        background-clip:content-box;
        border:2px solid transparent;
        border-radius:50%;
    }
    span{
        font-weight:600;
        font-size:16px;
        line-height:1.5;
        margin-left:5px;
    }
`;
const SharedCreation=styled.div`
    display:flex;
    justify-content:space-between;
    padding:12px 24px 12px 16px;
`;

const AssetButton=styled.button`
    height:40px;   
    display:flex;
    align-items:center;
    border-radius:5px;
    border:transparent;
    background:transparent;
    &:hover{
        background-color:#E5E4E2;
    }
    &:active{
        background-color:#4FFFFF;
    }
`;
const CustomButtons=styled.div`
    align-items:center;
    display:flex;
    margin-right:8px;
    ${AssetButton}{
        width:40px;
    }
`;
const SharedComment=styled.div`
    padding-left:8px;
    margin-right:auto;
    border-left:1px solid rgba(0,0,0,0.4);
    ${AssetButton}{
        svg,img{
            margin-right:5px;
        }
    }
`;
const PostButton=styled.button`
    min-width:60px;
    border-radius:25px;
    border:transparent;
    color:white;
    background-color:#22bfa0;
    &:active{
        background-color:#069176;
    }
   
`;
const Editor=styled.div`
padding:12px 24px;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
    
    background-color:rgba(0,0,0,0.03);
}
input{
    width:100%;
    height:35px;
    font-size:16px;
    margin-bottom:20px;
}

`;
const UploadImg=styled.div`
    text-align:center;
    Label{
        padding:2px 8px;
        border-radius: 5px;
        border:1px solid rgba(0,0,0,0.6);
        background-color: #c0ebe2;
        &:active{
            background-color: #0ac49d;
        }
    }
    img{
        width:100%;
    }
`;
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    };
  };
const mapDispatchToProps=(dispatch)=>({
    postArticle:(payload)=>dispatch(newPostAPI(payload)),
    
});
export default connect(mapStateToProps,mapDispatchToProps)(PostModal);