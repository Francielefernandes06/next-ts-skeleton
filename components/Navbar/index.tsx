// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Header from '../../layouts/Header/index';
import ModalLang from './Modal';


const LOGO_HEADER= 'assets/icon/menu_and_search_icon.svg'
const LOGO_OPPORTUNITY= 'assets/icon/opportunity_leil_es_logo.svg';
const LOGO_BRAZIL= 'assets/icon/brazil.svg';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light p-2">
      <div className="container">
      <img
          src={LOGO_HEADER} 
          alt="Menu Icon"
          className="menu-icon" 
          onClick={handleShow}
        />     


        <Image
          src={LOGO_OPPORTUNITY}
          alt="Opportunity Logo"
          width={100}
          height={50}
        />

<Image
          src={LOGO_BRAZIL}
          alt="Opportunity Logo"
          width={30}
          height={30}
          onClick={() => setIsModalOpen(true)}
        />
        
        <Link className="text-decoration-none text-break" href="/login">
        Entrar <br/>ou cadastrar
        </Link>
        <ModalLang show={isModalOpen} onHide={() => setIsModalOpen(false)} />
        <Header show={show} handleClose={handleClose} />
     
      </div>
    </nav>
  );
}

export default Navbar;
