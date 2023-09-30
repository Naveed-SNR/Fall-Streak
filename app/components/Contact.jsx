"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperPlane, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

export default function Contact() {
  const [name, setName] = useState('');
  const [emailID, setEmailID] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to your backend API
      setIsLoading(true);

      await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          emailID,
          subject,
          message,
        }),
      });

      setIsLoading(false);
      toast.success('Message sent successfully!');

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message.');
    }
  };

  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
      <h3 className="w3-center">CONTACT</h3>
      <p className="w3-center w3-large">{`Let's get in touch. Send us a message:`}</p>
      <div style={{ marginTop: '48px' }}>
        <p><FontAwesomeIcon className="me-3" icon={faLocationDot} size="2xl" /> Srinagar, IN</p>
        <p><FontAwesomeIcon className="me-3" icon={faPhone} size="2xl" /> Phone: +91 9149969998</p>
        <p><FontAwesomeIcon className="me-3" icon={faEnvelope} size="2xl" /> Email: fallstreaktourandtravels@gmail.com</p>
        <br />
        <form target="_blank" onSubmit={handleSubmit}>
          <p><input className="form-control" type="text" placeholder="Name" required name="Name" value={name} onChange={(e) => { setName(e.target.value) }} /></p>
          <p><input className="form-control" type="text" placeholder="Email" required name="Email" value={emailID} onChange={(e) => { setEmailID(e.target.value) }} /></p>
          <p><input className="form-control" type="text" placeholder="Subject" required name="Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} /></p>
          <p><input className="form-control" type="text" placeholder="Message" required name="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} /></p>
          <p>
            <button className="w3-button w3-black w3-round" style={{ width: "182px" }} type="submit">
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  <span className="visually-hidden" role="status">Loading...</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon className="me-2" icon={faPaperPlane} size="xl" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
