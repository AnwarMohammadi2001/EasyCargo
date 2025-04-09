import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Contact Information */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-8">
          We’re here to assist with all your cargo needs. Contact us today!
        </p>

        <div className="flex justify-center space-x-12 mb-8">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt text-blue-600 text-xl"></i>
            <span className="text-lg">+123 456 789</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope text-blue-600 text-xl"></i>
            <span className="text-lg">info@cargo.com</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-2">
            <i className="fab fa-whatsapp text-green-500 text-xl"></i>
            <a
              href="https://wa.me/123456789"
              className="text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us on WhatsApp
            </a>
          </div>
        </div>

        {/* Request a Quote Form */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cargo"
                className="block text-sm font-medium text-gray-700"
              >
                Cargo Type
              </label>
              <select
                id="cargo"
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select Cargo Type</option>
                <option value="air">Air Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="land">Land Freight</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Additional details or special requests"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Office Location Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=...your-office-location..."
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
