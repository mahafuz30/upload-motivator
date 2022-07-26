import React, { Component } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import FormFieldGenerator from "../components/FormFieldGenerator";
import FormHeader from "../components/FormHeader";
import Header from "../components/Header";
import ImageHandeler from "../components/ImageHandeler";
import ReminderModal from "../components/ReminderModal";
import { PriceSizeInventory, ProductDetails, OtherAttributes } from "../Utils/DummyFormData";
const ProductDescForm = ()=>{
    return (
      <>
      <Container direction="vertical" gap={1}>
        <Header hideButton={true} />
        <Form>
          <Stack style={{ marginTop: 20 }}>
            <ImageHandeler/>
            <FormFieldGenerator
              formField={PriceSizeInventory}
              text={"Price, Size and Inventory"}
            />

            <FormFieldGenerator
              formField={ProductDetails}
              text={"Product Details"}
            />
            <FormFieldGenerator
              formField={OtherAttributes}
              text={"Other Attributes"}
            />
          </Stack>
        </Form>
        <ReminderModal />
      </Container>
      </>

    );
}

export default ProductDescForm;
