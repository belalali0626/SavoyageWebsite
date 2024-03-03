import React, { useState } from "react";
import { SigninContainer, SigninWrapper, SigninP, SigninInput } from "./SigninElements"; 
import { Button } from "../ButtonElements";
import { Modal } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulating form submission with a timer
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5000) + 1000));
    setSubmitting(false);
    setShowModal(true);
    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <SigninP>Name</SigninP>
            <SigninInput type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name..." required />
            
            <SigninP>Email</SigninP>
            <SigninInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." required />
            
            <SigninP>Subject</SigninP>
            <SigninInput type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject of your message..." required />
            
            <SigninP>Message</SigninP>
            <SigninInput as="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." required />
            
            <Button type="submit" className="mt-5 mb-3" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </SigninWrapper>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </SigninContainer>
  );
};

export default ContactUs;
