import React,{useContext} from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormHeader from "./FormHeader";
import {ProductDescContext} from '../context/ProductDescContext'

const handelCoinUpdate = (e)=>{
  console.log(e.target.value);
}

export default function FormFieldGenerator({ formField, text }) {
  const {setCoins} = useContext(ProductDescContext)
  return (
    <Container>
      <FormHeader text={text} />
      <Row
        style={{ marginTop: 10 }}
        lg={"2"}
        sm={"1"}
        md={"2"}
        xl={"2"}
        xs={"1"}
      >
        {formField.map((value, idx) => {
          return (
            <Col key={idx}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column>{value.name} {value.require?<span style={{color:"red"}}>*</span>:null}</Form.Label>
                <Col>
                  {value.type === "select" ? (
                    <Form.Select
                    onChange={handelCoinUpdate}
                    >
                      <option>Select {value.name}</option>
                      {value.option.map((option,idx)=>(
                        <option>{option}</option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type={value.type}
                      placeholder={value.name}
                      required={value.require}
                      onChange={handelCoinUpdate}
                    />
                  )}
                </Col>
                <Form.Text muted={true}>{value.desc}</Form.Text>
              </Form.Group>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
