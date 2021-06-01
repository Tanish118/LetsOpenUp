import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from'styled-components'
import { selectCameraImage } from '../reducers/cameraSlice';
import { useHistory } from 'react-router';
function Preview() {
    const cameraImage=useSelector(selectCameraImage);
    const history=useHistory();
    useEffect(()=>{
        if(!cameraImage)
        {
            history.replace('/video');
        }
    },[cameraImage,history])
    return (
        <Container>
            <h2>preview</h2>
            
            <img src={cameraImage} alt=""/>
        </Container>
    )
}
const Container=styled .div`
   margin-top:65px;
   display:flex;
`;

export default Preview
