
import Footer from "@/layouts/Footer/index";
import Head from "next/head";
import Link from "next/link";
import Navbar  from '@/components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.css';
import ControlledCarousel from './components/ControlledCarousel';
import Auctions from './components/Auctions';
import CardsHome from './components/CardsHome';
import CardContato from './components/CardContato';

const Home = () => {
  return (
    <>
     <ControlledCarousel/>

     <Auctions/>

     <CardsHome/>

     <CardContato/>
     
    </>
  );
}

export default Home;
