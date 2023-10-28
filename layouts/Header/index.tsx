import React, { useState } from 'react';
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';



const LOGO_SEARCH= 'assets/icon/normal_search_icon.svg';


function Header({ show, handleClose }) {
 

  return (
   <>
   <Offcanvas className={styles.header} show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.link} closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Control
        type="string"
        placeholder="Procure por leilão, lote, raça ou código" 
      />

<ListGroup  className={styles.links}  variant="flush">
      <ListGroup.Item className={styles.link} action href="#link1">Home</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Leilões</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Venda seu cavalo</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Noticias</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Sobre</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Contato</ListGroup.Item>
    </ListGroup>


        </Offcanvas.Body>
      </Offcanvas></>  
  );
}

export default Header;
