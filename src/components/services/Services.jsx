import React from "react";
import { Home, Key, Building2, Briefcase, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Property Sales",
      description:
        "We help you buy and sell residential and commercial properties with complete transparency and market expertise.",
    },
    {
      icon: <Key size={40} />,
      title: "Property Rentals",
      description:
        "Find the perfect rental property including apartments, houses, and commercial spaces tailored to your needs.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Office Leasing",
      description:
        "Premium office spaces available for lease in prime locations to grow your business efficiently.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Property Management",
      description:
        "Comprehensive property management services ensuring smooth operations and maximum returns.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Investment Consulting",
      description:
        "Professional guidance for real estate investments to help you achieve long-term growth and profitability.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We provide complete real estate solutions including buying, selling,
            renting, leasing office spaces, and property investment consulting.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="text-black mb-6 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;
