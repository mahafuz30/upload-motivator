import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function FormFieldGenerator({ formField }) {
  return (
    <Container>
      <Form>
        <Row lg={"2"} sm={"2"} md={"2"} xl={"2"} xs={"2"}>
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
      </Form>
    </Container>
  );
}
