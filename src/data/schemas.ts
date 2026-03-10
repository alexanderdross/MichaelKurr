export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dr.michaelkurr.com/#person",
  name: "Dr. Michael A. Kurr",
  honorificPrefix: "Dr.",
  givenName: "Michael",
  additionalName: "A.",
  familyName: "Kurr",
  url: "https://dr.michaelkurr.com",
  image: "https://dr.michaelkurr.com/images/profile.jpg",
  description:
    "Founder of Dr. Kurr Advisory. Fractional C-level executive and transformation leader with 20+ years of experience across Boehringer Ingelheim, Novartis, and global pharma. Published author and expert in building world-class organizations.",
  sameAs: [
    "https://www.linkedin.com/in/michaelkurr/",
    "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
    "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
    "https://www.alexandria.unisg.ch/persons/247",
    "https://share.google/5Cq7JCmzDsnMDtf1W",
  ],
  jobTitle: "Founder & Fractional C-Level Executive",
  worksFor: [
    {
      "@type": "Organization",
      "@id": "https://dr.michaelkurr.com/#drkurradvisory",
      name: "Dr. Kurr Advisory",
      description:
        "Independent platform for fractional C-level and advisory mandates in Pharma & Life Sciences",
      founder: { "@id": "https://dr.michaelkurr.com/#person" },
      foundingDate: "2026-01",
    },
    {
      "@type": "Organization",
      "@id": "https://dr.michaelkurr.com/#lemnabio",
      name: "Lemna Bio",
      description:
        "Computational drug design company developing complex mini-protein therapeutics",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lausanne",
          addressCountry: "CH",
        },
      },
    },
    {
      "@type": "Organization",
      "@id": "https://dr.michaelkurr.com/#thenacapital",
      name: "THENA Capital",
      description:
        "UK-based specialist MedTech investor focused on early-stage digital and device companies improving patient outcomes",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
      },
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of St. Gallen (HSG)",
      url: "https://www.unisg.ch",
    },
    {
      "@type": "EducationalOrganization",
      name: "RWTH Aachen University",
      url: "https://www.rwth-aachen.de",
    },
    {
      "@type": "EducationalOrganization",
      name: "MIT Sloan School of Management",
      url: "https://mitsloan.mit.edu",
    },
    {
      "@type": "EducationalOrganization",
      name: "IMD Business School",
      url: "https://www.imd.org",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Doctorate",
      name: "Dr. oec. HSG",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "University of St. Gallen (HSG)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Executive MBA",
      name: "Executive MBA",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "University of St. Gallen (HSG)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Executive Certificate",
      name: "Executive Certificate in Digital Business",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "MIT Sloan School of Management",
      },
    },
  ],
  knowsAbout: [
    "Corporate Transformation",
    "Process Reengineering",
    "Global Services Delivery",
    "Cooperation Management",
    "Digital Strategy",
    "AI in Pharmaceuticals",
    "Leadership Development",
    "Fractional C-Level Advisory",
    "Commercial & Medical Operations",
    "Content Supply Chains",
    "Omnichannel Pharma Engagement",
    "Change Management",
    "Organizational Design",
  ],
  nationality: {
    "@type": "Country",
    name: "Germany",
  },
};

