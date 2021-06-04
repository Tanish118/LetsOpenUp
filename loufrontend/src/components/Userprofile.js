import React from 'react'
import {useEffect} from'react'
import styled from'styled-components'
import ReactPlayer from'react-player'
import {connect} from 'react-redux'
import {getArticlesAPI} from '../actions'

 function Userprofile(props){
    useEffect(()=>{
        props.getArticles();
    },[]);
    return (
            
        <Container>
         <HeaderWrap>
                <Userpic>
                    {props.user && <img 
                    src={props.user.photoURL}/>}
                </Userpic>
                <div>
                    <div>{props.user && <p className="picture">{props.user.displayName} </p>}                    
                    <Editbutton><center>Edit Profile </center></Editbutton>
                    </div>
                   
                    <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"110%",
                    
                }} >
                        {/* <p>5 posts</p> */}
                        <p>64 followers</p>
                        <p>67 following</p>
                    </div>
                  {props.user && <h3 style={{padding:10}}>{props.user.displayName} </h3>}
                   <p style={{width:300}}>Sometimes you'll never know the value of that moment ,until it becomes memory.</p>  
                </div>
                </HeaderWrap>   
                <Content>    
                {   props.articles.length>0 &&
                    props.articles.map((article,key)=>(
                    <center>
                    {props.user.email==article.actor.description&&
                    <SharedImg key={key}>
                        {  article.video? <ReactPlayer width={"100%"} url={article.video}/>
                                :<img src={article.sharedImg} alt=""/>                                
                               
                            }
                    </SharedImg> 
                    }
                    </center>  
                    ))}  
                    </Content>         
           </Container>
    )

}
const Content=styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(2,minmax(0,1fr));
`
const Userpic=styled.div`
    &>img{
        width:180px;
        height:180px;
        border-radius:90%;
        @media (max-width: 768px) {
            width:100px;
        height:100px;
        }
    }
`;
const HeaderWrap=styled.div`
    display:flex;
    justify-content: space-around;
    margin:70px 0;
    border-bottom:2px solid gray;
`;

const SharedImg=styled.div` 
    border-radius:10px;
     margin-bottom:25px;
    background-color: black;
    overflow:hidden;
    cursor:pointer; 
    width:25vw; max-height:30vh;min-height:30vh;
   
    border:3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94)0s;
   
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform :scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
    img{
        object-fit:contain;
        width:100%;
        max-height: 500px;
        @media (max-width: 768px) {
            max-height: 400px;
        }
    }
`;
const Editbutton=styled.div`
    border:2px solid #2222a1;
    border-radius:8px;
    align-items:center;
    padding: 5px 20px;
    margin-top:10px;margin-bottom:10px; background-color:#6fbdae; color:white;
    cursor: pointer;
    &:hover{
        background-color:#22bfa0; 
    }
`;

const Container=styled.div`
    max-Width:900PX;
    margin: auto;
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
export default connect(mapStateToProps,mapDispatchToProps)(Userprofile);

    