import React, { useState } from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements"; // Ensure this path matches your actual file structure
import { Button } from "../ButtonElements"; // Ensure this path matches your actual file structure

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission delay
    setTimeout(() => {
      setSubmissionMessage("Sent successfully!");
      // Clear form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      // Automatically clear the submission message after 3 seconds
      setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
    }, Math.random() * (5000 - 1000) + 1000);
  };

  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <SigninP>Name</SigninP>
            <SigninInput 
              type="text" 
              name="name" 
              placeholder="Enter your name..." 
              value={formData.name} 
              onChange={handleChange} 
              disabled={isSubmitting} 
            />
            
            <SigninP>Email</SigninP>
            <SigninInput 
              type="email" 
              name="email" 
              placeholder="Enter your email..." 
              value={formData.email} 
              onChange={handleChange} 
              disabled={isSubmitting} 
            />
            
            <SigninP>Subject</SigninP>
            <SigninInput 
              type="text" 
              name="subject" 
              placeholder="Subject of your message..." 
              value={formData.subject} 
              onChange={handleChange} 
              disabled={isSubmitting} 
            />
            
            <SigninP>Message</SigninP>
            <SigninInput 
              as="textarea" 
              name="message" 
              placeholder="Type your message here..." 
              value={formData.message} 
              onChange={handleChange} 
              disabled={isSubmitting} 
            />
            
            <Button type="submit" className="mt-5 mb-3" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </form>
          {submissionMessage && <p className="center-align mt-3">{submissionMessage}</p>}
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default ContactUs;
