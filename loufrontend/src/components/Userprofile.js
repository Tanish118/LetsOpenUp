import React from 'react'
import {useState,useEffect} from'react'
import styled from'styled-components'
import{Redirect} from'react-router-dom'
import {connect} from 'react-redux'
import {getArticlesAPI} from '../actions'
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
                    <img style={{width:"180px",height:"180px",borderRadius:"90%"}}
                    src="https://images.unsplash.com/photo-1617350697117-536a7e59a2cd?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5MHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='stick'/>
                </div>
                <div>
                    <div> <p className="picture"> Peter.mckinnon </p>
                    <button className='doll'>Edit profile</button></div>
                    <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"110%",
                    
                }} >
                        <p>5 posts</p>
                        <p>64 followers</p>
                        <p>67 following</p>
                    </div>
                   <h3 style={{padding:10}}>Peter mckinnon</h3>
                   <p style={{width:300}}>Sometimes you'll never know the value of that moment ,until it becomes memory.</p>  
                </div>
            </div>          
                {   props.articles.length>0 &&
                    props.articles.map((article,key)=>(
                <Article key={key}>   
                          {article.actor.description}
                    <SharedImg>
                        <a>
                            {  <img src={article.sharedImg} alt=""/>                                
                               
                            }
                           
                            
                        </a>
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
        max-height: 500px;
        @media (max-width: 768px) {
            max-height: 400px;
        }
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

    