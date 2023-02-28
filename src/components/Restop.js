import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { RxClock } from "react-icons/rx";
import { BsClockFill } from "react-icons/bs";


function Restop({op}) {
  console.log(op);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="warning" className='mt-4' onClick={handleShow}>
        Opening Times <RxClock className='ms-3'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours <BsClockFill className='ms-3'/> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday : {op.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {op.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {op.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thurday : {op.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {op.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {op.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {op.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop