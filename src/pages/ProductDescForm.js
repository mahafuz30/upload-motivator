import React, { Component } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import FormFieldGenerator from "../components/FormFieldGenerator";
import FormHeader from "../components/FormHeader";
import Header from "../components/Header";
import ImageHandeler from "../components/ImageHandeler";
import { PriceSizeInventory } from "../Utils/DummyFormData";

export default class ProductDescForm extends Component {
  render() {
    return (
      <Container direction="vertical" gap={1}>
        <Header hideButton={true} />
        <Form>
          <Stack style={{ marginTop: 100 }}>
            <ImageHandeler/>
            <FormFieldGenerator
              formField={PriceSizeInventory}
              text={"Price, Size and Inventory"}
            />

            <FormFieldGenerator
              formField={PriceSizeInventory}
              text={"Product Details"}
            />
            <FormFieldGenerator
              formField={PriceSizeInventory}
              text={"Other Attributes"}
            />
          </Stack>
        </Form>
      </Container>
    );
  }
}
