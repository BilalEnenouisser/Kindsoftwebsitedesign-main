import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-md">
              KindSoft is an international web studio with 15 years of experience in delivering
              exceptional web solutions, mobile apps, and custom software for businesses worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Twitter size={20} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blue-600" />
                <span>3 Mira Street, Poltava, Ukraine</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="flex-shrink-0 text-blue-600" />
                <a href="mailto:Hello@KindSoft.co" className="hover:text-blue-600">
                  Hello@KindSoft.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="flex-shrink-0 text-blue-600" />
                <a href="tel:+380980865991" className="hover:text-blue-600">
                  +380 98 086 59 91
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2011-2026 KindSoft. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}