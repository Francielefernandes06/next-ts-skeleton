import Navbar  from '@/components/Navbar/index';
import Footer  from '@/layouts/Footer/index';


const DefaultLayout = ({ children }) => {

  return (
    <div>
      <Navbar/>
      
      
      {children}

      <Footer/>
    </div>
  );
};

export default DefaultLayout;
