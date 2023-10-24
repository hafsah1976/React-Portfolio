import React, { useState } from 'react';
require('dotenv').config(); // Import 'dotenv' at the top

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  //  close the 'validateEmail' function before the 'encode' function

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  // close the 'encode' function before the 'sendContactForm' function

  async function sendContactForm() {
    try {
      // Validate email
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        return; // Prevent form submission if email is invalid
      } else {
        setEmailError(""); // Clear the email validation error
      }
  
      // Prepare the data to be sent in the API request
      const data = {
        name: name,
        email: email,
        message: message,
      };
  
      // Encode the data for the API request
      const encodedData = encode(data);
  
      // Send a POST request to GitHub's API for creating issues
      const response = await fetch('https://api.github.com/repos/hafsah1976/React-Portfolio/issues', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`, // Use process.env to access environment variables
          'Content-Type': 'application/x-www-form-urlencoded', // Use the appropriate content type
        },
        body: encodedData, // Send the encoded data
      });
  
      if (response.ok) {
        // Request was successful
        alert('Message sent!');
      } else {
        // Request was not successful, handle the error
        alert('An error occurred while sending the message. Please try again later.');
      }
    } catch (error) {
      // Catch and handle any network or fetch-related errors
      console.error('An error occurred:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
  }
  
  return (
    // Contact Section
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">

        {/* Left Column - Contact Information */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* Google Maps Embedded iframe */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=7514+Woodside+Lane,+Lorton,+VA,+USA&key=API_KEY">
          </iframe>

          {/* Address */}
          <div className="lg:w-1/2 px-6 bg-gray-900 flex flex-wrap py-6 rounded shadow-md">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-2">
              Address:
            </h2>
            {/* Address information can be added here */}
          </div>

          {/* Email and Phone */}
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-2">
              E-mail:
            </h2>
            <a href="/" className="text-white font-bold leading-relaxed">
              hafsah999@gmail.com
            </a>
            <h2 className="title-font font-bold text-white tracking-widest text-sm mt-4 mb-2">
              Phone:
            </h2>
            <p className="text-white leading-relaxed">123-456-7890</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form
          name="contact"
          onSubmit={sendContactForm}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-800">
            Please contact me if you have any questions.
          </p>

          {/* Name Input Field */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input Field with Validation Error Message */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field ${emailError && 'input-error'}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear email validation error on change
              }}
              required // Make the email field required
            />
            {emailError && (
              <p className="text-red-600 text-sm">{emailError}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-teal-600 text-white hover:bg-teal-700 py-2 px-4 rounded-lg focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}