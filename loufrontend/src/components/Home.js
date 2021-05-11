import React from 'react'
import styled from'styled-components'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'




function Home(props) {
    return (
     <Container>
         <Section>
             <h5>
                 <a>Hiring in a hurry?-</a></h5>
                 <p>Find Talented in record and keep it moving</p>
             
         </Section>
         <Layout>            
               <Leftside/>            
                <Main/>            
               <Rightside/>            
         </Layout>

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
const Layout=styled.div`
    display:grid;
    grid-template-areas:"left main right";
    grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap:25px;
    row-gap:25px;  
    margin:25px 0;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        padding:0 5px;
    }
`;

