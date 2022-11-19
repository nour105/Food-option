import Image from 'next/image'
import Tabs from './Tabs';

function Us() {
    return (
       
        <div className='about-1' id='about'>
            <div  style={{ padding: '36px 50px 1px 50px ' }}>
                <Image src="/img.jpg" width="40" height="40" alt="img" />

                <h2 className='h2-about'>ABOUT US</h2>
                <p className='p-about'> Who We are </p>
            </div>
            <div className='section-2'>
                <p className='p2-about'>
                    Food Options was established in 2020 as a Saudi company that seeks to offer a <br /> unique
                    experience, pioneering in the food and beverage industry in the <br />  kingdom.
                    Food Options is entering the local and international market,
                    creating  <br /> more job opportunities achieving the Kingdoms Vision 2030.</p>
                <div>
                    <Image  className='burger'  src="/burger.png" width='200' height='200' alt="img " />
                </div>
            </div>
            <Tabs />
        </div>
       
    );
}  
export default Us;   