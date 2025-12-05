
import { Stethoscope, HeartPulse, Baby, Brain, Eye, Activity, ArrowRight } from 'lucide-react';


const Services = () => {
  const services = [
    {
      title: "Primary Care",
      description: "Routine check-ups, preventive care, and management of chronic conditions for adults.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Cardiology",
      description: "Advanced heart care from screening and diagnostics to monitoring and rehabilitation.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "Pediatrics",
      description: "Specialized care for your little ones. From wellness exams to vaccinations.",
      icon: <Baby size={32} />
    },
    {
      title: "Neurology",
      description: "Expert diagnosis and treatment for disorders affecting the brain, spine, and nerves.",
      icon: <Brain size={32} />
    },
    {
      title: "Dental Care",
      description: "Comprehensive dental services including routine cleanings, whitening and surgery.",
      icon: <Activity size={32} />
    },
    {
      title: "Ophthalmology",
      description: "Vision services ranging from eye exams to treatment of complex eye diseases.",
      icon: <Eye size={32} />
    }
  ];

  return (
    <section className="py-24 bg-teal-50/30" id="services">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-semibold text-sm uppercase mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Comprehensive care for you and your family
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-teal-700 font-semibold hover:gap-2 transition-all">
            View all departments <ArrowRight size={18} className="ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{s.description}</p>
              <a href="#" className="text-teal-600 font-medium text-sm hover:underline flex items-center">
                Learn more <span className="ml-1 text-xs">→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <a href="#" className="text-teal-700 font-semibold inline-flex items-center">
            View all departments <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;