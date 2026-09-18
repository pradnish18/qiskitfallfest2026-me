export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  isTopQuestion?: boolean;
}

export const FAQ_CATEGORIES = [
  'All',
  'General & Attendance',
  'Registration & Verification',
  'Hackathon & Hardware',
  'Workshops & Prerequisites',
  'Campus & Logistics',
] as const;

export type FAQCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What is Qiskit Fall Fest 2026 at SRM University-AP?',
    answer:
      'Qiskit Fall Fest 2026 is an international quantum computing event co-hosted by SRM University-AP and IBM Quantum. Spanning five days, the gathering brings together academic researchers, students, and technology leaders for hands-on Qiskit 1.x workshops, plenary scientific keynotes, and an intensive 24-hour quantum algorithmic hackathon.',
    category: 'General & Attendance',
    isTopQuestion: true,
  },
  {
    id: 'faq-02',
    question: 'Is there any registration fee or cost to participate?',
    answer:
      'No. Qiskit Fall Fest 2026 is completely free of cost for all verified student participants and academic cohorts. All keynote sessions, workshop computing resources, lab access, and hackathon participation are provided through institutional patronage by SRM University-AP and IBM Quantum.',
    category: 'General & Attendance',
    isTopQuestion: true,
  },
  {
    id: 'faq-03',
    question: 'How do I register for the festival and hackathon?',
    answer:
      'Registration is administered exclusively through Unstop. Attendees must submit their verified university credentials and team details on the official Unstop portal. Direct walk-in registrations are not permitted due to computing terminal allocations.',
    category: 'Registration & Verification',
    isTopQuestion: true,
  },
  {
    id: 'faq-04',
    question: 'Do I need prior quantum computing experience to participate?',
    answer:
      'No prior quantum computing experience is required. The curriculum begins with foundational quantum mechanics, qubit representation, and gate logic before progressing to advanced variational algorithms and quantum machine learning. Basic familiarity with Python is recommended.',
    category: 'Workshops & Prerequisites',
    isTopQuestion: true,
  },
  {
    id: 'faq-05',
    question: 'Will participants receive academic on-duty (OD) attendance letters?',
    answer:
      'Yes. Registered and verified external and internal attendees will receive formal participation and attendance certificates endorsed by SRM University-AP and IBM Quantum to facilitate on-duty approval from their respective academic institutions.',
    category: 'Registration & Verification',
  },
  {
    id: 'faq-06',
    question: 'How will the 24-hour quantum hackathon be conducted?',
    answer:
      'The hackathon takes place in the AL Block Computer Labs starting on Day 03. Teams of 2 to 4 members work on competitive algorithmic challenges spanning quantum optimization, quantum chemistry simulation, and quantum machine learning, with 24/7 technical mentorship.',
    category: 'Hackathon & Hardware',
  },
  {
    id: 'faq-07',
    question: 'Do hackathon participants get access to real IBM Quantum processors?',
    answer:
      'Yes. Validated hackathon teams are provisioned with dedicated execution credentials on the IBM Quantum Platform, allowing algorithmic circuits to run directly on 127-qubit IBM Eagle processor backends in addition to local Aer simulation environments.',
    category: 'Hackathon & Hardware',
  },
  {
    id: 'faq-08',
    question: 'What hardware or software should I bring to campus?',
    answer:
      'Participants should bring a personal laptop with a working Python 3.10+ installation and a modern web browser. Campus lab terminals with pre-configured Linux environments and Qiskit 1.x environments will also be accessible during lab sessions.',
    category: 'Workshops & Prerequisites',
  },
  {
    id: 'faq-09',
    question: 'Where on the SRM University-AP campus will sessions take place?',
    answer:
      'Keynote addresses and ceremonial functions will take place in the Main Auditorium (Ground Floor, Academic Block 01). Hands-on workshops and hackathon workstations will be hosted across AL Block Computer Labs 01, 02, and 03.',
    category: 'Campus & Logistics',
  },
  {
    id: 'faq-10',
    question: 'Are meals and refreshments provided during the 24-hour hackathon?',
    answer:
      'Yes. Continuous catering, midnight snacks, tea, coffee, and energy dispensaries are provided for all registered hackathon participants, mentors, and staff throughout the 24-hour sprint.',
    category: 'Campus & Logistics',
  },
  {
    id: 'faq-11',
    question: 'Are official IBM certificates and badges provided?',
    answer:
      'Yes. Attendees who complete workshop assignments and hackathon tracks will be awarded verifiable digital course credentials and IBM Credly badges recognized internationally by academia and industry.',
    category: 'Registration & Verification',
  },
  {
    id: 'faq-12',
    question: 'Is accommodation available on campus for outstation attendees?',
    answer:
      'Limited on-campus hostel accommodation is available on a first-come, first-served basis for verified external participants traveling from outside the Vijayawada/Guntur region. Requests must be indicated during Unstop registration.',
    category: 'Campus & Logistics',
  },
];
