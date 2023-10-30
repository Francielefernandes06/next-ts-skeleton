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

    <div className="container mb-5">
      <h2 className="fw-bolder mt-5 mb-4">Nossos Contatos</h2>
      <div className="card" >
         <ul className="list-group list-group-flush">
             <li className="list-group-item p-3">
              <p> <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon me-2" />  (11) 4858-5115 (Escritório)</p>
              <p>  <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon me-2" /> (15) 98177-4112 ( Carlos Santana)</p>
              <p>  <Image src={PHONE} 
          alt="Menu Icon"
          className="menu-icon me-2" /> (11) 99669-9022 ( Freitas Neto)</p>
             </li>
      <li className="list-group-item p-3">   <p>
      <Image src={MAIL} 
          alt="Menu Icon"
          className="menu-icon me-2" />
        contato@opportunityleiloes.com.br</p></li>
    <li className="list-group-item">
      <ul className="list-group d-flex flex-row justify-content-around mt-2">
            <li className="list-group-item border border-0 bg-transparent
 d-flex align-items-center">
              <i className="bi bi-instagram  me-2"> </i>Intagram
            </li>
            <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
              <i className="bi bi-youtube me-2"> </i>Youtube
            </li>
            <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
              <i className="bi bi-facebook me-2"> </i>Facebook
            </li>
          </ul>
    </li>
  </ul>
</div>
      
    
     
    
    </div>
  );
}

export default CardContato;