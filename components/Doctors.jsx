import { useState, useMemo } from 'react';
import { Linkedin, Twitter, Facebook, Search, Filter, Calendar, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');

  // Extract unique roles/specialties
  const roles = useMemo(() => {
    const allRoles = doctors.map(d => d.role);
    return ['All', ...Array.from(new Set(allRoles))];
  }, []);

  // Extract unique availability days sorted by week order
  const days = useMemo(() => {
    const allDays = doctors.flatMap(d => d.availability || []);
    const uniqueDays = Array.from(new Set(allDays));
    const weekOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return ['All', ...uniqueDays.sort((a, b) => weekOrder.indexOf(a) - weekOrder.indexOf(b))];
  }, []);

  // Filter Logic with type safety
  const filteredDoctors = doctors.filter(doc => {
    // Safely convert to strings, handling undefined/null cases
    const name = String(doc.name || '');
    const role = String(doc.role || '');
    const bio = String(doc.bio || '');
    const search = searchTerm.toLowerCase();
    
    const matchesSearch = 
      name.toLowerCase().includes(search) || 
      role.toLowerCase().includes(search) ||
      bio.toLowerCase().includes(search);
    
    const matchesRole = selectedRole === 'All' || doc.role === selectedRole;
    
    const matchesDay = selectedDay === 'All' || (doc.availability && doc.availability.includes(selectedDay));

    return matchesSearch && matchesRole && matchesDay;
  });

  return (
    <section className="py-24 bg-white" id="doctors">
      <div className="container mx-auto px-20 md:px-6 lg:px-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase mb-3 block">Meet Our Team</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Experts who treat you like family
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our doctors are not just highly skilled professionals; they are compassionate listeners dedicated to your well-being.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 p-6 rounded-2xl mb-12 border border-gray-100 shadow-sm max-w-5xl mx-auto">
           <div className="grid md:grid-cols-3 gap-4">
              {/* Text Search */}
              <div className="relative group">
                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" size={20} />
                 <input 
                   type="text"
                   placeholder="Search by name or keyword..."
                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>

              {/* Role Filter */}
              <div className="relative group">
                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-teal-600 transition-colors">
                    <Filter size={20} />
                 </div>
                 <select
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white transition-all cursor-pointer text-gray-700"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                 >
                    <option value="All">All Specialties</option>
                    {roles.filter(r => r !== 'All').map(role => <option key={role} value={role}>{role}</option>)}
                 </select>
                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-200">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </div>
              </div>

              {/* Availability Filter */}
               <div className="relative group">
                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-teal-600 transition-colors">
                    <Calendar size={20} />
                 </div>
                 <select
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white transition-all cursor-pointer text-gray-700"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                 >
                    <option value="All">Any Availability</option>
                    {days.filter(d => d !== 'All').map(day => <option key={day} value={day}>{day}</option>)}
                 </select>
                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-200">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </div>
              </div>
           </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <Link to={`/doctors/${doc.id}`} key={doc.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay */}
                   <div className="absolute inset-0 bg-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 text-teal-900 px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                        View Profile
                      </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-5">
                        <h3 className="text-xl font-bold text-gray-900 font-serif mb-1 group-hover:text-teal-700 transition-colors">{doc.name}</h3>
                        <p className="text-teal-600 font-semibold text-xs uppercase tracking-wider">{doc.role}</p>
                    </div>

                    <div className="space-y-3 mb-6 bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                        {/* Experience */}
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                            <Briefcase size={16} className="text-teal-500 shrink-0" />
                            <span className="font-medium">{doc.experience}+ Years Experience</span>
                        </div>
                        {/* Degree - Taking the first part of the first education string for brevity */}
                         <div className="flex items-start gap-3 text-sm text-gray-700">
                            <GraduationCap size={16} className="text-teal-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium" title={doc.education?.[0]}>{doc.education?.[0] ? doc.education[0].split(',')[0] : 'Medical Specialist'}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                        {doc.bio}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                         <div className="flex gap-2 text-gray-400">
                            <div className="hover:text-white hover:bg-teal-600 transition-all bg-gray-50 p-2 rounded-full cursor-pointer"><Twitter size={14} /></div>
                            <div className="hover:text-white hover:bg-teal-600 transition-all bg-gray-50 p-2 rounded-full cursor-pointer"><Linkedin size={14} /></div>
                            <div className="hover:text-white hover:bg-teal-600 transition-all bg-gray-50 p-2 rounded-full cursor-pointer"><Facebook size={14} /></div>
                        </div>
                        <div className="text-xs font-bold text-teal-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer uppercase tracking-wide">
                            Details <ChevronRight size={14} />
                        </div>
                    </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Search size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No doctors found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                    onClick={() => {setSearchTerm(''); setSelectedRole('All'); setSelectedDay('All');}}
                    className="mt-4 text-teal-600 font-medium hover:underline"
                >
                    Clear all filters
                </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;