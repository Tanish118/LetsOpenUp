import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from'styled-components'
import { resetCameraImage, selectCameraImage } from '../reducers/cameraSlice';
import { useHistory } from 'react-router';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import"./preview.css"
function Preview() {
    const dispatch=useDispatch();
    const cameraImage=useSelector(selectCameraImage);
    const history=useHistory();
    useEffect(()=>{
        if(!cameraImage)
        {
            history.replace('/video');
        }
    },[cameraImage,history]);
    const closePreview=()=>{
     dispatch(resetCameraImage);
     history.replace('/video');
    }
    return (
        <div className="preview">
          
            <CloseIcon onClick={closePreview} className="preClose"/>
            <img src={cameraImage} alt=""/>
        </div>
    )
}


export default Preview
