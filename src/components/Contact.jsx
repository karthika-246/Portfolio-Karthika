import React, { useRef } from "react";
import emailjs from "emailjs-com";
// ...icons etc

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      // optional: initialize once (not required if you pass public key to sendForm)
      // emailjs.init('YOUR_PUBLIC_KEY'); 

      const result = await emailjs.sendForm(
        "service_syogznl",
        "template_3e7ypnv",
        form.current,
        "5wHh96dfRQKSWcB2j"
      );

      // result.status === 200 on success
      console.log("EmailJS result:", result);
      alert("📨 Message sent successfully!");
      form.current.reset();
    } catch (error) {
      // log the full error object — very important for diagnosing
      console.error("EmailJS send error:", error);

      // Try to get meaningful text
      const errMsg =
        (error && (error.text || error.message)) ||
        JSON.stringify(error) ||
        "Unknown error";

      alert("❌ Failed to send message. Reason: " + errMsg);

      // optional: show a friendly fallback or store to server for retry
    }
  };

  return (
    <section id="contact" className="section glass">
      {/* ...contact cards */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="email-button">Send Message</button>
      </form>
    </section>
  );
}
