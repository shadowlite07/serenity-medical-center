import aboutImage from '../assets/about-image.jpg';
import d1 from '../assets/d1.jpg'; 
const QuoteSection = () => {
  return (
    <section className="bg-teal-900 py-0 my-10 overflow-hidden">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 py-20 pr-12">
            <blockquote className="text-3xl md:text-4xl font-serif text-white leading-tight mb-8">
              "Medicine cures diseases, but only doctors can cure patients."
            </blockquote>
            <p className="text-teal-200 font-medium text-lg italic mb-6">— Carl Jung</p>
            
            <div className="flex items-center gap-4 mt-8">
              <img src={d1} className="w-14 h-14 rounded-full border-2 border-teal-500" alt="Dr Wilson" />
              <div>
                <p className="text-white font-bold">Dr. James Wilson</p>
                <p className="text-teal-300 text-sm">Medical Director</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-full min-h-[400px] relative">
            <img 
              src={aboutImage}
              alt="Doctor talking to patient outside" 
              className="absolute inset-0 w-full h-full object-cover md:rounded-l-none"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }} // Subtle angle if we wanted, or just full
            />
             <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-transparent to-transparent md:w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;