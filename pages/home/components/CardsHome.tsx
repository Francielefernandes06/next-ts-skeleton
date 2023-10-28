import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const HORSE = 'assets/img/u1.png'
const STREAMING = 'assets/icon/normal_streaming.svg'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const PREV = 'assets/icon/prev.svg'
const NEXT = 'assets/icon/next.svg'
import styles from '../styles.module.scss';
import CarouselWithAutoSlide from '../../../components/Carousel/index';

const cardData = [
  {
    title: '2º LEILÃO VIRTUAL COWBOYS COMPANY',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Appaloosa', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
  {
    title: '2º LEILÃO VIRTUAL COWBOYS TESTE',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Paraíba', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
  {
    title: '2º LEILÃO VIRTUAL COWBOYS TESTE',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Paraíba', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
];

function CardComponent({ data }) {
  return (
    <Container>
    
      <Card style={{ boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.35)' }}>

        <Card.Img variant="top" src={HORSE} />
        <Card.ImgOverlay>
        </Card.ImgOverlay>
        <Card.Body style={{backgroundColor: '#D8D8D8'}}  className="d-flex justify-content-center  align-items-center">
          <Card.Text>
            <h4 className="fw-bolder text-center mt-2 mb-2">{data.title}</h4>
            <p  className="text-center"><Image  src={STREAMING} 
          alt="Menu Icon"
          className="menu-icon"  /> <strong>Transmissão:</strong> {data.streamingDate}</p>

<Card className="mb-3">
      <Card.Body >
      <Row>
      <Col xs={4} className="d-flex justify-content-center align-items-center" >
      <Card.Text style={{ fontSize:'13px' }}>
     
      <strong>Pré-lances:</strong>
      </Card.Text>
      </Col>
      <Col xs={8} >
      <Row>
      <Card.Text style={{ borderLeft: '5px solid #63a103', fontSize:'13px' }}>
      <strong>Início:</strong> {data.preBidsStart}
      </Card.Text>
      </Row>
      <br/>
       <Row>
       <Card.Text  style={{ borderLeft: '5px solid #910012' , fontSize:'13px' }}>
       <strong>Término: </strong> {data.preBidsEnd}
      </Card.Text>
      </Row>
      </Col>
      </Row>
     
        
        
       
      </Card.Body>
    </Card>
    <Row className="d-flex justify-content-around">
            <Stack style={{ display: 'flex', justifyContent: 'space-around' }} direction="horizontal" gap={2}>
              {data.breeds.map((breed, index) => (
                <Badge bg="light" text="dark" key={index}>
                  {breed}
                </Badge>
              ))}
            </Stack>
          </Row>
     
          </Card.Text>
          
        </Card.Body>
      </Card>
   
     
    
    </Container>
  );
  }

function CardsHome() {
  return (
    <div>
      <h2 className="fw-bolder ms-3 mt-4 mb-4">Próximos leilões</h2>
      <CarouselWithAutoSlide cardData={cardData} CardComponent={CardComponent} />
      
      </div>
  );
}

export default CardsHome;