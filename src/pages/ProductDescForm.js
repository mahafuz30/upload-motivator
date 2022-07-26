import React, { Component } from 'react'
import { Container, Stack } from 'react-bootstrap'
import FormFieldGenerator from '../components/FormFieldGenerator'
import FormHeader from '../components/FormHeader'
import Header from '../components/Header'
import {PriceSizeInventory} from '../Utils/DummyFormData'


export default class ProductDescForm extends Component {
  render() {
    return (
      <Container direction='vertical' gap={1}>
        <Header
        hideButton={true}
      />
      <Stack style={{marginTop:100}}>
        <FormHeader
        text="Price, Size and Inventory"
        />
        <FormFieldGenerator 
          formField={PriceSizeInventory}
        />
        <FormHeader
        text="Price, Size and Inventory"
        />
      </Stack>

      </Container>
    )
  }
}
