import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

import styles from '../styles.module.scss';

const auctionsData = [
  {
    title: 'Appaloosa',
    subtitle: '1 leilões',
  },
  {
    title: 'Brasileiro de Hipismo',
    subtitle: '2 leilões',
  },
  {
    title: 'Paint Horse',
    subtitle: '3 leilões',
  },
  {
    title: 'Quarto de milha',
    subtitle: '4 leilões',
  },

];

function Auctions() {
  return (
    <Container>
      <h2 className="fw-bolder mt-4 mb-4">Leilões por raça</h2>
      <Row>
        {auctionsData.map((auction, index) => (
          <Col key={index} xs={6} className="mt-3">
            <Card className={styles.customCard} style={{ width: '100%', minHeight: '6.2rem' }}>
              <Card.Body>
                <Row>
                  <Col xs={12}>
                    <Card.Title className="fs-6">{auction.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{auction.subtitle}</Card.Subtitle>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Auctions;
