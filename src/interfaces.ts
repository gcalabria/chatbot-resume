interface Language {
  name: string;
  proficiency:
    | "PROFESSIONAL_WORKING"
    | "FULL_PROFESSIONAL"
    | "NATIVE_OR_BILINGUAL"
    | "ELEMENTARY"
    | "LIMITED_WORKING";
}

interface Date {
  year: number;
  month: number;
  day: number;
}

interface Education {
  start: Date;
  end: Date;
  fieldOfStudy: string;
  degree: string;
  grade: string;
  schoolName: string;
  description: string;
  activities: string;
  url: string;
  schoolId: string;
}

interface Position {
  companyName: string;
  companyUsername: string;
  companyURL: string;
  companyLogo: string;
  companyIndustry: string;
  companyStaffCountRange: string;
  title: string;
  multiLocaleTitle: {
    de_DE: "Studentische Hilfskraft";
  };
  multiLocaleCompanyName: {
    de_DE: "Technische Universität Dresden";
  };
  location: string;
  description: string;
  employmentType: string;
  start: Date;
  end: Date;
}

interface Skill {
  name: string;
}

interface Certification {
  name: "Neural Networks and Deep Learning";
  start: Date;
  end: Date;
  authority: string;
  company: {
    name: string;
    universalName: string;
    logo: string;
    staffCountRange: unknown;
    headquarter: unknown;
  };
  timePeriod: {
    start: Date;
    end: Date;
  };
}

interface Locale {
  country: string;
  language: string;
}

interface MultiLocaleProp {
  [key: string]: string;
}

interface LinkedInProfile {
  firstName: string;
  lastName: string;
  isOpenToWork: boolean;
  isHiring: boolean;
  profilePicture: string;
  summary: string;
  headline: string;
  geo: {
    country: string;
    city: string;
    full: string;
  };
  languages: Language[];
  educations: Education[];
  positions: Position[];
  fullPositions: Position[];
  skills: Skill[];
  givenRecommendation: null;
  receivedRecommendation: null;
  courses: null;
  certifications: Certification[];
  honors: null;
  volunteering: null;
  supportedLocales: Locale[];
  multiLocaleFirstName: MultiLocaleProp;
  multiLocaleLastName: MultiLocaleProp;
  multiLocaleHeadline: MultiLocaleProp;
}

interface Message {
  id: string;
  author: "HUMAN" | "BOT";
  text: string;
}

export type { LinkedInProfile, Message };
