import Image from "next/image"
import img from "../public/logo.png"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaEnvelopeOpen } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import NewsletterForm from "./Newsletter"



function Footer() {
    return (
        <div className="Footer" style={{ background: '#d5b59a', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '30px 20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Image src={img} alt='logo' width={200} />
                <div>
                    <FaInstagram style={{ width: '30px', fontSize: '60px', padding: '0 5px' }} />
                    <FaFacebook style={{ width: '30px', fontSize: '60px', padding: '0 5px' }} />
                    <FaTwitter style={{ width: '30px', fontSize: '60px', padding: '0 5px' }} />
                    <FaLinkedin style={{ width: '30px', fontSize: '60px', padding: '0 5px' }} />
                </div>
            </div>
            <div style={{ display: 'grid' }}>
                <button style={{ background: '#0b2421', color: '#d5b59a', padding: '10px', margin: '10px', border: 'none' }}>ABOUT US</button>
                <button style={{ background: '#0b2421', color: '#d5b59a', padding: '10px', margin: '10px', border: 'none' }}>BRANDS</button>
                <button style={{ background: '#0b2421', color: '#d5b59a', padding: '10px', margin: '10px', border: 'none' }}>CONTACT US</button>
            </div>
            <div style={{ display: 'grid', padding: '20px' }}>
                <div className="address">
                    <FaPhoneAlt />
                    <p>  966123456789 </p>
                </div>
                <div className="address">
                    <FaEnvelopeOpen />
                    <p>  info@foodoptions.com </p>
                </div>
                <div className="address">
                    <FaMapMarkerAlt />
                    <p>  LOREM IPSUM  </p>
                </div>
            </div>
            <div>
                <p style={{ color: 'white', padding: '10px 0px' }}> Subscribe to our newsletter</p>
                <NewsletterForm />
            </div>
        </div>
    )
}
export default Footer