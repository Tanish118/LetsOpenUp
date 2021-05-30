import React from 'react'
import styled from'styled-components'
function Default() {
    return (
        <Container>
            
        </Container>
    )
}

export default Default


const Container=styled.div`
     background: url("/images/default.jpg"); background-repeat: no-repeat;background-size: 100% 100%;
  
  background-position: center;
     display: flex;
    flex-direction: column;
    flex:0.65;
    height:89vh;
`;