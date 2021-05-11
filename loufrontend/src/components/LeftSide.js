import React from 'react'
import styled from'styled-components'
function Leftside(props) {
    return (
        <Container>
           this is changes made on your left
        </Container>
    )
}

export default Leftside;
const Container=styled.div`
grid-area:left;
`;