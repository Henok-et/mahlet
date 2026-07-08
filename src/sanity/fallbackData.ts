export interface SiteSettingsData {
  siteTitle: string;
  siteDescription: string;
  headerName: string;
  contactEmail?: string;
  linkedinUrl?: string;
  phoneNumber?: string;
}

export interface HeroData {
  name: string;
  nationality: string;
  bio: string;
  profileImageUrl?: string;
  profileImage?: any;
  ctaPrimaryText?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
}

export interface ExperienceItem {
  _id: string;
  title: string;
  organization: string;
  dateRange: string;
  responsibilities: string[];
}

export interface EducationItem {
  _id: string;
  title: string;
  institution: string;
  date: string;
  link?: string;
  isTraining?: boolean;
}

export interface PublicationItem {
  _id: string;
  title: string;
  authors: string;
  year: string;
  link?: string;
}

export interface VoluntaryItem {
  _id: string;
  organization: string;
  role: string;
  dateRange: string;
  link?: string;
}

export interface RefereeItem {
  _id: string;
  name: string;
  title: string;
  organization: string;
  email: string;
}

export interface CompetencyItem {
  _id: string;
  category: string;
  description: string;
}

export interface BookItem {
  _id: string;
  title: string;
  coverUrl?: string;
  publishDate?: string;
  purchaseUrl?: string;
  description: string;
}

export const fallbackSiteSettings: SiteSettingsData = {
  siteTitle: "Mahlet Teshome | Science Policy and Sustainable Development Leader",
  siteDescription: "Official website of Mahlet Teshome Kebede, Science Policy and Sustainable Development Leader with over 20 years of experience designing and implementing equity-driven policies across 20+ countries.",
  headerName: "Mahlet Teshome",
  contactEmail: "mteshu@gmail.com",
  linkedinUrl: "https://linkedin.com/in/mahlet-teshome-5200b32b",
  phoneNumber: "(+251) 911217284"
};

export const fallbackHero: HeroData = {
  name: "Mahlet Teshome Kebede",
  nationality: "Ethiopian",
  bio: "Science Policy and Sustainable Development Leader with over 20 years of experience designing and implementing equity-driven policies across 20+ countries. Adept at negotiating multilateral agreements and forging partnerships with UN agencies, governments, international CSOs, and financing institutions to advance AU Agenda 2063 and SDG-aligned programs.",
  profileImageUrl: "/mahletpfp.jpg",
  ctaPrimaryText: "View Experience",
  ctaPrimaryUrl: "#experience",
  ctaSecondaryText: "Contact Me",
  ctaSecondaryUrl: "#contact"
};

export const fallbackExperience: ExperienceItem[] = [
  {
    _id: "exp-1",
    title: "Principal Policy Officer for Science and Technology",
    organization: "African Union Commission",
    dateRange: "Jan 2026 to date",
    responsibilities: [
      "Identify best practices and monitor effectiveness of the division/directorate’s support to AU.",
      "Contribute to the development of the departmental strategies and business continuity plan.",
      "Provide technical and intellectual support in bi-lateral and multi-lateral negotiation processes for concluding STI partnerships and international frameworks.",
      "Provide technical resource allocation and policy guidance on matters relating to system implementation projects and maintenance.",
      "Prepare annual programme budgets for science and technology, and support mobilisation of adequate resources.",
      "Lead and undertakes research, analysis and review of complex S&T policy issues."
    ]
  },
  {
    _id: "exp-2",
    title: "Development and Science Policy Expert",
    organization: "African Union Commission (AUC)",
    dateRange: "2021 to 2025",
    responsibilities: [
      "Coordinating the development and implementation of the next decade of the Science, Technology, and Innovation Strategy for Africa (STISA-2034).",
      "Developing and coordinating implementation of the AU-EU Innovation Agenda.",
      "Framing mandate of operation of a Pan African Intellectual Property Organization.",
      "Support in the drafting of legal instruments and agreements on education, S&T and Innovation (about 25 agreements negotiated and concluded).",
      "Developing and recommending policy options to support program development and application in the science-policy nexus."
    ]
  },
  {
    _id: "exp-3",
    title: "Biodiversity Program Coordinator",
    organization: "African Union Commission (AUC)",
    dateRange: "2016 - 2021",
    responsibilities: [
      "Supported harmonized implementation of the CBD and its Protocols.",
      "Organized and led technical discussions on preparatory meetings before the global negotiation sessions.",
      "Liaise with development partners (AWF, WWF, IUCN, AUDA-NEPAD, AfDB, FAO and UNEP) setting up the Biodiversity Support Group for Africa.",
      "Co-organized continental and international meetings focusing on the KMGBF."
    ]
  },
  {
    _id: "exp-4",
    title: "Environmental Law Expert",
    organization: "African Union Commission (AUC)",
    dateRange: "2012 - 2016",
    responsibilities: [
      "Set up a coordination mechanism comprised of political and technical representation of the 55 AU Member States.",
      "Proposed legal drafts and commentaries on CBD COP agenda items.",
      "Lead the development and adoption of the AU Guidelines on ABS and its Coordinated implementation in Africa.",
      "Guided to harmonize the manner that ABS is regulated in the 55 countries of the region."
    ]
  }
];

