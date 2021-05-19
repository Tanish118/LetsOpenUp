import React from 'react'
import styled from "styled-components";

export default function profile(props){
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"70px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"180px",height:"180px",borderRadius:"90px"}}
                    src="https://images.unsplash.com/photo-1608127347890-3fd1d0323b3f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='stick'/>
                </div>
                <div>
                    <h1>banda allah ka</h1>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h5>50 posts</h5>
                        <h5>45 followers</h5>
                        <h5>40 following</h5>
                    </div>

                </div>
            </div>
            <Container>

                <img  src="https://images.unsplash.com/photo-1621324124020-fb7e2571a600?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  src="https://images.unsplash.com/photo-1621324124020-fb7e2571a600?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  src="https://images.unsplash.com/photo-1621324124020-fb7e2571a600?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
                <img  src="https://images.unsplash.com/photo-1621324124020-fb7e2571a600?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
              
            </Container>
        </div>

    )

}
const Container = styled.div`
display: flex;
flex-wrap: wrap;
/* justify-content: ; */
`

    