import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-amber-500">
              SamLek Furniture
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We design and build premium-quality furniture for homes,
              offices, hotels, and commercial spaces. Quality craftsmanship
              and customer satisfaction are our priority across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition">About</Link></li>
              <li><Link to="/product" className="hover:text-amber-500 transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
        {/* Contact */}
<div>
  <h3 className="text-xl font-semibold text-white mb-5">
    Contact Us
  </h3>

  <div className="space-y-5">
    <div className="flex items-start gap-3">
      <div className="bg-amber-600/20 p-2 rounded-full">
        <MapPin size={18} className="text-amber-500" />
      </div>

      <div>
        <h4 className="text-white font-medium">Address</h4>
        <p className="text-gray-400">Moro Ife, Nigeria</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="bg-amber-600/20 p-2 rounded-full">
        <Phone size={18} className="text-amber-500" />
      </div>

      <div>
        <h4 className="text-white font-medium">Phone</h4>
        <p className="text-gray-400">+234 705 099 5530</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="bg-amber-600/20 p-2 rounded-full">
        <Mail size={18} className="text-amber-500" />
      </div>

      <div>
        <h4 className="text-white font-medium">Email</h4>
        <p className="text-gray-400 break-all">
          samlekfurniture@gmail.com
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="bg-amber-600/20 p-2 rounded-full">
        <Clock size={18} className="text-amber-500" />
      </div>

      <div>
        <h4 className="text-white font-medium">Working Hours</h4>
        <p className="text-gray-400">Mon - Sat: 8:00 AM - 6:00 PM</p>
      </div>
    </div>
  </div>
</div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-5">
              Stay connected with us on social media for our latest furniture
              collections and updates.
            </p>

            <div className="flex gap-4">
              <a
                 href="https://www.facebook.com/share/g/1JAKeN9p6c/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-stone-800 hover:bg-amber-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-stone-800 hover:bg-amber-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-stone-800 hover:bg-amber-600 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="https://wa.me/2349063544615"
                target="_blank"
                className="w-11 h-11 rounded-full bg-stone-800 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} Samlek. All rights reserved.
          </p>

          <p>
            Designed for quality furniture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;