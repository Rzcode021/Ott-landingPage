import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Help</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Settings</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} OTT Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
