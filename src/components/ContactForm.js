import React, { useState } from 'react';
import './ContactForm.css';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'general',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await addDoc(collection(db, 'mainFormSubmissions'), formData);
      setSubmitStatus({
        type: 'success',
        message: 'Form submitted successfully!'
      });
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        address: '', 
        service: 'general', 
        preferredDate: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <div className="form-header">
        <h2 className="form-title">Make an Enquiry</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3 className="section-title">Personal Information</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Service Details</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="address">
              Service Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="service">
                Service Type *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="general">General Pest Control</option>
                <option value="termite">Termite Control</option>
                <option value="rodent">Rodent Control</option>
                <option value="cockroach">Cockroach Control</option>
                <option value="bed-bug">Bed Bug Treatment</option>
                <option value="steam-cleaning">Steam Cleaning</option>
                <option value="carpet-repair">Carpet Repair</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="preferredDate">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Any specific instructions or concerns?"
              rows="4"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {submitStatus.message && (
        <div
          className={`status-message ${
            submitStatus.type === 'success'
              ? 'status-success'
              : 'status-error'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
