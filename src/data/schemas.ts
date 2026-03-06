export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://michaelkurr.com/#person",
  name: "Dr. Michael A. Kurr",
  honorificPrefix: "Dr.",
  givenName: "Michael",
  additionalName: "A.",
  familyName: "Kurr",
  url: "https://michaelkurr.com",
  image: "https://michaelkurr.com/images/profile.jpg",
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
      "@id": "https://michaelkurr.com/#drkurradvisory",
      name: "Dr. Kurr Advisory",
      description:
        "Independent platform for fractional C-level and advisory mandates in Pharma & Life Sciences",
      founder: { "@id": "https://michaelkurr.com/#person" },
      foundingDate: "2026-01",
    },
    {
      "@type": "Organization",
      "@id": "https://michaelkurr.com/#lemnabio",
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
      "@id": "https://michaelkurr.com/#thenacapital",
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
    "@id": "https://michaelkurr.com/#book-reorganisation",
    name: "Prozessorientierte Reorganisation",
    alternateName:
      "Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen",
    author: [
      {
        "@type": "Person",
        "@id": "https://michaelkurr.com/#author-schuh",
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
        "@id": "https://michaelkurr.com/#author-friedli",
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
        "@id": "https://michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
        url: "https://michaelkurr.com",
        image: "https://michaelkurr.com/images/profile.jpg",
        sameAs: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
      },
    ],
    isbn: "978-3-446-40720-6",
    publisher: {
      "@type": "Organization",
      "@id": "https://michaelkurr.com/#hanser",
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
    image: "https://michaelkurr.com/images/book-reorganisation.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": "https://michaelkurr.com/#book-kooperationsmanagement",
    name: "Kooperationsmanagement",
    alternateName:
      "Kooperationsmanagement: Systematische Vorbereitung – Gezielter Auf- und Ausbau – Entscheidende Erfolgsfaktoren",
    author: [
      {
        "@type": "Person",
        "@id": "https://michaelkurr.com/#author-schuh",
        name: "Prof. Dr. Günther Schuh",
      },
      {
        "@type": "Person",
        "@id": "https://michaelkurr.com/#author-friedli",
        name: "Prof. Dr. Thomas Friedli",
      },
      {
        "@type": "Person",
        "@id": "https://michaelkurr.com/#person",
        name: "Dr. Michael A. Kurr",
        url: "https://michaelkurr.com",
        image: "https://michaelkurr.com/images/profile.jpg",
        sameAs: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
      },
    ],
    isbn: "978-3-446-40036-8",
    publisher: {
      "@type": "Organization",
      "@id": "https://michaelkurr.com/#hanser",
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
  "@id": "https://michaelkurr.com/#website",
  name: "Dr. Michael Kurr",
  url: "https://michaelkurr.com",
  description:
    "Personal website of Dr. Michael A. Kurr — Operator & Transformation Leader in Pharma & Life Sciences",
  publisher: { "@id": "https://michaelkurr.com/#person" },
  inLanguage: "en",
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://michaelkurr.com/#profilepage",
  name: "Dr. Michael Kurr — Operator & Transformation Leader",
  url: "https://michaelkurr.com",
  description:
    "Professional profile of Dr. Michael A. Kurr — Founder of Dr. Kurr Advisory, fractional C-level executive in Pharma & Life Sciences with 20+ years transforming global organizations.",
  mainEntity: { "@id": "https://michaelkurr.com/#person" },
  isPartOf: { "@id": "https://michaelkurr.com/#website" },
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
        "@id": "https://michaelkurr.com/#person",
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
        "@id": "https://michaelkurr.com/#person",
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
      "@id": "https://michaelkurr.com/#person",
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
  { name: "Home", url: "https://michaelkurr.com/" },
  { name: "About", url: "https://michaelkurr.com/#about" },
  { name: "Expertise", url: "https://michaelkurr.com/#expertise" },
  { name: "Impact", url: "https://michaelkurr.com/#impact" },
  { name: "Publications", url: "https://michaelkurr.com/#publications" },
  { name: "Leadership", url: "https://michaelkurr.com/#leadership" },
  { name: "Recommendations", url: "https://michaelkurr.com/#recommendations" },
  { name: "Contact", url: "https://michaelkurr.com/#contact" },
  { name: "Advisory Services", url: "https://michaelkurr.com/advisory/" },
  { name: "The Transformation Circus", url: "https://michaelkurr.com/transformation-circus/" },
  { name: "Contact Page", url: "https://michaelkurr.com/contact/" },
  { name: "Imprint", url: "https://michaelkurr.com/imprint/" },
  { name: "Privacy Policy", url: "https://michaelkurr.com/privacy-policy/" },
  { name: "Corporate Transformation", url: "https://michaelkurr.com/expertise/corporate-transformation/" },
  { name: "Process Reengineering", url: "https://michaelkurr.com/expertise/process-reengineering/" },
  { name: "Commercial & Medical Operations", url: "https://michaelkurr.com/expertise/commercial-medical-operations/" },
  { name: "Cooperation Management", url: "https://michaelkurr.com/expertise/cooperation-management/" },
  { name: "Digital & AI Strategy", url: "https://michaelkurr.com/expertise/digital-ai-strategy/" },
  { name: "People & Leadership", url: "https://michaelkurr.com/expertise/people-leadership/" },
  { name: "Transparency", url: "https://michaelkurr.com/leadership/transparency/" },
  { name: "Respect", url: "https://michaelkurr.com/leadership/respect/" },
  { name: "Empowerment", url: "https://michaelkurr.com/leadership/empowerment/" },
  { name: "Fairness", url: "https://michaelkurr.com/leadership/fairness/" },
  { name: "Vision", url: "https://michaelkurr.com/leadership/vision/" },
];

export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://michaelkurr.com/#site-navigation",
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

export const productSchema = makeProductSchema("https://michaelkurr.com/#contact", 148);

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
