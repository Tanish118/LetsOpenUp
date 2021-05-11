import React from 'react'
import styled from'styled-components'

function Home(props) {
    return (
     <Container>
         <Section>
             <h5>
                 <a>Hiring in a hurry?-</a></h5>
                 <p>Find Talented in record and keep it moving</p>
             
         </Section>

     </Container>
    )
}

export default Home
const Container=styled.div`
    padding:52px;
    max-width:100%;

`;
const Content=styled.div`
max-width:1128px;
margin-left:auto;
margin-right:auto;
`;
const Section=styled.div`
min-height:50px;
padding :16px 0;
box-sizing:content-box;
text-align:center;
text-decoration:underline;
display:flex;
justify-content:center;
h5{
    color:blue;
    font-weight:700px;
}
p{
    font-size:16px;
    color:#434649;
    font-weight:600px;
}
@media(max-width:768px){
    flex-direction:column;
    padding:0 5px;
}

`;