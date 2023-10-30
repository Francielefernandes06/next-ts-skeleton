import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

import styles from '../styles.module.scss';



const subtitle = `${styles.subtitle} mb-2 text-muted`;

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

const customCard = `${styles.customCard} card rounded-0`;

function Auctions() {
  return (
    <div className="container">
      <h2 className="fw-bolder mt-4 mb-4">Leilões por raça</h2>
      <div className="row">
        {auctionsData.map((auction, index) => (
          <div key={index} className="mt-3 col-6">
            <div className={customCard} style={{ width: '100%', minHeight: '6.5rem',backgroundColor:'#d7d7d7' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="fs-6">{auction.title}</h5>
                    <p className={subtitle}>{auction.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auctions;
