import React, { useState } from 'react';
import './Contact.css';
import contactBanner from '../../../../Images/contact.banner.png';
 import Hero from '../../../../Images/contactus.png'
import Fotter from '../../../atom/atomfloder/Fotter'
import Review from '../../../molecule/moleculefloder/review/Review';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending the data to a server

    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
 <>
 <div className='mainhero'>

 
 <div className='cardbannerfirst'>
 <h1 className='headercontact'>Contact <span className='spam'>Us</span></h1>
  <img  className= ' cardbannerfirst'src={contactBanner} alt=""  />
 
 </div>
 
 <div className='herodiv'  >
 <img src= {Hero}alt="" />
  </div>
    <div className="contact-form">
   

      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div>
      
    </div>
    <Review/>
    <Fotter/>
    </div>
    </>
  );
};

export default Contact;
