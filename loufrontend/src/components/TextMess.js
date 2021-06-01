import { Avatar } from '@material-ui/core'
import React from 'react'
import{connect} from'react-redux'
import"./text.css"
function TextMess({id,email,message,photo,displayName,uid,timestamp,logged}) {  
    
    return (    
        <div className={`message ${logged===email && "message_sender"}`}>
                   
            <Avatar className="message_photo" src={photo} />
            <span className="sender">{displayName}</span>
            <p>
               
                {message}
             
            </p>
            <small>  {timestamp?.toDate().toLocaleTimeString()}  <br/>        
            {timestamp?.toDate().toDateString()} 
            </small>
            
     
        </div>   
    )
}


const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
       
    };
  };
;
export default connect(mapStateToProps)(TextMess);
