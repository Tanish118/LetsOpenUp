import React from 'react'
import styled from 'styled-components'
function Main(props) {
    return (
        <Container>
            <Sharebox>
                Share
            </Sharebox>
        </Container>
    )
}

export default Main
const Container=styled.div`
grid-area:main;
`;
const CommonCard=styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Sharebox=styled(CommonCard)`
    display:flex;
    flex-direction:column;
    color:grey;
    margin:0 0 0px;
`;