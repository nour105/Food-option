import Image from 'next/image'

function ContactSection() {
  return (

<div
        style={{
          backgroundImage: `url(/bcon.png)`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          padding: "35px 22px",
          minWidth: "100%"

        }}>
  <div>
    <div className='contact-us'>
        <h1>Contact Us</h1>
        <p className='p-contact'>
        how can we help you?</p>
    </div>
    <div className='form-contact'>
    <form>
      <div >
        <div>
          <input className='place1' type="text"  id="name"
            aria-describedby="name" placeholder="Name"/>
        </div>
        <div >
          <input className='place1' type="email"  id="email"
            aria-describedby="email" placeholder="Email"/>
        </div>
      </div>
      <div >
        <input  className='place1' type="subject" id="subject"
            placeholder="Subject"/>
      </div>
      <div>
        <textarea className='place1' rows="5"  id="message"
            placeholder="Subject"></textarea>
      </div>    
      <div >
        <button className='button-contact' type="submit">Submit</button>
      </div>
    </form>
   </div>
  </div>
</div> 
  );
}

export default ContactSection;