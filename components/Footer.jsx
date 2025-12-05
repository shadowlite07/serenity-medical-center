
import { Facebook, Twitter, Instagram, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-teal-800 pb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg text-teal-900">
                <Plus size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-serif font-bold">Serenity</span>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed mb-6">
              Compassionate care delivered by expert hands. We are dedicated to improving the health and well-being of our community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-teal-200 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Departments</h4>
             <ul className="space-y-4 text-teal-200 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Neurology</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pediatrics</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Dental Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
             <ul className="space-y-4 text-teal-200 text-sm">
              <li className="flex gap-3">
                <span className="opacity-50">T:</span> +1 (555) 123-4567
              </li>
              <li className="flex gap-3">
                 <span className="opacity-50">E:</span> info@serenity.com
              </li>
              <li className="flex gap-3">
                 <span className="opacity-50">A:</span> 123 Health Ave, NY
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-teal-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Serenity Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;