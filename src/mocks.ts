import { LinkedInProfile, Message } from "./interfaces";

const fakeProfile: LinkedInProfile = {
  firstName: "Guilherme",
  lastName: "Calábria Lopes",
  isOpenToWork: true,
  isHiring: false,
  profilePicture:
    "https://media.licdn.com/dms/image/C5603AQE1JMWe6xqg4Q/profile-displayphoto-shrink_800_800/0/1517524736301?e=1718236800&v=beta&t=jQ9Duco4Hb2CgGykmDIVG17JoZer0mjDelgi1wsyRrY",
  summary: "",
  headline:
    "Studentische Hilfskraft @ Technische Universität Dresden | Information Retrieval, LLMs, Neural Networks, Deep Learning",
  geo: {
    country: "Germany",
    city: "Berlin, Berlin",
    full: "Berlin, Berlin, Germany",
  },
  languages: [
    {
      name: "Deutsch",
      proficiency: "PROFESSIONAL_WORKING",
    },
    {
      name: "Englisch",
      proficiency: "FULL_PROFESSIONAL",
    },
    {
      name: "Portugiesisch",
      proficiency: "NATIVE_OR_BILINGUAL",
    },
    {
      name: "Schwedisch",
      proficiency: "ELEMENTARY",
    },
    {
      name: "Spanisch",
      proficiency: "LIMITED_WORKING",
    },
  ],
  educations: [
    {
      start: {
        year: 2016,
        month: 0,
        day: 0,
      },
      end: {
        year: 2023,
        month: 10,
        day: 0,
      },
      fieldOfStudy: "Informatik",
      degree: "Diplom",
      grade: "",
      schoolName: "Technische Universität Dresden",
      description: "",
      activities: "",
      url: "https://www.linkedin.com/school/tu-dresden/",
      schoolId: "12236",
    },
    {
      start: {
        year: 2009,
        month: 0,
        day: 0,
      },
      end: {
        year: 2015,
        month: 0,
        day: 0,
      },
      fieldOfStudy: "Maschinenbau",
      degree: "Diplom-Ingenieur",
      grade: "",
      schoolName: "Universidade Federal de Minas Gerais",
      description: "",
      activities: "",
      url: "https://www.linkedin.com/school/ufmg/",
      schoolId: "15171",
    },
    {
      start: {
        year: 2013,
        month: 0,
        day: 0,
      },
      end: {
        year: 2014,
        month: 0,
        day: 0,
      },
      fieldOfStudy: "Maschinenbau",
      degree: "",
      grade: "",
      schoolName: "Technische Universität Bergakademie Freiberg",
      description: "Exchange Program",
      activities: "",
      url: "https://www.linkedin.com/school/tu-freiberg.de/",
      schoolId: "412321",
    },
  ],
  position: [
    {
      companyName: "Technische Universität Dresden",
      companyUsername: "tu-dresden",
      companyURL: "https://www.linkedin.com/school/tu-dresden/",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQGSf2Po21RKDQ/company-logo_400_400/0/1630475865780/tu_dresden_logo?e=1720656000&v=beta&t=0s_h8wnQxOXNCNjdHT5gKq80sgAprzXH2cOirNDQAzQ",
      companyIndustry: "Research",
      companyStaffCountRange: "10001 - 0",
      title: "Studentische Hilfskraft",
      multiLocaleTitle: {
        de_DE: "Studentische Hilfskraft",
      },
      multiLocaleCompanyName: {
        de_DE: "Technische Universität Dresden",
      },
      location: "Dresden, Sachsen, Deutschland",
      description:
        "Research into different methods for semantic code retrieval\n- Expand documents using LLMs to improve the efficiency of traditional IR techniques\n- Develop novel techniques to extract semantic information from code and use it to expand documents\n- Fine-tune LLMs for generative retrieval of mathematical documents",
      employmentType: "Part-time",
      start: {
        year: 2021,
        month: 5,
        day: 0,
      },
      end: {
        year: 2023,
        month: 11,
        day: 0,
      },
    },
    {
      companyName: "Descript GmbH",
      companyUsername: "descript-solutions",
      companyURL: "https://www.linkedin.com/company/descript-solutions/",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQG0Cu9gfQFZwQ/company-logo_400_400/0/1630561296168/descript_gmbh_logo?e=1720656000&v=beta&t=2Ub9bSLzqoNgQmIl7LphNy1Ym6PUs91Otzks8TYXR0k",
      companyIndustry: "Information Technology & Services",
      companyStaffCountRange: "11 - 50",
      title: "Werkstudent Frontend Web Entwickler",
      multiLocaleTitle: {
        de_DE: "Werkstudent Frontend Web Entwickler",
      },
      multiLocaleCompanyName: {
        de_DE: "Descript GmbH",
      },
      location: "Dresden und Umgebung, Deutschland",
      description: "",
      employmentType: "",
      start: {
        year: 2017,
        month: 8,
        day: 0,
      },
      end: {
        year: 2020,
        month: 4,
        day: 0,
      },
    },
  ],
  fullPositions: [
    {
      companyName: "Technische Universität Dresden",
      companyUsername: "tu-dresden",
      companyURL: "https://www.linkedin.com/school/tu-dresden/",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQGSf2Po21RKDQ/company-logo_400_400/0/1630475865780/tu_dresden_logo?e=1720656000&v=beta&t=0s_h8wnQxOXNCNjdHT5gKq80sgAprzXH2cOirNDQAzQ",
      companyIndustry: "Research",
      companyStaffCountRange: "10001 - 0",
      title: "Studentische Hilfskraft",
      multiLocaleTitle: {
        de_DE: "Studentische Hilfskraft",
      },
      multiLocaleCompanyName: {
        de_DE: "Technische Universität Dresden",
      },
      location: "Dresden, Sachsen, Deutschland",
      description:
        "Research into different methods for semantic code retrieval\n- Expand documents using LLMs to improve the efficiency of traditional IR techniques\n- Develop novel techniques to extract semantic information from code and use it to expand documents\n- Fine-tune LLMs for generative retrieval of mathematical documents",
      employmentType: "Part-time",
      start: {
        year: 2021,
        month: 5,
        day: 0,
      },
      end: {
        year: 2023,
        month: 11,
        day: 0,
      },
    },
    {
      companyName: "Descript GmbH",
      companyUsername: "descript-solutions",
      companyURL: "https://www.linkedin.com/company/descript-solutions/",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQG0Cu9gfQFZwQ/company-logo_400_400/0/1630561296168/descript_gmbh_logo?e=1720656000&v=beta&t=2Ub9bSLzqoNgQmIl7LphNy1Ym6PUs91Otzks8TYXR0k",
      companyIndustry: "Information Technology & Services",
      companyStaffCountRange: "11 - 50",
      title: "Werkstudent Frontend Web Entwickler",
      multiLocaleTitle: {
        de_DE: "Werkstudent Frontend Web Entwickler",
      },
      multiLocaleCompanyName: {
        de_DE: "Descript GmbH",
      },
      location: "Dresden und Umgebung, Deutschland",
      description: "",
      employmentType: "",
      start: {
        year: 2017,
        month: 8,
        day: 0,
      },
      end: {
        year: 2020,
        month: 4,
        day: 0,
      },
    },
  ],
  skills: [
    {
      name: "Linux",
    },
    {
      name: "Git",
    },
    {
      name: "Natural Language Processing (NLP)",
    },
    {
      name: "Deep Learning",
    },
    {
      name: "Machine Learning Algorithms",
    },
    {
      name: "Information Retrieval",
    },
    {
      name: "Large Language Models (LLM)",
    },
    {
      name: "Transformers",
    },
    {
      name: "XML",
    },
    {
      name: "Data Science",
    },
    {
      name: "Time Series Forecasting",
    },
    {
      name: "Machine Learning",
    },
    {
      name: "High Performance Computing (HPC)",
    },
    {
      name: "Jupyter",
    },
    {
      name: "Pandas (Software)",
    },
    {
      name: "PyTorch",
    },
    {
      name: "Huggingface",
    },
    {
      name: "Microsoft Office",
    },
    {
      name: "Microsoft Excel",
    },
    {
      name: "Englisch",
    },
  ],
  givenRecommendation: null,
  receivedRecommendation: null,
  courses: null,
  certifications: [
    {
      name: "Neural Networks and Deep Learning",
      start: {
        year: 2023,
        month: 5,
        day: 0,
      },
      end: {
        year: 0,
        month: 0,
        day: 0,
      },
      authority: "Coursera",
      company: {
        name: "Coursera",
        universalName: "coursera",
        logo: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1630530042036/coursera_logo?e=1720656000&v=beta&t=T10zWFYkkVxZxEqfxV2re7Mf2B_bLpFVGUHfnGvp0hs",
        staffCountRange: {},
        headquarter: {},
      },
      timePeriod: {
        start: {
          year: 0,
          month: 0,
          day: 0,
        },
        end: {
          year: 0,
          month: 0,
          day: 0,
        },
      },
    },
  ],
  honors: null,
  volunteering: null,
  supportedLocales: [
    {
      country: "DE",
      language: "de",
    },
  ],
  multiLocaleFirstName: {
    de: "Guilherme",
  },
  multiLocaleLastName: {
    de: "Calábria Lopes",
  },
  multiLocaleHeadline: {
    de: "Studentische Hilfskraft @ Technische Universität Dresden | Information Retrieval, LLMs, Neural Networks, Deep Learning",
  },
};

