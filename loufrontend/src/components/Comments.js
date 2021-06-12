import React from 'react'
import styled from'styled-components'
import { Avatar } from '@material-ui/core'
import"./Comments.css"
function Comments() {
    return (
        <Container>
              <div className='Comment'>
                   
                   <Avatar className="message_photo"  />
                   <span className="sender">name</span>
                   <p>
                      
                       comment
                    
                   </p>
               </div>   
           
        </Container>
    )
}

const Container=styled.div`

`;
export default Comments