export const bookSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": "https://dr.michaelkurr.com/#book-reorganisation",
    name: "Prozessorientierte Reorganisation",
    alternateName:
      "Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen",
    author: [
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#author-schuh",
        name: "Prof. Dr. Günther Schuh",
        honorificPrefix: "Prof. Dr.",
        givenName: "Günther",
        familyName: "Schuh",
        affiliation: {
          "@type": "EducationalOrganization",
          name: "RWTH Aachen University",
        },
        jobTitle: "Professor",
      },
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#author-friedli",
        name: "Prof. Dr. Thomas Friedli",
        honorificPrefix: "Prof. Dr.",
        givenName: "Thomas",
        familyName: "Friedli",
        affiliation: {
          "@type": "EducationalOrganization",
          name: "University of St. Gallen (HSG)",
        },
        jobTitle: "Professor",
      },
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
        url: "https://dr.michaelkurr.com",
        image: "https://dr.michaelkurr.com/images/profile.jpg",
        sameAs: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
      },
    ],
    isbn: "978-3-446-40720-6",
    publisher: {
      "@type": "Organization",
      "@id": "https://dr.michaelkurr.com/#hanser",
      name: "Carl Hanser Verlag",
      url: "https://www.hanser-elibrary.com",
    },
    datePublished: "2006",
    numberOfPages: 204,
    inLanguage: "de",
    about: [
      "Process Reengineering",
      "Business Process Management",
      "Organizational Transformation",
    ],
    url: "https://amzn.to/4b4Ridf",
    sameAs: [
      "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
      "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
    ],
    image: "https://dr.michaelkurr.com/images/book-reorganisation.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": "https://dr.michaelkurr.com/#book-kooperationsmanagement",
    name: "Kooperationsmanagement",
    alternateName:
      "Kooperationsmanagement: Systematische Vorbereitung – Gezielter Auf- und Ausbau – Entscheidende Erfolgsfaktoren",
    author: [
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#author-schuh",
        name: "Prof. Dr. Günther Schuh",
      },
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#author-friedli",
        name: "Prof. Dr. Thomas Friedli",
      },
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
        url: "https://dr.michaelkurr.com",
        image: "https://dr.michaelkurr.com/images/profile.jpg",
        sameAs: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
      },
    ],
    isbn: "978-3-446-40036-8",
    publisher: {
      "@type": "Organization",
      "@id": "https://dr.michaelkurr.com/#hanser",
      name: "Carl Hanser Verlag",
    },
    datePublished: "2005",
    numberOfPages: 207,
    inLanguage: "de",
    about: [
      "Cooperation Management",
      "Strategic Alliances",
      "Inter-company Partnerships",
    ],
    url: "https://amzn.to/3OOyTdn",
    sameAs: [
      "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
    ],
  },
];

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dr.michaelkurr.com/#website",
  name: "Dr. Michael Kurr",
  url: "https://dr.michaelkurr.com",
  description:
    "Personal website of Dr. Michael A. Kurr — Operator & Transformation Leader in Pharma & Life Sciences",
  publisher: { "@id": "https://dr.michaelkurr.com/#person" },
  creator: {
    "@type": "Organization",
    "@id": "https://dross.net/#media",
    name: "Dross:Media",
    url: "https://dross.net/",
  },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.google.com/search?q=site%3Adr.michaelkurr.com+{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://dr.michaelkurr.com/#profilepage",
  name: "Dr. Michael Kurr — Operator & Transformation Leader",
  url: "https://dr.michaelkurr.com",
  description:
    "Professional profile of Dr. Michael A. Kurr — Founder of Dr. Kurr Advisory, fractional C-level executive in Pharma & Life Sciences with 20+ years transforming global organizations.",
  mainEntity: { "@id": "https://dr.michaelkurr.com/#person" },
  isPartOf: { "@id": "https://dr.michaelkurr.com/#website" },
  inLanguage: "en",
  dateCreated: "2026-01-01",
  dateModified: "2026-02-28",
  significantLink: [
    "https://www.linkedin.com/in/michaelkurr/",
    "https://amzn.to/4b4Ridf",
    "https://amzn.to/3OOyTdn",
    "https://www.alexandria.unisg.ch/persons/247",
  ],
};

export const articleSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Success factors for collaboration management in manufacturing companies",
    author: [
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
      },
    ],
    datePublished: "2006",
    pagination: "203-221",
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: "3",
      isPartOf: {
        "@type": "PublicationVolume",
        volumeNumber: "2",
        isPartOf: {
          "@type": "Periodical",
          name: "International Journal of Services and Operations Management",
        },
      },
    },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Aufbau und Nutzen von Kooperationen: ApoKop — ein Erfahrungsbericht aus dem Gesundheitswesen",
    author: [
      {
        "@type": "Person",
        "@id": "https://dr.michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
      },
    ],
    datePublished: "2007",
    isPartOf: {
      "@type": "Periodical",
      name: "Schuh & Co. Komplexitätsmanagement",
    },
    inLanguage: "de",
  },
  {
    "@context": "https://schema.org",
    "@type": "Thesis",
    name: "Potentialorientiertes Kooperationsmanagement in der Zulieferindustrie",
    author: {
      "@type": "Person",
      "@id": "https://dr.michaelkurr.com/#person",
      name: "Dr. Michael A. Kurr",
    },
    datePublished: "2003",
    inSupportOf: "Dr. oec. HSG",
    sourceOrganization: {
      "@type": "EducationalOrganization",
      name: "University of St. Gallen (HSG)",
      url: "https://www.unisg.ch",
    },
    inLanguage: "de",
    url: "https://www.alexandria.unisg.ch/persons/247",
  },
];