export const fallbackEducation: EducationItem[] = [
  {
    _id: "edu-1",
    title: "Master of Arts Degree (MA) in Development Studies (Environment and Development)",
    institution: "Institute of Development and Research (Addis Ababa University)",
    date: "10 August 2006",
    isTraining: false
  },
  {
    _id: "edu-2",
    title: "Bachelor of Laws Degree (LLB)",
    institution: "Addis Ababa University",
    date: "18 July 2002",
    isTraining: false
  },
  {
    _id: "edu-3",
    title: "Holistic Foundations for Assessment and Regulation of Genetic Engineering",
    institution: "Norwegian Institute of Gene Ecology (GenØk)",
    date: "August 2006",
    isTraining: true,
    link: "https://genok.com/capacity-building/courses/"
  },
  {
    _id: "edu-4",
    title: "Climate Change Diplomacy",
    institution: "United Nations Institute for Training and Research (UNITAR)",
    date: "May 2011",
    isTraining: true,
    link: "https://www.unitar.org/"
  }
];

export const fallbackPublications: PublicationItem[] = [
  {
    _id: "pub-1",
    title: "International Liability Regime for Biodiversity Damage: The Nagoya-Kuala Lumpur Supplementary Protocol",
    authors: "Mahlet Teshome and Elmo Thomas",
    year: "2014",
    link: "https://lawcat.berkeley.edu/record/176508"
  },
  {
    _id: "pub-2",
    title: "Biosafety Policy of the African Union: Background, Instruments and Activities",
    authors: "AUC and GIZ",
    year: "2011"
  },
  {
    _id: "pub-3",
    title: "AU Guidelines for the Coordinated Implementation of the Nagoya Protocol",
    authors: "AUC",
    year: "2015"
  }
];

export const fallbackVoluntary: VoluntaryItem[] = [
  {
    _id: "vol-1",
    organization: "MELCA Ethiopia",
    role: "Founding member",
    dateRange: "January 2005 to date",
    link: "https://melcaethiopia.org/"
  },
  {
    _id: "vol-2",
    organization: "Rotary Club of Addis Ababa Central-Mella",
    role: "Various positions (Rotarian)",
    dateRange: "February 2002 to 2012"
  }
];

export const fallbackReferees: RefereeItem[] = [
  {
    _id: "ref-1",
    name: "Prof. Mohammed Belhocine",
    title: "Ex. Commissioner for Education, Science, Technology, and Innovation",
    organization: "African Union Commission",
    email: "mohbelho@gmail.com"
  },
  {
    _id: "ref-2",
    name: "Prof. Saidou Madougou",
    title: "Director, Department of Education, Science, Technology and Innovation",
    organization: "African Union Commission",
    email: "madougous@africanunion.org"
  },
  {
    _id: "ref-3",
    name: "Dr. Hartmut Meyer",
    title: "Advisor, ABS Capacity Development Initiative",
    organization: "GiZ",
    email: "hartmut.meyer@giz.de"
  }
];

export const fallbackCompetencies: CompetencyItem[] = [
  {
    _id: "comp-1",
    category: "Project Management",
    description: "Sufficient experience in the development of project proposals, managing, planning, budging, and reporting."
  },
  {
    _id: "comp-2",
    category: "Negotiation and Legal Skills",
    description: "Trained and experienced in providing legal opinions in various areas of international law, drafting agreements and memoranda of understanding and negotiating bi-lateral and multilateral agreements."
  },
  {
    _id: "comp-3",
    category: "Organizational and Communication Skills",
    description: "Design and conduct training workshops, seminars, event organization and co-ordination, delivery of technical papers and presentations. Established a broad network of contacts."
  }
];

export const fallbackBooks: BookItem[] = [
  {
    _id: "book-1",
    title: "A Comprehensive Guide Natural Remedies for Children's Health Issues: The Parent DIY for Sick Kids",
    coverUrl: "/book/book1.jpg",
    purchaseUrl: "https://a.co/d/017lRUhA",
    description: "Nature is in no short supply to provide for us when we are well and when we need healing. How fulfilling is it to know that the most precious and vulnerable among us; children might be treated from the abundance of nature for the most common illnesses! This book intends to remind readers of natural remedies available to use when a child is sick nourishing their bodies without any complications."
  }
];

