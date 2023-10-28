import React from 'react';
import styles from './styles.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconName } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';



function Footer() {
  return (
    <Container >
      <Row className={styles.footer}>

      <Accordion defaultActiveKey="" flush>
      <Accordion.Item className={styles.footerLink}  eventKey="0">
        <Accordion.Header style={{backgroundColor: '#37406d'}}>Mapa do site</Accordion.Header>
        <Accordion.Body>
        <ListGroup  className={styles.links}  variant="flush">
      <ListGroup.Item className={styles.link} action href="#link1">Home</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Leilões</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Venda seu cavalo</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Noticias</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Sobre</ListGroup.Item>
      <ListGroup.Item className={styles.link}>Contato</ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className={styles.footerLink} eventKey="1">
        <Accordion.Header>Contatos</Accordion.Header>
        <Accordion.Body >
        <p className={styles.contact}>(11) 4858-5115 (Escritório)
</p>
<p className={styles.contact}>
(15) 98177-4112 ( Carlos Santana)
 </p>
<p className={styles.contact}>
(11) 99669-9022 ( Freitas Neto) </p>
<p className={styles.contact}>
 contato@opportunityleiloes.com.br
 </p>
<p className={styles.contact}>
-
</p>
<p className={styles.contact}>
Rua Fradique Coutinho 50 - 3º Andar - Cj 32  Pinheiros - São Paulo/SP - CEP 05416-010 | </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Row className={styles.icons}>
        <Col>
     Instagram
        </Col>
        <Col>Youtube</Col>
        <Col>Facebook</Col>
      </Row>
      </Row>
      <Row className={styles.footerInfo}>
        <h6>Opportunity Organizacão de Leilões Eireli
</h6>
<p>CNPJ 33.034.852/0001-59</p>

<p className={styles.footerInfoItalico}>© 2023 - Todos direitos reservados.</p>
      </Row>

      

    </Container>

  );
}

export default Footer;
