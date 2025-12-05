
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, GraduationCap, Award, Stethoscope, Clock, CheckCircle2 } from 'lucide-react';
import { doctors } from '../data/doctors';

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor not found</h2>
        <Link to="/doctors" className="text-teal-600 hover:text-teal-800 font-medium flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Doctors
        </Link>
      </div>
    );
  }

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Spacer */}
      <div className="h-20 md:h-24 bg-white"></div>
      
      {/* Breadcrumb */}
      <div className="bg-teal-50/50 py-4 border-b border-teal-100">
        <div className="container mx-auto px-20 md:px-6 lg:px-20">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-teal-700">Home</Link> 
            <span>/</span>
            <Link to="/doctors" className="hover:text-teal-700">Doctors</Link>
            <span>/</span>
            <span className="text-teal-800 font-medium">{doctor.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Sidebar / Image Column */}
          <div className="md:col-span-4 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
              <img src={doctor.image} alt={doctor.name} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-white font-medium">"My goal is to help you live your healthiest life."</p>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={20} className="text-teal-600" /> Weekly Schedule
              </h3>
              
              <div className="space-y-2 mb-6">
                {weekDays.map((day) => {
                  const isAvailable = doctor.availability?.includes(day);
                  // Generating pseudo-random slots for visual effect based on day length
                  const morningSlot = day.length % 2 === 0 ? "09:00" : "10:00";
                  const afternoonSlot = day.length % 2 === 0 ? "14:30" : "15:00";
                  
                  return (
                    <div 
                      key={day} 
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isAvailable 
                          ? 'bg-white border-teal-200 shadow-sm' 
                          : 'bg-transparent border-transparent opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold text-sm w-8 ${isAvailable ? 'text-teal-800' : 'text-gray-400'}`}>
                          {day}
                        </span>
                        {isAvailable && <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>}
                      </div>
                      
                      <div className="flex gap-1">
                         {isAvailable ? (
                           <>
                             <span className="text-[10px] font-medium bg-teal-100 text-teal-700 px-2 py-1 rounded hover:bg-teal-200 cursor-pointer transition-colors border border-teal-200">
                               {morningSlot} AM
                             </span>
                             <span className="text-[10px] font-medium bg-teal-100 text-teal-700 px-2 py-1 rounded hover:bg-teal-200 cursor-pointer transition-colors border border-teal-200">
                               {afternoonSlot} PM
                             </span>
                           </>
                         ) : (
                           <span className="text-xs text-gray-400 font-medium italic">Unavailable</span>
                         )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/contact" state={{ doctorName: doctor.name }}>
                <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-teal-700/20 hover:shadow-teal-700/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Book Appointment
                </button>
              </Link>
              <p className="text-center text-xs text-gray-400 mt-3">
                Pre-fills appointment request with {doctor.name}
              </p>
            </div>
            
             <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-bold text-gray-900 text-lg">{doctor.experience}+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Patients</p>
                    <p className="font-bold text-gray-900 text-lg">2,500+ Happy Patients</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-12">
            <div>
              <span className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2 block">{doctor.role}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{doctor.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                {doctor.extendedBio || doctor.bio}
              </p>
            </div>

            {/* Specialization */}
            {doctor.specialization && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                   <Stethoscope className="text-teal-600" /> Clinical Interests
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {doctor.specialization.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      <span className="font-medium text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education & Qualifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {doctor.education && (
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-teal-600" /> Education
                  </h3>
                  <ul className="space-y-4">
                    {doctor.education.map((edu, i) => (
                      <li key={i} className="flex gap-3">
                         <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-teal-300"></div>
                         <span className="text-gray-600 text-sm leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.qualifications && (
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-teal-600" /> Certifications
                  </h3>
                   <ul className="space-y-4">
                    {doctor.qualifications.map((qual, i) => (
                      <li key={i} className="flex gap-3">
                         <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-teal-300"></div>
                         <span className="text-gray-600 text-sm leading-relaxed">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

             {/* Quote/Philosophy */}
             <div className="bg-teal-900 text-white p-8 rounded-2xl relative overflow-hidden mt-8">
                <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl leading-none">"</div>
                <h4 className="font-serif font-bold text-xl mb-4 relative z-10">Doctor's Philosophy</h4>
                <p className="text-teal-100 italic text-lg leading-relaxed relative z-10">
                  "I believe that effective treatment starts with listening. Understanding a patient's story is just as important as reading their chart. My practice is built on trust, transparency, and a commitment to excellence."
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;