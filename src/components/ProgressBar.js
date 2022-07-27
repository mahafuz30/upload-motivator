import { useState, useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ProductDescContext } from '../context/ProductDescContext';


const Progress = ({numberOfUpload,maxUpload}) => {
    const {coins} = useContext(ProductDescContext)
    const [percent , setPercent] = useState(coins.coinCount*100/coins.totalCount);
    const [fill , setFill] = useState(percent);
    console.log(percent);
    return <ProgressBar now={fill} variant="danger" />;

}

export default Progress;