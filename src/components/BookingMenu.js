import React, { useState } from 'react';
import './BookingMenu.css';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function BookingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      suburb: e.target.suburb.value,
      service: e.target.service.value, // Capture the service type
    };

    try {
      await addDoc(collection(db, 'sideFormBookings'), bookingData);
      setSuccessMessage('A member of our team will contact you shortly!');
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={toggleMenu}>Request Quote</button>
      <div className={`booking-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Get Quote</h2>
          <button className="close-btn" onClick={toggleMenu}>×</button>
        </div>
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="email" name="email" placeholder="Your Email *" required />
          <input type="tel" name="phone" placeholder="Your Phone *" required />
          <input type="text" name="suburb" placeholder="Postcode/Suburb *" required />
          <div className="form-group">
            <select name="service" id="service" required>
              <option value="" disabled selected>Select Service *</option>
              <option value="general">General Pest Control</option>
              <option value="termite">Termite Control</option>
              <option value="rodent">Rodent Control</option>
              <option value="cockroach">Cockroach Control</option>
              <option value="bed-bug">Bed Bug Treatment</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="menu-footer">
          <p>Or give us a call to speak to someone now</p>
          <a href="tel:0431234567" className="phone-link">0431234567</a>
        </div>
      </div>
    </>
  );
}

export default BookingMenu;
