import React, { Component, useContext, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaDna, FaImages , FaCoins } from "react-icons/fa";
import { ProductDescContext } from '../context/ProductDescContext';
import Progress from './ProgressBar';
import { Link, useNavigate } from 'react-router-dom';




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

        <h5>your coins <span style={{color:'gold'}} > <FaCoins /> 150 </span> </h5>
        <br></br>

        <p> progress on product </p>
        <Progress numberOfUpload="1" maxUpload="5" />
        <br />

        <br />
        <h4>Why should you add more Images/other atrributes?</h4>
        <p>
        User will have ease to view the multiple images and detailed description that will help to choose better product from best supplier according to rating or incentive as a metric.
        </p>
        <br></br>

        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >

          <Link to="/addProduct" onClick={props.onHide}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <FaImages style={{ margin: 'auto' }} />
              <h5 style={{ margin: 'auto' }}>Add Images</h5>
            </div>
          </Link>
          <Link to="/addProduct" onClick={props.onHide}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <FaDna style={{ margin: 'auto' }} />
              <h5 style={{ margin: 'auto' }}>Add more Info</h5>
            </div>
          </Link>

        </Container>



      </Modal.Body>
      <Modal.Footer>
        <Link to="/congrats">
          <Button style={{ backgroundColor: 'rgb(233, 30, 99)', color: 'white' }}>skip</Button>
        </Link>

      </Modal.Footer>
    </Modal>
  );
}

const ReminderModal = () => {

  const {modalShow, handelSubmit, setModalShow} = useContext(ProductDescContext);

  return (
    <>
      <Button variant=""   onClick={handelSubmit} style={{marginLeft:'600px', backgroundColor:'rgb(233, 30, 99)', color:'white'}}>
        Continue
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ReminderModal;