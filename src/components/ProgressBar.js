import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Progress = (props) => {


    const [fill , setFill] = useState(50);
    return <ProgressBar now={fill} />;
}

export default Progress;