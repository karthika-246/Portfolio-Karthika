import React from "react";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <section id="contact" className="section glass">
      <h2>Contact</h2>
      <p className="contact-text">
        I'm always open to new opportunities, collaborations, or even a friendly conversation.
      </p>

      <div className="contact-wrapper">
        <div className="contact-card">
          <MdEmail className="contact-icon" />
          <h3>Email</h3>
          <p>karthikaveerasamy51@gmail.com</p>
        </div>

        <div className="contact-card">
          <FiPhoneCall className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 7010310045</p>
        </div>

        <div className="contact-card">
          <GoLocation className="contact-icon" />
          <h3>Location</h3>
          <p>Tiruppur, Tamil Nadu, India</p>
        </div>
      </div>

      <a href="mailto:karthikaveerasamy51@gmail.com" className="email-button">
        Send Me an Email
      </a>
    </section>
  );
}
