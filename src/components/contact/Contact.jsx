import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Looking to buy, sell, or rent a property? Get in touch with our
            real estate experts today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MapPin size={28} className="text-black mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Office Address
                </h3>
                <p className="text-gray-600">
                  123 Business Tower, Main Road,
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={28} className="text-black mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Phone Number
                </h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={28} className="text-black mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Email Address
                </h3>
                <p className="text-gray-600">
                  info@yourrealestate.com
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your property requirement..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
