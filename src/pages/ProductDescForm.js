import React, { useContext } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import FormFieldGenerator from "../components/FormFieldGenerator";
import Header from "../components/Header";
import ImageHandeler from "../components/ImageHandeler";
import ReminderModal from "../components/ReminderModal";

import { ProductDescContextProvider, ProductDescContext} from "../context/ProductDescContext";
const ProductDescForm = () => {
  
  return (
    <ProductDescContextProvider>
      <FormContextHelper/>
    </ProductDescContextProvider>
  );
};

const FormContextHelper = ()=>{
  const {coins,formDataC,handelSubmit} = useContext(ProductDescContext);
  return(
    <Container direction="vertical" gap={1}>
        <Header hideButton={true} />
        <Form>
          <Stack style={{ marginTop: 20 }}>
            <ImageHandeler />
            {formDataC.map((value,idx)=>(
              <FormFieldGenerator
              key={idx}
              formField={value.data}
              text={value.formName}
            />
            ))}

          </Stack>
        </Form>
        <ReminderModal />
      </Container>
  )
}

export default ProductDescForm;