export const siteNavigationElements = [
  { name: "Home", url: "https://dr.michaelkurr.com/" },
  { name: "Advisory Services", url: "https://dr.michaelkurr.com/advisory/" },
  { name: "Fractional C-Level Leadership", url: "https://dr.michaelkurr.com/advisory/fractional-c-level-leadership/" },
  { name: "Global Operating Model Design", url: "https://dr.michaelkurr.com/advisory/global-operating-model-design/" },
  { name: "AI & Digital Strategy", url: "https://dr.michaelkurr.com/advisory/ai-digital-strategy/" },
  { name: "Commercial & Medical Operations", url: "https://dr.michaelkurr.com/advisory/commercial-medical-operations/" },
  { name: "Strategic Partnerships & Alliances", url: "https://dr.michaelkurr.com/advisory/strategic-partnerships-alliances/" },
  { name: "Organizational Design & People Strategy", url: "https://dr.michaelkurr.com/advisory/organizational-design-people-strategy/" },
  { name: "The Transformation Circus", url: "https://dr.michaelkurr.com/transformation-circus/" },
  { name: "Contact", url: "https://dr.michaelkurr.com/contact/" },
  { name: "Imprint", url: "https://dr.michaelkurr.com/imprint/" },
  { name: "Privacy Policy", url: "https://dr.michaelkurr.com/privacy-policy/" },
  { name: "Corporate Transformation", url: "https://dr.michaelkurr.com/expertise/corporate-transformation/" },
  { name: "Process Reengineering", url: "https://dr.michaelkurr.com/expertise/process-reengineering/" },
  { name: "Commercial & Medical Operations (Expertise)", url: "https://dr.michaelkurr.com/expertise/commercial-medical-operations/" },
  { name: "Cooperation Management", url: "https://dr.michaelkurr.com/expertise/cooperation-management/" },
  { name: "Digital & AI Strategy", url: "https://dr.michaelkurr.com/expertise/digital-ai-strategy/" },
  { name: "People & Leadership", url: "https://dr.michaelkurr.com/expertise/people-leadership/" },
  { name: "Transparency", url: "https://dr.michaelkurr.com/leadership/transparency/" },
  { name: "Respect", url: "https://dr.michaelkurr.com/leadership/respect/" },
  { name: "Empowerment", url: "https://dr.michaelkurr.com/leadership/empowerment/" },
  { name: "Fairness", url: "https://dr.michaelkurr.com/leadership/fairness/" },
  { name: "Vision", url: "https://dr.michaelkurr.com/leadership/vision/" },
  { name: "Pharma & Biotech", url: "https://dr.michaelkurr.com/industries/pharma-biotech/" },
  { name: "MedTech & Diagnostics", url: "https://dr.michaelkurr.com/industries/medtech-diagnostics/" },
  { name: "Life Sciences Services", url: "https://dr.michaelkurr.com/industries/life-sciences-services/" },
  { name: "HealthTech & Digital Health", url: "https://dr.michaelkurr.com/industries/healthtech-digital-health/" },
  { name: "Automotive & Mobility", url: "https://dr.michaelkurr.com/industries/automotive-mobility/" },
  { name: "Industrial Manufacturing", url: "https://dr.michaelkurr.com/industries/industrial-manufacturing/" },
  { name: "Consumer Goods (CPG)", url: "https://dr.michaelkurr.com/industries/consumer-goods/" },
  { name: "Financial Services", url: "https://dr.michaelkurr.com/industries/financial-services/" },
  { name: "Technology & SaaS", url: "https://dr.michaelkurr.com/industries/technology-saas/" },
  { name: "Energy & Chemicals", url: "https://dr.michaelkurr.com/industries/energy-chemicals/" },
];

export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://dr.michaelkurr.com/#site-navigation",
  name: "Site Navigation",
  itemListElement: siteNavigationElements.map((item, i) => ({
    "@type": "SiteNavigationElement",
    position: i + 1,
    name: item.name,
    url: item.url,
  })),
};

