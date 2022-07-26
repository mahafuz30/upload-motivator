import React, { Component } from 'react'
import {Navbar,Container, Nav, Button} from 'react-bootstrap'
import MeeshoLogo from '../Images/Meesho.png'

export default class Header extends Component {
  render() {
    return (
      <Navbar fixed='top' expand="lg">
        <Container>
          <Navbar.Brand href='#' style={{marginRight:"auto"}}>
            <img
            src={MeeshoLogo}
            height="30"
            alt="Meesho LOGO"
            />
          </Navbar.Brand>

          <Button variant='light' href='#'>
            Add Product
          </Button>

        </Container>
      </Navbar>
    )
  }
}
