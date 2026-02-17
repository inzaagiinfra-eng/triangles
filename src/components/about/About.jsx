import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our Company
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are a trusted real estate company specializing in buying,
            selling, and renting residential and commercial properties.
            Our mission is to help clients find the perfect property
            with transparency and professionalism.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/about.avif"
              alt="Real Estate"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Your Trusted Partner in Real Estate
            </h3>

            <p className="text-gray-600 mb-6 leading-7">
              We offer a wide range of real estate services including property
              sales, rental properties, office spaces for lease, and commercial
              investments. Whether you are looking to buy your dream home,
              rent a property, or lease office space, we provide complete
              support throughout the process.
            </p>

            <p className="text-gray-600 mb-8 leading-7">
              With deep market knowledge and a customer-focused approach,
              we ensure smooth transactions, fair pricing, and long-term
              value for our clients.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
                Services
              </button>

              <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
