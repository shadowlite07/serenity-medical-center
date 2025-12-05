import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";

export const doctors = [
  {
    id: 1,
    name: "Dr. James Wilson",
    role: "Cardiologist",
    image: d1,
    bio: "Top rated cardiologist with over 15 years practice.",
    extendedBio: "Dr. James Wilson is a board-certified cardiologist dedicated to preventing, diagnosing, and treating cardiovascular diseases. With a focus on patient-centered care, Dr. Wilson combines state-of-the-art medical technology with a compassionate approach. He has published numerous papers on hypertension management and preventive cardiology.",
    education: [
      "MD, Harvard Medical School",
      "Residency in Internal Medicine, Johns Hopkins Hospital",
      "Fellowship in Cardiology, Cleveland Clinic"
    ],
    qualifications: [
      "Board Certified in Cardiovascular Disease",
      "Fellow of the American College of Cardiology (FACC)",
      "Certified in Nuclear Cardiology"
    ],
    specialization: [
      "Interventional Cardiology",
      "Preventive Cardiology",
      "Heart Failure Management"
    ],
    experience: 15,
    availability: ["Mon", "Tue", "Thu"]
  },
  {
    id: 2,
    name: "Ganish",
    role: "Neurologist",
    image: d2,
    bio: "Specialist in brain disorders and rehabilitation.",
    extendedBio: "Dr. Sarah Mitchell is a leading neurologist specializing in the diagnosis and treatment of complex neurological conditions. She runs the center's specialized migraine clinic and leads research into early detection of neurodegenerative diseases. Her approach emphasizes understanding the unique lifestyle factors of each patient.",
    education: [
      "MD, Stanford University School of Medicine",
      "Neurology Residency, UCSF Medical Center",
      "Fellowship in Clinical Neurophysiology"
    ],
    qualifications: [
      "Board Certified in Neurology",
      "Member of the American Academy of Neurology",
      "Ph.D. in Neuroscience"
    ],
    specialization: [
      "Migraine & Headache Disorders",
      "Stroke Rehabilitation",
      "Multiple Sclerosis"
    ],
    experience: 12,
    availability: ["Wed", "Thu", "Fri"]
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    role: "Pediatrician",
    image: d3,
    bio: "Trusted by families for compassionate child care.",
    extendedBio: "Dr. Michael Chen brings a warm and gentle approach to pediatric care, making doctor visits less scary for children and reassuring for parents. He believes in building long-term relationships with families to support children's physical, mental, and emotional growth from infancy through adolescence.",
    education: [
      "MD, Perelman School of Medicine at UPenn",
      "Pediatric Residency, Children's Hospital of Philadelphia"
    ],
    qualifications: [
      "Board Certified in Pediatrics",
      "Fellow of the American Academy of Pediatrics",
      "Certified in Pediatric Advanced Life Support"
    ],
    specialization: [
      "General Pediatrics",
      "Adolescent Medicine",
      "Child Development"
    ],
    experience: 8,
    availability: ["Mon", "Wed", "Fri", "Sat"]
  },
  {
    id: 4,
    name: "Dr. Emily Roberts",
    role: "General Practitioner",
    image: d4,
    bio: "Comprehensive family care for all ages.",
    extendedBio: "Dr. Emily Roberts provides comprehensive primary care services with a focus on holistic health and disease prevention. She is passionate about health education and empowering patients to take charge of their well-being. Dr. Roberts handles everything from acute illnesses to chronic disease management.",
    education: [
      "MD, Yale School of Medicine",
      "Family Medicine Residency, Mayo Clinic"
    ],
    qualifications: [
      "Board Certified in Family Medicine",
      "Member of the American Academy of Family Physicians"
    ],
    specialization: [
      "Preventive Medicine",
      "Women's Health",
      "Geriatrics"
    ],
    experience: 10,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"]
  }
];