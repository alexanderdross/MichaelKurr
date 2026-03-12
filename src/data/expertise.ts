export interface ExpertiseItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  sections: {
    heading: string;
    content: string;
  }[];
  highlights: {
    value: string;
    label: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    slug: "corporate-transformation",
    title: "Corporate Transformation",
    tagline:
      "Building and scaling organizations from the ground up across global markets",
    description:
      "Dr. Kurr has spent over two decades leading large-scale corporate transformations - turning strategic visions into fully operational, globally scaled organizations. His signature approach combines rigorous process architecture with a deep commitment to people and culture.",
    sections: [
      {
        heading: "Building from Scratch at Boehringer Ingelheim",
        content:
          "As Global Head of Human Pharma Services (2019–2025), Dr. Kurr built the entire Global Human Pharma Services organization from the ground up. Starting with a blank canvas, he designed and launched a multi-layered services organization that included a Global Services Delivery Unit, a Digital Content Factory in India, a Creative Factory, and a Global Service Layer spanning every market worldwide. The first geography - Singapore and the ASKAN region - went live in early 2020, and within four years the organization had achieved full geographical scale.",
      },
      {
        heading: "A Proven Framework",
        content:
          'Dr. Kurr\'s transformation methodology is rooted in a core equation: "Structure follows process follows strategy." Every transformation begins with strategic clarity, moves to process architecture, and only then addresses organizational structure. This disciplined sequence - anchored in the three pillars of People, Process, and Technology - prevents the common pitfall of reorganizing without rethinking how work actually gets done.',
      },
      {
        heading: "Transforming at Novartis",
        content:
          "During eight years at Novartis (2011–2019), Dr. Kurr led transformation initiatives across Global Business Services and Product Lifecycle Services in Europe. As Senior Global Program Lead for GBS, he drove cross-functional service integration across Basel and Milan. Later, as Head of Business Service Excellence for Region Europe, he standardized and scaled service delivery models across the continent.",
      },
    ],
    highlights: [
      { value: "10x", label: "Organization growth at Boehringer Ingelheim" },
      { value: "4 years", label: "From zero to full global scale" },
      { value: "6+", label: "Major organizations transformed" },
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality - CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "process-reengineering",
    title: "Process Reengineering",
    tagline:
      "Designing process-oriented enterprises that balance radical change with the human factor",
    description:
      "Dr. Kurr's academic research and consulting career have been deeply rooted in process-oriented reorganization - the discipline of fundamentally redesigning business processes to achieve dramatic improvements in performance, quality, and efficiency while keeping people at the center.",
    sections: [
      {
        heading: "Published Authority",
        content:
          'Dr. Kurr co-authored "Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen" (Carl Hanser Verlag, 2006) with Prof. Günther Schuh and Prof. Thomas Friedli. The book provides a comprehensive framework for managing reengineering projects that combines radical process change with the human factor - featuring real-world case studies from Schiesser, Alu Menziken, and Lista. It remains a key reference for process reengineering in German-speaking management practice.',
      },
      {
        heading: "From Theory to Practice",
        content:
          "Before joining the corporate world, Dr. Kurr served as a management consultant at Schuh & Co. GmbH, where he helped organizations across manufacturing, automotive (Daimler), and specialty materials (Schott) redesign their core processes. His consulting work consistently bridged the gap between academic rigor and operational reality - a philosophy shaped by his doctoral research at the University of St. Gallen.",
      },
      {
        heading: "Academic Foundations",
        content:
          "Dr. Kurr earned his doctorate (Dr. oec. HSG) from the University of St. Gallen, researching collaboration management in the developing and manufacturing supplier industry. His academic work at the Institute for Technology Management (ITEM/TECTEM) gave him deep insight into how process architecture drives organizational effectiveness in complex, multi-stakeholder environments.",
      },
    ],
    highlights: [
      {
        value: "204 pages",
        label: "Published guide on process-oriented reorganization",
      },
      {
        value: "3",
        label: "Industrial case studies documented",
      },
      {
        value: "20+ years",
        label: "Applying reengineering principles in practice",
      },
    ],
    relatedLinks: [
      {
        label: "Prozessorientierte Reorganisation - Hanser eLibrary",
        href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
      },
      {
        label: "Book on Amazon",
        href: "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
      },
    ],
  },
  {
    slug: "commercial-medical-operations",
    title: "Commercial & Medical Operations",
    tagline:
      "Building scalable operating models for content, omnichannel, analytics, and digital operations",
    description:
      "Dr. Kurr has deep operational expertise in building and running commercial and medical services at global scale - from content supply chains and omnichannel engagement to analytics platforms and digital operations. His work at Boehringer Ingelheim set an industry benchmark.",
    sections: [
      {
        heading: "Industry-Leading Content Supply Chain",
        content:
          'At Boehringer Ingelheim, Dr. Kurr built what external benchmarking studies recognized as "one of the leading content supply chains in the industry." The operation encompassed end-to-end content creation, review, approval, and distribution across all global markets - supported by a Digital Content Factory (offshore production center in India), a Creative Factory launched in 2023, and a Global Services Operations Team that ensured quality and consistency at scale.',
      },
      {
        heading: "Omnichannel & Go-to-Market Transformation",
        content:
          'Dr. Kurr led the strategic partnership with Indegene to transform Boehringer Ingelheim\'s go-to-market operations. As he noted: "Over the last 3 years, Indegene has helped us transform our go-to-market operations and enable better physician and patient engagement via more agile, data-driven, omnichannel ways." This transformation covered the full spectrum of commercial and medical engagement - from HCP interactions to patient-facing content.',
      },
      {
        heading: "Fractional CCO at Lemna Bio",
        content:
          "Building on this track record, Dr. Kurr now serves as Fractional Chief Commercial Officer at Lemna Bio, a computational drug design company in Lausanne. Here he brings his operational playbook to an early-stage biotech context - developing commercial strategy and partnership frameworks for a company pioneering complex mini-protein therapeutics.",
      },
    ],
    highlights: [
      {
        value: "#1",
        label: "Content supply chain per external benchmarks",
      },
      {
        value: "Global",
        label: "Coverage across all markets worldwide",
      },
      {
        value: "3 units",
        label:
          "Digital Content Factory, Creative Factory, Services Delivery",
      },
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality - CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "cooperation-management",
    title: "Cooperation Management",
    tagline: "Orchestrating strategic alliances and inter-company partnerships",
    description:
      "Cooperation management - the systematic design, build-up, and governance of inter-company partnerships - has been a central theme throughout Dr. Kurr's career, from his doctoral dissertation to his published books and strategic partnership work in industry.",
    sections: [
      {
        heading: "Published Framework",
        content:
          'Dr. Kurr co-authored "Kooperationsmanagement: Systematische Vorbereitung – Gezielter Auf- und Ausbau – Entscheidende Erfolgsfaktoren" (Carl Hanser Verlag, 2005) with Prof. Günther Schuh and Prof. Thomas Friedli. The book delivers a step-by-step guide for building successful inter-company cooperations - covering systematic preparation, targeted development, and the critical success factors that determine whether partnerships thrive or fail.',
      },
      {
        heading: "Academic Research",
        content:
          'Dr. Kurr\'s doctoral dissertation at the University of St. Gallen - "Collaboration management in the developing and manufacturing supplier industry: from strategy development to operations" - provided the theoretical foundation for his practical work. His research identified the success factors that distinguish high-performing cooperations from those that stagnate, contributing to the academic field through publications in the International Journal of Services and Operations Management and SATW-Bulletin.',
      },
      {
        heading: "Strategic Partnerships in Practice",
        content:
          "At Boehringer Ingelheim, Dr. Kurr orchestrated the strategic partnership with Indegene for go-to-market transformation and established an AI and Data Science fellowship partnership with Eberhard Karls Universität Tübingen. At Novartis, he managed cross-functional service partnerships spanning Basel, Milan, and Nuremberg. His work consistently demonstrates that successful cooperation requires more than a signed contract - it demands structured governance, aligned incentives, and continuous relationship management.",
      },
    ],
    highlights: [
      {
        value: "207 pages",
        label: "Published guide on cooperation management",
      },
      {
        value: "Dissertation",
        label: "Doctoral research in cooperation management",
      },
      {
        value: "Multiple",
        label: "Strategic partnerships built in pharma",
      },
    ],
    relatedLinks: [
      {
        label: "Kooperationsmanagement - Hanser Fachbuch",
        href: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
      },
      {
        label: "University of St. Gallen - Research Profile",
        href: "https://www.alexandria.unisg.ch/persons/247",
      },
    ],
  },
  {
    slug: "digital-ai-strategy",
    title: "Digital & AI Strategy",
    tagline:
      "Leveraging AI, data science, and digital technologies for competitive advantage",
    description:
      "Dr. Kurr combines executive-level digital leadership with formal education from MIT Sloan and IMD to help organizations harness AI, data science, and digital technologies for strategic advantage in the pharmaceutical and life sciences industries.",
    sections: [
      {
        heading: "Executive Education in Digital & AI",
        content:
          "Dr. Kurr has pursued a deliberate trajectory of digital upskilling at the world's leading institutions. He completed an Executive Certificate in Digital Business at MIT Sloan School of Management (2024), studied Digital Strategy and Analytics and TransformTECH at IMD (2020), and completed Leading Digital Business Transformation at IMD (2019). This combination of academic rigor and practical leadership gives him a rare ability to bridge the gap between AI/digital technology and business strategy.",
      },
      {
        heading: "AI Fellowship & Data Science in Pharma",
        content:
          "At Boehringer Ingelheim, Dr. Kurr established an AI and Data Science fellowship partnership with Eberhard Karls Universität Tübingen - one of Germany's leading AI research institutions. This collaboration brought cutting-edge data science capabilities into the go-to-market services organization, enabling more data-driven, predictive approaches to physician and patient engagement.",
      },
      {
        heading: "Digital Operations at Scale",
        content:
          "Dr. Kurr's digital expertise is not theoretical - it was forged in building and running large-scale digital operations. The Digital Content Factory and data-driven omnichannel operations he built at Boehringer Ingelheim required deep fluency in content management platforms, analytics tools, marketing automation, and digital workflow orchestration. Now, as a Fellow at THENA Capital - a UK-based specialist MedTech investor - he evaluates early-stage digital and device companies through the lens of both technological potential and operational scalability.",
      },
    ],
    highlights: [
      {
        value: "MIT Sloan",
        label: "Executive Certificate in Digital Business",
      },
      {
        value: "3 programs",
        label: "Completed at IMD in digital transformation",
      },
      {
        value: "AI fellowship",
        label: "Partnership with Universität Tübingen",
      },
    ],
    relatedLinks: [],
  },
  {
    slug: "people-leadership",
    title: "People & Leadership",
    tagline:
      "Developing high-performing global teams through empowerment, trust, and vision",
    description:
      "Dr. Kurr's leadership philosophy centers on five core traits - Transparency, Respect, Empowerment, Fairness, and Vision - and a belief that great organizations are built by investing in people first. His approach has guided the development of high-performing teams across continents and cultures.",
    sections: [
      {
        heading: "Five Core Leadership Traits",
        content:
          'Dr. Kurr\'s leadership is anchored in five principles he has refined through decades of managing global teams. Transparency - clear communication that fosters trust, especially in uncertain environments. Respect - conveyed through the quality of every interaction. Empowerment - trusting teams to make decisions with accountability, avoiding micromanagement. Fairness - which he describes as "one of the most important things in life," the foundation on which all else rests. And Vision - providing a North Star and compelling direction that goes beyond strategy.',
      },
      {
        heading: "Scaling Teams Globally",
        content:
          'At Boehringer Ingelheim, Dr. Kurr grew his organization tenfold - from a small team to a global operation spanning every market. As one colleague noted: "Michael established Boehringer\'s service and delivery organisation from scratch. He is admired for his bold vision, incredible focus on people development, and ability to make things happen." This growth was achieved not through top-down mandates, but through empowering local leaders while maintaining a coherent global operating model.',
      },
      {
        heading: "Three Management Rules",
        content:
          "Beyond his leadership traits, Dr. Kurr operates by three management rules that he has distilled from his experience. First: avoid assumptions - reality always looks different. Second: practice patience and strategic thinking in corporate environments. Third: stay current and relevant by embracing change proactively. These rules reflect a leader who values intellectual humility, long-term thinking, and the discipline to evolve continuously.",
      },
    ],
    highlights: [
      {
        value: "5",
        label: "Core leadership traits",
      },
      {
        value: "10x",
        label: "Team growth under his leadership",
      },
      {
        value: "Global",
        label: "Teams built across all markets",
      },
    ],
    relatedLinks: [],
  },
];

export function getExpertiseBySlug(slug: string): ExpertiseItem | undefined {
  return expertiseData.find((item) => item.slug === slug);
}

export function getAllExpertiseSlugs(): string[] {
  return expertiseData.map((item) => item.slug);
}
