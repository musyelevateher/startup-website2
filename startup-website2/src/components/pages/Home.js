import react from "react";
import Navbar from '../Navbar';
import Herosection from '../Herosection';
import Service from '../Service';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Service />
      <Footer />
    </div>
    );
}
 
export default Home;