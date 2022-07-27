import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Progress = (props) => {

    const [percent , setPercent] = useState(props.numberOfUpload*100/props.maxUpload);
    const [fill , setFill] = useState(percent);

    console.log(percent);
    return <ProgressBar now={fill} variant="danger" />;

}

export default Progress;