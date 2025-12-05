
import { UserCheck, Clock, Heart, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.avif';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20   bg-gradient-to-br from-teal-50 via-white to-teal-50/50 overflow-hidden relative">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-xl relative z-10">
            <span className="text-teal-600 font-semibold tracking-wide text-sm uppercase mb-4 block">Compassionate Care</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-6">
              Healthcare with a <span className="text-teal-700 italic">human touch</span> and expertise.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We deliver leading treatments and therapies for the best health outcomes, but more importantly, we understand and guide you on your wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/doctors">
                <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-xl shadow-teal-700/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Search size={18} /> Find a Doctor
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  Our Services <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
               {[
                 { icon: <UserCheck className="text-teal-600" />, label: "Expert Doctors" },
                 { icon: <Clock className="text-teal-600" />, label: "24/7 Support" },
                 { icon: <Heart className="text-teal-600" />, label: "Comprehensive Care" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col gap-2">
                   <div className="mb-1">{stat.icon}</div>
                   <span className="text-sm font-semibold text-gray-900">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Doctors interacting with patient" 
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;