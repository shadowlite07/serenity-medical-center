import  { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [subscribeStatus, setSubscribeStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;

    // Check for empty fields
    if (!formData.name.trim()) {
      setSubscribeStatus('error');
      setStatusMessage('Please enter your full name.');
      clearStatusAfterDelay();
      return;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setSubscribeStatus('error');
      setStatusMessage('Please enter a valid email address.');
      clearStatusAfterDelay();
      return;
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      setSubscribeStatus('error');
      setStatusMessage('Please enter a valid phone number.');
      clearStatusAfterDelay();
      return;
    }

    if (!formData.service) {
      setSubscribeStatus('error');
      setStatusMessage('Please select a service type.');
      clearStatusAfterDelay();
      return;
    }

    if (!formData.message.trim()) {
      setSubscribeStatus('error');
      setStatusMessage('Please provide a message.');
      clearStatusAfterDelay();
      return;
    }

    // Simulate successful submission
    setSubscribeStatus('success');
    setStatusMessage('Thank you! Your appointment request has been received. We\'ll contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    clearStatusAfterDelay();
  };

  const clearStatusAfterDelay = () => {
    setTimeout(() => {
      setSubscribeStatus('idle');
      setStatusMessage('');
    }, 4000);
  };

  useEffect(() => {
    // Check if there is state passed from navigation (e.g. from Doctor Detail page)
    if (location.state && location.state.doctorName) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to request an appointment with ${location.state.doctorName}. `
      }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="bg-teal-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-5/12 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">We're here when you need us</h2>
              <p className="text-teal-100 mb-12">
                Whether you need urgent care or a routine checkup, we're ready to help you on your journey to better health.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal-800/50 p-3 rounded-lg"><Phone size={20} /></div>
                  <div>
                    <p className="text-xs text-teal-300 uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-teal-800/50 p-3 rounded-lg"><Mail size={20} /></div>
                  <div>
                    <p className="text-xs text-teal-300 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-medium">care@serenitymedical.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-teal-800/50 p-3 rounded-lg"><MapPin size={20} /></div>
                  <div>
                    <p className="text-xs text-teal-300 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-medium">123 Health Ave, Medical District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 bg-white p-12 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Book an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e) }>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">General Checkup</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="dental">Dental</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="Tell us about your symptoms or preferred time..." 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                ></textarea>
              </div>

              <button type='submit' className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-lg shadow-lg shadow-teal-700/20 transition-all">
                Send Request
              </button>

                          {subscribeStatus !== 'idle' && (
              <span className={`text-xs mt-2 ml-1 font-medium absolute -bottom-6 md:static md:bottom-auto ${
                subscribeStatus === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {statusMessage}
              </span>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;