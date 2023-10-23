// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                <div className="">
            <div className="">
              <h2 className="">
                ADDRESS
              </h2>
              <p className="">
                House 951 St.AbuBakr <br />
                Bahria Town, Islamabad
              </p>
            </div>
            <div className="">
              <h2 className="">
                EMAIL
              </h2>
              <a className="">
                hafsah999@gmail.com
              </a>
              <h2 className="">
                PHONE
              </h2>
              <p className="">123-456-7890</p>
            </div>
          </div>
        </div>