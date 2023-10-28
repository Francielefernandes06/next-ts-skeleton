
import Footer from "@/layouts/Footer/index";
import Head from "next/head";
import Link from "next/link";
import Navbar  from '@/components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home/index';

const App = () => {
  return (
    <>
      <Head>
          <title>Home page</title>
          <meta name="description" content="Home page content description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
      
      
     
      
     
    </>
  );
}

export default App;
