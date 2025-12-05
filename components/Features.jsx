
import { User, MessageCircle, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <User size={28} className="text-teal-700" />,
      title: "Compassionate Care",
      desc: "We treat not just symptoms, but the person. We strive to understand your concerns thoroughly."
    },
    {
      icon: <MessageCircle size={28} className="text-teal-700" />,
      title: "Patient Advocacy",
      desc: "We are your partners in health. We work to ensure that you fully understand your options."
    },
    {
      icon: <Leaf size={28} className="text-teal-700" />,
      title: "Holistic Approach",
      desc: "Medicine is part of the cure. We consider your nutrition, mental well-being and lifestyle."
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-20 md:px-6 lg:px-20 text-center">
        <span className="text-teal-600 font-semibold text-sm uppercase mb-3 block">Our Core Values</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">More than just medical treatment</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          We understand that seeking medical care can be stressful. That's why we've built a practice centered around empathy, listening, and treating health concerns for your healing.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-teal-50/50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teal-100 text-left group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                {/* Clone element to change color on hover if needed, or rely on CSS classes */}
                <div className="group-hover:text-white transition-colors">{f.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;