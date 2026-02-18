import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";



const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_yi1xnlk",
        "template_vm9d14y",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "TfVh_h1JB2MjU51Si"
      )
      .then(
        () => {
          toast.success("Email sent successfully ✅");
        },
        () => {
          toast.error("Failed to send email ❌");
        }
      );
  };


  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

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

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MapPin size={28} className="text-black mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Office Address
                </h3>
                <p className="text-gray-600">
                  G -20 3rd floor, Preet Vihar,
                  Vikas Marg New Delhi - 110092
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
                  +91 90-1565-1565
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
                  info@trianglesconsolidated.in
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  rounded-2xl  space-y-5"
            >
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  maxLength={10}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 10-digit phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-medium">Comment</label>
                <textarea
                  {...register("message", { required: "Comment is required" })}
                  className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-black"
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className=" bg-black font-bold text-white py-3 px-25 rounded-lg hover:bg-amber-900 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
