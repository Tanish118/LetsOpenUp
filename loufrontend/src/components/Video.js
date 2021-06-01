import React,{useRef,useCallback, useState} from 'react'
import Webcam from 'react-webcam'

import{IconButton} from'@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../reducers/cameraSlice';
import { useHistory } from 'react-router';
import"./video.css"
const videoConst={
    width:350,
    height:500,
    facingMode:"user",
}
function Video() {
    const webcamRef=useRef(null)
    const [image,setImage]=useState(null);
    const dispatch=useDispatch();
    const history=useHistory();
    const capture= useCallback(()=>{
        const imageSrc=webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
        console.log(imageSrc);       
        setImage(imageSrc);
    },[webcamRef])
    return (
        <div className="capture">
            
            <Webcam
                audio={false}
                height={videoConst.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConst.width}
                videoConstraints={videoConst}
            />
            <IconButton><RadioButtonUncheckedIcon className="cap_button" onClick={capture} fontSize="large"/></IconButton>
            {/* <img src={image} alt=""/> */}
           
            
          
        </div>
    )
}




export default Video
