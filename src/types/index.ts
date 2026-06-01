export interface Attorney {
  id: string;
  slug: string;
  name: string;
  title: string;
  image: string;
  specialty: string[];
  education: { degree: string; institution: string; year: string }[];
  barAdmissions: string[];
  languages: string[];
  bio: string;
  longBio: string;
  phone: string;
  email: string;
  cases: string[];
  awards: string[];
  publications: string[];
  featured: boolean;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  keyServices: string[];
  whyDrakonis: string;
  relatedAreas: string[];
  attorneys: string[];
  stats: { label: string; value: string }[];
}

export interface Case {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  outcome: 'Victory' | 'Settlement' | 'Acquittal' | 'Award' | 'Completed' | 'Cleared';
  value: string;
  summary: string;
  fullDescription: string;
  attorneys: string[];
  duration: string;
  jurisdiction: string;
  featured: boolean;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  matterType: string;
  quote: string;
  rating: number;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  timezone: string;
  established: string;
  attorneys: number;
  focus: string[];
  mapUrl: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}
