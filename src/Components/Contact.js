import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../index.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Feel free to reach out through any of the platforms below:</p>
            
            <div className="contact-links">
                 <a href="https://wa.me/9156568515" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
                    <FaWhatsapp /> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/onkar-hol-729101231/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://www.instagram.com/onkarhol_999/" target="_blank" rel="noopener noreferrer" className="contact-item instagram">
                    <FaInstagram /> Instagram
                </a>
                <a href="mailTo:onkarhol555@gmail.com" className="contact-item email">
                    <FaEnvelope /> Email
                </a>
            </div>
        </div>
    );
};

export default Contact;
