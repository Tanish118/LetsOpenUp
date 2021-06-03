import React from 'react'
import {useState,useEffect} from'react'
import styled from'styled-components'
import{Redirect} from'react-router-dom'
import {connect} from 'react-redux'
import {getArticlesAPI} from '../actions'
import UserPost from './UserPost'
 function Userprofile(props){
    useEffect(()=>{
        props.getArticles();
    },[]);
    return (
            
        <div style={{maxWidth:"900px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"70px 0px",
                borderBottom:"1px solid grey",
                bottom: 0,
                top:0,
                right:0,
                left:0,
                content: '',
            }}>
                <div>
                    {props.user && <img style={{width:"180px",height:"180px",borderRadius:"90%"}}
                    src={props.user.photoURL}/>}
                </div>
                <div>
                    <div>{props.user && <p className="picture">{props.user.displayName} </p>}                    
                    <Editbutton><center>Edit Profile </center></Editbutton>
                    </div>
                   
                    <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"110%",
                    
                }} >
                        <p>5 posts</p>
                        <p>64 followers</p>
                        <p>67 following</p>
                    </div>
                  {props.user && <h3 style={{padding:10}}>{props.user.displayName} </h3>}
                   <p style={{width:300}}>Sometimes you'll never know the value of that moment ,until it becomes memory.</p>  
                </div>
            </div>          
                {   props.articles.length>0 &&
                    props.articles.map((article,key)=>(
                <Article key={key}>               
                    <SharedImg>
                       
                            {  props.user.email==article.actor.description &&  <img src={article.sharedImg} alt=""/> 
                            }  
                            
                       
                    </SharedImg>  
                </Article> 
                    ))}         
            </div>
    )

}
const CommonCard=styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Article=styled(CommonCard)`
    
    padding:0;
    margin:5px 0 8px;
    overflow:visible;

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
padding :0px;
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

    