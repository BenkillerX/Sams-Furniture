import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const text = `Hello SamLek Furniture,

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

  const whatsappUrl = `https://wa.me/2349063544615?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <main>
      {/* Hero */}
      <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/SamLeg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 leading-8">
          Have a question, need custom furniture, or want a free quote?
          We'd love to hear from you.
        </p>
      </div>
    </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <span className="text-amber-700 uppercase tracking-widest font-semibold">
              Get In Touch
            </span>

            <h2 className="mt-3 text-4xl font-bold text-stone-900">
              Let's Discuss Your Project
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Whether you're looking for custom furniture, interior furnishing,
              or professional installation services, our team is ready to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <Phone className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">
                    +234 705 099 5530
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">
                    Samlekfurniture@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">
                    Moro Ife, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Saturday
                  </p>
                  <p className="text-gray-600">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-stone-900">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your furniture needs..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-700 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-lg font-semibold transition cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;