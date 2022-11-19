import About from '../components/About'
import Brands from '../components/Brands'
import ContactSection from '../components/Contact';
import Link from 'next/link';
import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa'


function Home() {
  return (
    <div>
    <div style={{display: 'flex' }}>
      <div className='home1'
        style={{
          backgroundImage: `url(/bg.jpg)`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          padding: "233px 35px",
        }}>
        <div className='input11'>
          <h2 className='h2-class'> Good food choices are  <br/> good investments.
          </h2>
        </div>
        <div className='learnmore'>
          <a href="#">
            <div>
              <button className='button-2'>Learn More</button>
              <FaArrowRight  />
            </div>
          </a>
        </div>
      </div>
    </div>
    <About />
    <Brands />
    <ContactSection />
    </div>
    
  );
}
export default Home;