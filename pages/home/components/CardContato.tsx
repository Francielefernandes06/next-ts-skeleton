import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
const HORSE = 'assets/img/u1.png'
const PHONE = 'assets/icon/phone.svg'
const MAIL = 'assets/icon/mail.svg'
const PIN = 'assets/icon/pin.svg'

function CardContato() {
  return (
    <Container className="mt-5 mb-4">
      <h2 className="fw-bolder mt-5 mb-4">Nossos Contatos</h2>
      <Card style={{ boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.35)' }}>

        <Card.ImgOverlay>
        </Card.ImgOverlay>
        <Card.Body style={{backgroundColor: '#D8D8D8'}}  className="d-flex align-items-center">
          <Card.Text>

          <Row >
        <Col xs={1}>
        <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon" /> 
        </Col>
        <Col xs={11}><p  className="text-left" > (11) 4858-5115 (Escritório)</p></Col>
       
      </Row>
      <Row >
        <Col xs={1}>
        <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon" /> 
        </Col>
        <Col xs={11}><p  className="text-left" > (15) 98177-4112 ( Carlos Santana)</p></Col>
       
      </Row>
      <Row >
        <Col xs={1}>
        <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon" /> 
        </Col>
        <Col xs={11}><p  className="text-left" > (11) 99669-9022 ( Freitas Neto)</p></Col>
       
      </Row>
          <hr/>
          <Row >
        <Col xs={1}>
        <Image src={MAIL} 
          alt="Menu Icon"
          className="menu-icon" /> 
        </Col>
        <Col xs={11}><p  className="text-left" > contato@opportunityleiloes.com.br</p></Col>
       
      </Row>
          
           <hr/>

          <Row >
        <Col xs={1}>
        <Image src={PIN} 
          alt="Menu Icon"
          className="menu-icon" />
        </Col>
        <Col xs={11}><p  className="text-left" >  Rua Fradique Coutinho 50 - 3º Andar - Conjunto 32 - Pinheiros - São Paulo/SP
          CEP 05416-010</p></Col>
       
      </Row>
{/* <p  className="text-left" ><Image src={PIN} 
          alt="Menu Icon"
          className="menu-icon" />  Rua Fradique Coutinho 50 - 3º Andar - Conjunto 32 - Pinheiros - São Paulo/SP
          CEP 05416-010</p> */}

          <hr/>

          <Row >
        <Col>
     Instagram
        </Col>
        <Col>Youtube</Col>
        <Col>Facebook</Col>
      </Row>


          </Card.Text>
          
          
        </Card.Body>
      </Card>
   
     
    
    </Container>
  );
}

export default CardContato;