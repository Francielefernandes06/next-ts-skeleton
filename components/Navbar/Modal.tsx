import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const BRA = 'assets/icon/brazil.svg'
const EUA = 'assets/icon/eua.svg'
const SPA = 'assets/icon/spa.svg'

function ModalLang(props) {


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton style={{backgroundColor:'#37406d', color: '#fff'}}>
      <Modal.Title id="contained-modal-title-vcenter text-white" >
       Idioma/Language
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup variant="flush">
      <ListGroup.Item> <Image src={BRA} width={50} className="me-3"
          height={50} fluid />Português</ListGroup.Item>
      <ListGroup.Item> <Image src={EUA} width={50} className="me-3"
          height={50} />English</ListGroup.Item>
      <ListGroup.Item> <Image src={SPA} width={50} className="me-3"
          height={50} /> Espanõl</ListGroup.Item>
    
    </ListGroup>
    </Modal.Body>
   
  </Modal>
  );
}

export default ModalLang;
