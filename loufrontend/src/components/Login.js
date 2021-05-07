import React from 'react'
import styled from'styled-components'
function Login(props) {
    return (
        <Container>
            <Nav>
                <a href="/">
                <img src='/images/login-logo.svg' alt=""/>
                </a>
                <div>
                    <Join> Join Now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <IMG>
                <h1>Welcome To #LetsOpenUp</h1>
                <img src=""/></IMG>
            </Section>
        </Container>
    )
}

export default Login
const Container=styled.div`
padding :0px;
`
const Nav= styled.div`
    max-width:1128px;
    margin:auto;
    padding :12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;
    & > a{
        width:135px;
        height:34px;
        @media(max-width:768px){
            padding:0 5px;
        }
    }
`;
const Join=styled.a`
    font-size: 16px;
    padding:10px 12px;
    text-decoration:none;
    cursor: pointer;
    color:rgba(0,0,0,6);
    border:none;
    margin:12px;
    border-radius:4px;
    &:hover{
        background-color:rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
        text-decoration:none;
    }
`;
const SignIn=styled.a`
    box-shadow:inset 0 0 0 1px #0a66c2;
    color:#0a66c2;
    border-radius:16px;
    transition-duration:250ms;
    font-weight:600;
    line-height:40px;
    padding:10px 24px;
    text-align:center;
    &:hover{
        background-color:#0a66c2;
        color:white;
        text-decoration:none;
    }
`;
const Section=styled.div`
align-content:start;
display:flex;
min-height:700px;
padding-bottom:130px;
padding-top:40px;
padding:60px 0;
position:relative;
flex-wrap:wrap;
width:100%;
max-width:1128 px;
align-items:center;
@media(max-width:768){
    margin:auto;
    min-height:0px;
}
`;
const IMG=styled.div`
`;