import React, { Component, useContext, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaDna, FaImages } from "react-icons/fa";
import { ProductDescContext } from '../context/ProductDescContext';
import Progress from './ProgressBar';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add more fields/Images
        </Modal.Title>
      </Modal.Header>

      <Modal.Body >
        <p> progress on images </p>
        <Progress numberOfUpload = "1" maxUpload = "5" />
        <br />

        <p>progress on details</p>
        <Progress numberOfUpload = "2" maxUpload = "8" />
        
        <br />
        <h4>Why should you add more Images?</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>


        <Container style={{display:'flex' , flexDirection:'row', justifyContent:'space-evenly' }} >
          
          <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' }}>
          <FaImages style={{margin:'auto'}} />
          <h5 style={{margin:'auto'}}>Add Images</h5>
          </div>
          
          <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' }}>
          <FaDna style={{margin:'auto' }} />
          <h5 style={{margin:'auto'}}>Add more Info</h5>
          </div>

        </Container>
        


      </Modal.Body>
      <Modal.Footer>
        <Button style={{backgroundColor:'rgb(233, 30, 99)', color:'white'}} onClick={props.onHide}>skip</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ReminderModal = () => {

  const {modalShow, handelSubmit, setModalShow} = useContext(ProductDescContext);

  return (
    <>
      <Button variant=""   onClick={handelSubmit} style={{marginLeft:'600px', backgroundColor:'rgb(233, 30, 99)', color:'white'}}>
        continue
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ReminderModal;