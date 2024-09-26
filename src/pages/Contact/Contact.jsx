// ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
// EmailJS Setup: Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with the credentials from your EmailJS account. // You can configure the template for receiving emails in your EmailJS dashboard.
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );

    setFormData({
      name: "",
      mobile: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 font-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Mobile Number"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message"
              rows="6"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
