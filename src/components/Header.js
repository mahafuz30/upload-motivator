import React, { Component } from 'react'
import {Navbar,Container, Button} from 'react-bootstrap'
import MeeshoLogo from '../Images/Meesho.png'
const Header = ({hideButton})=> {
    return (
      <Navbar fixed='top' expand="lg">
        <Container>
          <Navbar.Brand href='/' style={{marginRight:"auto"}}>
            <img
            src={MeeshoLogo}
            height="30"
            alt="Meesho LOGO"
            />
          </Navbar.Brand>

          <Button hidden={hideButton} variant='light' href='/addProduct'>
            Add Product
          </Button>

        </Container>
      </Navbar>
    )
}

export default Header;
