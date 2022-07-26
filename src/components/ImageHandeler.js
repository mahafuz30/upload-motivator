import React, { useRef } from "react";
import { Container, InputGroup, Form, Button} from "react-bootstrap";

export default function ImageHandeler() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
      };
  return (
    <Container>
        <Button  onClick={handleClick}/>
    </Container>
  );
}
