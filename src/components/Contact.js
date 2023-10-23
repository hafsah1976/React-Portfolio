import React from "react";

export default function Contact() {
  // State variables for form fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

// This function encodes an object into a URL-encoded string.
//In this function:
//Object.keys(data) extracts the keys of the data object.
//map() iterates over each key and encodes it as a key-value pair.
//encodeURIComponent() is used to ensure that special characters are properly encoded.
function encode(data) {
  // Use Object.keys() to extract the keys of the data object.
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))     // Then, map each key to a URL-encoded key-value pair. For each key, we encode the key and its corresponding value.

    .join("&");   // Finally, join all key-value pairs with '&' to form the URL-encoded string.
                  //join("&") joins all key-value pairs with the '&' separator to form the URL-encoded string.

}

function handleSubmit(e) {
  // prevents the default form submission behavior to handle the submission via JavaScript.
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
            src="https://www.google.com/maps/embed/v1/place?q=7514+Woodside+Lane,+Lorton,+VA,+USA&key=YOUR_API_KEY">
          </iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            {/* Address */}
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Address:
              </h2>
              <p className="mt-1">
                House 951 Abu-Bakr St. <br />
                Bahria Town, Islamabad
              </p>
            </div>
            {/* Email and Phone */}
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                E-mail:
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                hafsah999@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Phone:
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        {/* Right Column - Contact Form */}
        <form
          netlify
          name="contact"
          className="lg-w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
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
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Email Input Field */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Message Textarea */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
