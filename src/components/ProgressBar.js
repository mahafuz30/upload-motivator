import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Progress = ({numberOfUpload,maxUpload}) => {

    const [percent , setPercent] = useState(numberOfUpload*100/maxUpload);
    const [fill , setFill] = useState(percent);
    console.log(percent);
    return <ProgressBar now={fill} variant="danger" />;

}

export default Progress;