const fakeResponse = {
  data: {
    firstName: "Guilherme",
    lastName: "Calábria Lopes",
    isOpenToWork: true,
    isHiring: false,
    profilePicture:
      "https://media.licdn.com/dms/image/C5603AQE1JMWe6xqg4Q/profile-displayphoto-shrink_800_800/0/1517524736301?e=1718236800&v=beta&t=jQ9Duco4Hb2CgGykmDIVG17JoZer0mjDelgi1wsyRrY",
    summary: "",
    headline:
      "Studentische Hilfskraft @ Technische Universität Dresden | Information Retrieval, LLMs, Neural Networks, Deep Learning",
    geo: {
      country: "Germany",
      city: "Berlin, Berlin",
      full: "Berlin, Berlin, Germany",
    },
    languages: [
      {
        name: "Deutsch",
        proficiency: "PROFESSIONAL_WORKING",
      },
      {
        name: "Englisch",
        proficiency: "FULL_PROFESSIONAL",
      },
      {
        name: "Portugiesisch",
        proficiency: "NATIVE_OR_BILINGUAL",
      },
      {
        name: "Schwedisch",
        proficiency: "ELEMENTARY",
      },
      {
        name: "Spanisch",
        proficiency: "LIMITED_WORKING",
      },
    ],
    educations: [
      {
        start: {
          year: 2016,
          month: 0,
          day: 0,
        },
        end: {
          year: 2023,
          month: 10,
          day: 0,
        },
        fieldOfStudy: "Informatik",
        degree: "Diplom",
        grade: "",
        schoolName: "Technische Universität Dresden",
        description: "",
        activities: "",
        url: "https://www.linkedin.com/school/tu-dresden/",
        schoolId: "12236",
      },
      {
        start: {
          year: 2009,
          month: 0,
          day: 0,
        },
        end: {
          year: 2015,
          month: 0,
          day: 0,
        },
        fieldOfStudy: "Maschinenbau",
        degree: "Diplom-Ingenieur",
        grade: "",
        schoolName: "Universidade Federal de Minas Gerais",
        description: "",
        activities: "",
        url: "https://www.linkedin.com/school/ufmg/",
        schoolId: "15171",
      },
      {
        start: {
          year: 2013,
          month: 0,
          day: 0,
        },
        end: {
          year: 2014,
          month: 0,
          day: 0,
        },
        fieldOfStudy: "Maschinenbau",
        degree: "",
        grade: "",
        schoolName: "Technische Universität Bergakademie Freiberg",
        description: "Exchange Program",
        activities: "",
        url: "https://www.linkedin.com/school/tu-freiberg.de/",
        schoolId: "412321",
      },
    ],
    position: [
      {
        companyName: "Technische Universität Dresden",
        companyUsername: "tu-dresden",
        companyURL: "https://www.linkedin.com/school/tu-dresden/",
        companyLogo:
          "https://media.licdn.com/dms/image/C4D0BAQGSf2Po21RKDQ/company-logo_400_400/0/1630475865780/tu_dresden_logo?e=1720656000&v=beta&t=0s_h8wnQxOXNCNjdHT5gKq80sgAprzXH2cOirNDQAzQ",
        companyIndustry: "Research",
        companyStaffCountRange: "10001 - 0",
        title: "Studentische Hilfskraft",
        multiLocaleTitle: {
          de_DE: "Studentische Hilfskraft",
        },
        multiLocaleCompanyName: {
          de_DE: "Technische Universität Dresden",
        },
        location: "Dresden, Sachsen, Deutschland",
        description:
          "Research into different methods for semantic code retrieval\n- Expand documents using LLMs to improve the efficiency of traditional IR techniques\n- Develop novel techniques to extract semantic information from code and use it to expand documents\n- Fine-tune LLMs for generative retrieval of mathematical documents",
        employmentType: "Part-time",
        start: {
          year: 2021,
          month: 5,
          day: 0,
        },
        end: {
          year: 2023,
          month: 11,
          day: 0,
        },
      },
      {
        companyName: "Descript GmbH",
        companyUsername: "descript-solutions",
        companyURL: "https://www.linkedin.com/company/descript-solutions/",
        companyLogo:
          "https://media.licdn.com/dms/image/C4D0BAQG0Cu9gfQFZwQ/company-logo_400_400/0/1630561296168/descript_gmbh_logo?e=1720656000&v=beta&t=2Ub9bSLzqoNgQmIl7LphNy1Ym6PUs91Otzks8TYXR0k",
        companyIndustry: "Information Technology & Services",
        companyStaffCountRange: "11 - 50",
        title: "Werkstudent Frontend Web Entwickler",
        multiLocaleTitle: {
          de_DE: "Werkstudent Frontend Web Entwickler",
        },
        multiLocaleCompanyName: {
          de_DE: "Descript GmbH",
        },
        location: "Dresden und Umgebung, Deutschland",
        description: "",
        employmentType: "",
        start: {
          year: 2017,
          month: 8,
          day: 0,
        },
        end: {
          year: 2020,
          month: 4,
          day: 0,
        },
      },
    ],
    fullPositions: [
      {
        companyName: "Technische Universität Dresden",
        companyUsername: "tu-dresden",
        companyURL: "https://www.linkedin.com/school/tu-dresden/",
        companyLogo:
          "https://media.licdn.com/dms/image/C4D0BAQGSf2Po21RKDQ/company-logo_400_400/0/1630475865780/tu_dresden_logo?e=1720656000&v=beta&t=0s_h8wnQxOXNCNjdHT5gKq80sgAprzXH2cOirNDQAzQ",
        companyIndustry: "Research",
        companyStaffCountRange: "10001 - 0",
        title: "Studentische Hilfskraft",
        multiLocaleTitle: {
          de_DE: "Studentische Hilfskraft",
        },
        multiLocaleCompanyName: {
          de_DE: "Technische Universität Dresden",
        },
        location: "Dresden, Sachsen, Deutschland",
        description:
          "Research into different methods for semantic code retrieval\n- Expand documents using LLMs to improve the efficiency of traditional IR techniques\n- Develop novel techniques to extract semantic information from code and use it to expand documents\n- Fine-tune LLMs for generative retrieval of mathematical documents",
        employmentType: "Part-time",
        start: {
          year: 2021,
          month: 5,
          day: 0,
        },
        end: {
          year: 2023,
          month: 11,
          day: 0,
        },
      },
      {
        companyName: "Descript GmbH",
        companyUsername: "descript-solutions",
        companyURL: "https://www.linkedin.com/company/descript-solutions/",
        companyLogo:
          "https://media.licdn.com/dms/image/C4D0BAQG0Cu9gfQFZwQ/company-logo_400_400/0/1630561296168/descript_gmbh_logo?e=1720656000&v=beta&t=2Ub9bSLzqoNgQmIl7LphNy1Ym6PUs91Otzks8TYXR0k",
        companyIndustry: "Information Technology & Services",
        companyStaffCountRange: "11 - 50",
        title: "Werkstudent Frontend Web Entwickler",
        multiLocaleTitle: {
          de_DE: "Werkstudent Frontend Web Entwickler",
        },
        multiLocaleCompanyName: {
          de_DE: "Descript GmbH",
        },
        location: "Dresden und Umgebung, Deutschland",
        description: "",
        employmentType: "",
        start: {
          year: 2017,
          month: 8,
          day: 0,
        },
        end: {
          year: 2020,
          month: 4,
          day: 0,
        },
      },
    ],
    skills: [
      {
        name: "Linux",
      },
      {
        name: "Git",
      },
      {
        name: "Natural Language Processing (NLP)",
      },
      {
        name: "Deep Learning",
      },
      {
        name: "Machine Learning Algorithms",
      },
      {
        name: "Information Retrieval",
      },
      {
        name: "Large Language Models (LLM)",
      },
      {
        name: "Transformers",
      },
      {
        name: "XML",
      },
      {
        name: "Data Science",
      },
      {
        name: "Time Series Forecasting",
      },
      {
        name: "Machine Learning",
      },
      {
        name: "High Performance Computing (HPC)",
      },
      {
        name: "Jupyter",
      },
      {
        name: "Pandas (Software)",
      },
      {
        name: "PyTorch",
      },
      {
        name: "Huggingface",
      },
      {
        name: "Microsoft Office",
      },
      {
        name: "Microsoft Excel",
      },
      {
        name: "Englisch",
      },
    ],
    givenRecommendation: null,
    receivedRecommendation: null,
    courses: null,
    certifications: [
      {
        name: "Neural Networks and Deep Learning",
        start: {
          year: 2023,
          month: 5,
          day: 0,
        },
        end: {
          year: 0,
          month: 0,
          day: 0,
        },
        authority: "Coursera",
        company: {
          name: "Coursera",
          universalName: "coursera",
          logo: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1630530042036/coursera_logo?e=1720656000&v=beta&t=T10zWFYkkVxZxEqfxV2re7Mf2B_bLpFVGUHfnGvp0hs",
          staffCountRange: {},
          headquarter: {},
        },
        timePeriod: {
          start: {
            year: 0,
            month: 0,
            day: 0,
          },
          end: {
            year: 0,
            month: 0,
            day: 0,
          },
        },
      },
    ],
    honors: null,
    volunteering: null,
    supportedLocales: [
      {
        country: "DE",
        language: "de",
      },
    ],
    multiLocaleFirstName: {
      de: "Guilherme",
    },
    multiLocaleLastName: {
      de: "Calábria Lopes",
    },
    multiLocaleHeadline: {
      de: "Studentische Hilfskraft @ Technische Universität Dresden | Information Retrieval, LLMs, Neural Networks, Deep Learning",
    },
  },
  status: 200,
  statusText: "",
  headers: {
    "access-control-allow-credentials": "true",
    "access-control-allow-origin": "http://localhost:5173",
    "content-type": "application/json",
    date: "Tue, 09 Apr 2024 17:53:29 GMT",
    server: "RapidAPI-1.2.8",
    "x-rapidapi-region": "AWS - eu-central-1",
    "x-rapidapi-version": "1.2.8",
    "x-ratelimit-credits-limit": "50",
    "x-ratelimit-credits-remaining": "47",
    "x-ratelimit-credits-reset": "2588083",
    "x-ratelimit-rapid-free-plans-hard-limit-limit": "500000",
    "x-ratelimit-rapid-free-plans-hard-limit-remaining": "499997",
    "x-ratelimit-rapid-free-plans-hard-limit-reset": "2588083",
    "x-ratelimit-requests-limit": "100",
    "x-ratelimit-requests-remaining": "97",
    "x-ratelimit-requests-reset": "2588083",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ["xhr", "http"],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: "application/json, text/plain, */*",
      "X-RapidAPI-Key": "b551f4841amsh8279ccf4c2a4582p1937c2jsnd5fea3ce5a6b",
      "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
    },
    params: {
      username: "gcalabria",
    },
    method: "get",
    url: "https://linkedin-api8.p.rapidapi.com/",
  },
  request: {},
};

