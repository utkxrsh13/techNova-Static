import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleReset = (e) => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here, e.g., sending data to a backend server.
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <StyledWrapper>
      <div className="form-container sm:w-[400px] lg:w-[600px]">
        <div className="form">
          <span className="heading">Get in touch</span>

          <input
            placeholder="Name"
            name="name" // Add this
            value={formData.name}
            onChange={handleChange}
            id="name"
            type="text"
            className="input"
          />

          <input
            placeholder="Email"
            name="email" // Add this
            value={formData.email}
            onChange={handleChange}
            id="mail"
            type="email"
            className="input"
          />

          <textarea
            placeholder="Say Hello"
            name="message" // Add this
            value={formData.message}
            onChange={handleChange}
            rows={8}
            cols={30}
            id="message"
            className="textarea"
          />
          <div className="button-container">
            <div onClick={handleSubmit} className="send-button">Send</div>
            <div className="reset-button-container">
              <div id="reset-btn" onClick={handleReset} className="reset-button">Reset</div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .orange {
    color: #ff7a01;
  }

  .form-container {
    max-width: 700px;
    width: 500px;
    background-color: #001925;
    padding: 20px;
    border-left: 5px solid #ff7a01;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  }

  .heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-container .form .input {
    color: #87a4b6;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
  }

  .form-container .form .input:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: #ff7a01;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .button-container {
    display: flex;
    gap: 10px;
  }

  .form-container .form .button-container .send-button {
    flex-basis: 70%;
    background: #ff7a01;
    padding: 10px;
    color: #001925;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .send-button:hover {
    background: transparent;
    border: 1px solid #ff7a01;
    color: #ff7a01;
  }

  .form-container .form .button-container .reset-button-container {
    filter: drop-shadow(1px 1px 0px #ff7a01);
    flex-basis: 30%;
  }

  .form-container .form .button-container .reset-button-container .reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #ff7a01;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .reset-button-container .reset-button:hover {
    background: #ff7a01;
    color: #001925;
  }`;

export default Contact;
