import React, { useState } from 'react';

export default function Contact() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // This function encodes an object into a URL-encoded string.
  function encode(data) {
    return Object.keys(data) // Use Object.keys() to extract the keys of the data object.
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      ) // Then, map each key to a URL-encoded key-value pair. For each key, we encode the key and its corresponding value.
      .join("&"); // Finally, join all key-value pairs with '&' to form the URL-encoded string. join("&") joins all key-value pairs with the '&' separator to form the URL-encoded string.
  }

  // Handles form submission
  function handleSubmit(e) {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Send a POST request to the server ("/") with the form data.
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // The body of the request is the URL-encoded form data.
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        // If the request is successful, show a success message to the user.
        alert("Message sent!");
      })
      .catch((error) => {
        // If there's an error with the request, show an alert with the error message.
        alert(error);
      });
  }

  return (
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
            src="https://www.google.com/maps/embed/v1/place?q=7514+Woodside+Lane,+Lorton,+VA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
          </iframe>
  {/* Address */}
  <div className="lg:w-1/2 px-6 bg-gray-900 flex flex-wrap py-6 rounded shadow-md">
    <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-2">
      {/* Address: */}
    </h2>
    {/* <p className="text-white">
      House 951 Abu-Bakr St. <br />
      Bahria Town, Islamabad
    </p> */}
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
  onSubmit={handleSubmit}
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
  {/* /add validation */}
  {/* Email Input Field */}
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
      Email:
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="input-field"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
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