const fakeMessages: Message[] = [
  {
    id: "1",
    author: "HUMAN",
    text: "Tell me a joke",
  },
  {
    id: "2",
    author: "BOT",
    text: "Why did the dog enter the chirch? Because the door was open.",
  },
  // {
  //   id: "3",
  //   author: "HUMAN",
  //   text: "That is not so funny. Tell me another joke",
  // },
  // {
  //   id: "4",
  //   author: "BOT",
  //   text: "Why are colds bad criminals? Because they're easy to catch.",
  // },
  // {
  //   id: "5",
  //   author: "HUMAN",
  //   text: "Tell me a joke",
  // },
  // {
  //   id: "6",
  //   author: "BOT",
  //   text: "Why did the dog enter the chirch? Because the door was open.",
  // },
  // {
  //   id: "7",
  //   author: "HUMAN",
  //   text: "That is not so funny. Tell me another joke",
  // },
  // {
  //   id: "8",
  //   author: "BOT",
  //   text: "Why are colds bad criminals? Because they're easy to catch.",
  // },
  // {
  //   id: "9",
  //   author: "HUMAN",
  //   text: "Tell me a joke",
  // },
  // {
  //   id: "10",
  //   author: "BOT",
  //   text: "Why did the dog enter the chirch? Because the door was open.",
  // },
  // {
  //   id: "11",
  //   author: "HUMAN",
  //   text: "That is not so funny. Tell me another joke",
  // },
  // {
  //   id: "12",
  //   author: "BOT",
  //   text: "Why are colds bad criminals? Because they're easy to catch.",
  // },
  // {
  //   id: "13",
  //   author: "HUMAN",
  //   text: "Tell me a joke",
  // },
  // {
  //   id: "14",
  //   author: "BOT",
  //   text: "Why did the dog enter the chirch? Because the door was open.",
  // },
  // {
  //   id: "15",
  //   author: "HUMAN",
  //   text: "That is not so funny. Tell me another joke. That is not so funny. Tell me another joke That is not so funny. Tell me another joke That is not so funny. Tell me another joke",
  // },
  // {
  //   id: "16",
  //   author: "BOT",
  //   text: "Why are colds bad criminals? Because they're easy to catch. Why are colds bad criminals? Because they're easy to catch. Why are colds bad criminals? Because they're easy to catch. Why are colds bad criminals? Because they're easy to catch. Why are colds bad criminals? Because they're easy to catch. Why are colds bad criminals? Because they're easy to catch.",
  // },
];

export { fakeResponse, fakeMessages, fakeProfile };
