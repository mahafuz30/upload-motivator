import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormHeader from "./FormHeader";

export default function FormFieldGenerator({ formField , text}) {
  return (
    <Container>
        <FormHeader
        text={text}
        />
        <Row  style={{marginTop:10}} lg={"2"} sm={"1"} md={"2"} xl={"2"} xs={"1"}>
          {formField.map((value, idx) => (
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column>
                  {value.name}
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder={value.name} required={value.require}/>
                </Col>
                <Form.Text muted={true} >
                    {value.desc}
                </Form.Text>
              </Form.Group>
            </Col>
          ))}
        </Row>
    </Container>
  );
}
