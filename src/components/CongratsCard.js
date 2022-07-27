import Progress from './ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CongratsCard() {
  return (
    <Card className="text-center" style={{marginTop:'200px'}} >
      <Card.Header style={{color:'goldenrod', fontSize:'250%'}}>Awesome</Card.Header>
      <Card.Body>
        <Card.Title>Your overall progress</Card.Title>
        <Progress numberOfUpload = "1" maxUpload = "5" />
        <Card.Text>
          You earned <span style={{color:'goldenrod'}}>150 Ad Coins</span>
        </Card.Text>
        <Button variant="danger">Upload more</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Keep uploading to get more rewards</Card.Footer>
    </Card>
  );
}

export default CongratsCard;