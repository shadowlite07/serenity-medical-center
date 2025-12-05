
import { Star } from 'lucide-react';


const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Jennifer Adams",
      role: "Patient",
      text: "Dr. Wilson took the time to really understand my concerns. I felt heard and cared for. An exceptional experience.",
      image: "https://picsum.photos/id/1/100/100",
      stars: 5
    },
    {
      id: 2,
      name: "Richard Watson",
      role: "Patient",
      text: "The staff are incredibly kind. They made a typically stressful visit surprisingly comfortable and calm.",
      image: "https://picsum.photos/id/2/100/100",
      stars: 5
    },
    {
      id: 3,
      name: "Lisa Thompson",
      role: "Patient Parent",
      text: "Best pediatrician in town! My kids love Dr. Chen and actually look forward to their check-ups.",
      image: "https://picsum.photos/id/3/100/100",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-teal-50/20">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">What our patients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 gap-1 mb-6">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{r.name}</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;