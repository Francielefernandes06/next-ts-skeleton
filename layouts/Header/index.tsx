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
      <ListGroup.Item className={styles.link} action href="#link1">Home <i className="bi bi-chevron-right"></i>
</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Leilões <i className="bi bi-chevron-right"></i></ListGroup.Item>
      <ListGroup.Item className={styles.link}>Venda seu cavalo<i className="bi bi-chevron-right"></i> </ListGroup.Item>
      <ListGroup.Item className={styles.link}>Noticias <i className="bi bi-chevron-right"></i></ListGroup.Item>
      <ListGroup.Item className={styles.link}>Sobre <i className="bi bi-chevron-right"></i></ListGroup.Item>
      <ListGroup.Item className={styles.link}>Contato <i className="bi bi-chevron-right"></i></ListGroup.Item>
    </ListGroup>


        </Offcanvas.Body>
      </Offcanvas></>  
  );
}

export default Header;
