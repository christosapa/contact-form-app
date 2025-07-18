import './App.css';
import ContactForm from './components/ContactForm';
import BookingMenu from './components/BookingMenu';
import Footer from './components/Footer';

function App() {
  const scrollToMainForm = () => {
    const mainForm = document.querySelector('.contact-form');
    if (mainForm) {
      mainForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <div className="top-header">
        <div className="container">
          <div className="contact-info">
            <div className="location">
              <i className="location-icon">📍</i>
              Get Same Day Appointment in your Area
            </div>
            <div className="contact-details">
              <a href="tel:0431234567" className="phone">
                <i className="phone-icon">📞</i>
                0431234567
              </a>
              <a href="mailto:enquiries@servicemelbourne.com.au" className="email">
                <i className="email-icon">✉️</i>
                enquiries@servicemelbourne.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <BookingMenu />
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </nav>
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">Service Now Melbourne, VIC-3000</h1>
          <p className="hero-subtitle">Experts in Pest Control, Steam Cleaning and Carpet repair</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToMainForm}>Enquire Now</button>
            <button className="btn btn-secondary">Call Us: 043 123 4567</button>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

/* ContactForm Component - Assuming this is where the form is located */
<form className="contact-form" onSubmit={handleFormSubmit}>
  <input type="text" name="name" placeholder="Your Name *" required pattern="^[a-zA-Z\s]+$" title="Please enter a valid name." />
  <input type="email" name="email" placeholder="Your Email *" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address." />
  <input type="tel" name="phone" placeholder="Your Phone *" required pattern="^\+?[0-9]{7,15}$" title="Please enter a valid phone number." />
  <input type="text" name="suburb" placeholder="Postcode/Suburb *" required pattern="^[a-zA-Z0-9\s]+$" title="Please enter a valid suburb or postcode." />
  {/* Other form fields */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

// Sanitize inputs before submission
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Example usage in form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const sanitizedData = {
    name: sanitizeInput(e.target.name.value),
    email: sanitizeInput(e.target.email.value),
    phone: sanitizeInput(e.target.phone.value),
    suburb: sanitizeInput(e.target.suburb.value),
  };
  console.log('Sanitized Data:', sanitizedData);
  // Proceed with sanitizedData
}
