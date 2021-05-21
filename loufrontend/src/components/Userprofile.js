import React from 'react'
import styled from'styled-components'
import{Redirect} from'react-router-dom'
import {connect} from 'react-redux'

 function profile(props){
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
            <div className="gallery">

                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  className="item" src="https://images.unsplash.com/photo-1621354236838-78d7d91dd908?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
              
            </div>
        </div>
    )

}
const Container=styled.div`
padding :0px;
`;

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    };
};
export default connect(mapStateToProps)(profile)

    