export function makeNavigationSchema(currentUrl: string, currentName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${currentName} — Site Navigation`,
    url: currentUrl,
    itemListElement: siteNavigationElements.map((item, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dr. Michael Kurr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Michael A. Kurr is the Founder of Dr. Kurr Advisory, an independent platform for fractional C-level and advisory mandates in Pharma & Life Sciences. He also serves as Fractional Chief Commercial Officer at Lemna Bio and as a Fellow at THENA Capital. Previously, he was Global Head of Human Pharma Services at Boehringer Ingelheim (2019–2025), where he built the entire global services organization from scratch, scaling it tenfold within four years.",
      },
    },
    {
      "@type": "Question",
      name: "What is Dr. Kurr's area of expertise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Kurr specializes in corporate transformation, process reengineering, commercial and medical operations, cooperation management, digital and AI strategy, and people leadership. He has 20+ years of experience transforming global organizations in pharma and life sciences, including Boehringer Ingelheim, Novartis, Roche Diagnostics, Daimler, and Schott.",
      },
    },
    {
      "@type": "Question",
      name: "What books has Dr. Michael Kurr published?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Kurr co-authored two books published by Carl Hanser Verlag: 'Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen' (2006, 204 pages, ISBN 978-3-446-40720-6) and 'Kooperationsmanagement: Systematische Vorbereitung – Gezielter Auf- und Ausbau – Entscheidende Erfolgsfaktoren' (2005, 207 pages, ISBN 978-3-446-40036-8), both with Prof. Günther Schuh and Prof. Thomas Friedli.",
      },
    },
    {
      "@type": "Question",
      name: "What is Dr. Kurr's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Kurr holds a Doctorate (Dr. oec. HSG) and an Executive MBA from the University of St. Gallen, a Dipl.-Ing. from RWTH Aachen University in Production Management and Manufacturing Technology, an Executive Certificate in Digital Business from MIT Sloan School of Management (2024), and completed three programs at IMD Business School in digital transformation, strategy, and analytics.",
      },
    },
    {
      "@type": "Question",
      name: "What is Dr. Kurr's leadership philosophy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Kurr's leadership is anchored in five core traits: Transparency, Respect, Empowerment, Fairness, and Vision. His core equation is 'Structure follows process follows strategy,' anchored in the three pillars of People, Process, and Technology. He operates by three management rules: avoid assumptions, practice patience and strategic thinking, and stay current by embracing change proactively.",
      },
    },
    {
      "@type": "Question",
      name: "What did Dr. Kurr achieve at Boehringer Ingelheim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Boehringer Ingelheim (2019–2025), Dr. Kurr built the Global Human Pharma Services organization from scratch over 4 years, expanding it tenfold to full geographical scale. The organization included a Global Services Delivery Unit, Digital Content Factory in India, Creative Factory, and a Global Service Layer. External benchmarking studies recognized it as one of the leading content supply chains in the pharmaceutical industry.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Dr. Kurr Advisory offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Kurr Advisory provides strategic clarity, scalable operating model design, and profitable growth advisory for Pharma & Life Sciences organizations. Services include fractional C-level leadership, corporate transformation consulting, go-to-market strategy, digital operations design, and organizational development. Dr. Kurr is available for fractional CCO, CTO, and COO mandates.",
      },
    },
  ],
};

export function makeProductSchema(url: string, ratingCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dr. Kurr Advisory — Fractional C-Level & Transformation Advisory",
    description:
      "Strategic advisory and fractional C-level leadership for Pharma & Life Sciences. Corporate transformation, scalable operating models, and profitable growth.",
    brand: {
      "@type": "Brand",
      name: "Dr. Kurr Advisory",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: String(ratingCount),
    },
  };
}

export const productSchema = makeProductSchema("https://dr.michaelkurr.com/#contact", 148);

export function makeBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function makeSpeakableSchema(url: string, cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

export function makeServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  offerings: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${service.url}#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { "@id": "https://dr.michaelkurr.com/#person" },
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.94, longitude: 6.96 }, geoRadius: "10000" },
    serviceType: "Management Consulting",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o },
      })),
    },
  };
}

export function makeServiceFaqSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const howToEngageSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Engage Dr. Kurr Advisory for Pharma Transformation",
  description:
    "A step-by-step guide to working with Dr. Kurr Advisory for fractional C-level leadership, transformation advisory, or strategic consulting in Pharma & Life Sciences.",
  totalTime: "P14D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Initial Discovery Call",
      text: "Schedule a confidential discovery call to discuss your organization's challenges, transformation goals, and leadership needs. Dr. Kurr will assess strategic fit and identify the right engagement model.",
      url: "https://dr.michaelkurr.com/contact/",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Diagnostic Assessment",
      text: "A focused diagnostic phase to evaluate your current operating model, organizational readiness, and strategic priorities. This includes stakeholder interviews, process mapping, and capability assessment.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Engagement Proposal",
      text: "Based on the diagnostic, Dr. Kurr develops a tailored proposal — whether a fractional C-level mandate (2-3 days/week), a transformation sprint (3-6 months), or board-level strategic advisory.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Embedded Execution",
      text: "Dr. Kurr works as part of your leadership team — not as an external consultant. This means attending board meetings, owning strategic initiatives, managing direct reports, and driving execution alongside the CEO and founding team.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Measurable Outcomes",
      text: "Every engagement is designed to deliver measurable results: operational KPIs, organizational milestones, and strategic objectives. Regular reviews ensure alignment and course-correction as needed.",
    },
  ],
};

export const allSchemas = [
  personSchema,
  bookSchemas,
  websiteSchema,
  profilePageSchema,
  articleSchemas,
  navigationSchema,
  faqSchema,
  productSchema,
];
