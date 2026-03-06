export interface AdvisoryService {
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
  offerings: string[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
}

export const advisoryServicesData: AdvisoryService[] = [
  {
    slug: "fractional-c-level-leadership",
    title: "Fractional C-Level Leadership",
    tagline:
      "Part-time executive bandwidth for organizations that need senior leadership without the full-time commitment",
    description:
      "Not every organization needs — or can justify — a full-time C-level hire. But every organization in transition needs experienced executive leadership. Fractional C-level mandates give you the strategic depth, board-level presence, and hands-on guidance of a seasoned executive at a fraction of the cost. Dr. Kurr currently serves as Fractional Chief Commercial Officer at Lemna Bio and as Fellow at THENA Capital, bringing this model to life across biotech and MedTech.",
    sections: [
      {
        heading: "What Fractional Leadership Looks Like in Practice",
        content:
          "Fractional C-level leadership is not consulting. It is embedded executive presence — typically 2-3 days per week — with real accountability, team ownership, and board-level authority. Dr. Kurr works as part of the leadership team, not as an external advisor looking in. This means attending board meetings, owning strategic initiatives, managing direct reports, and driving execution alongside the CEO and founding team. The model works especially well for scale-ups moving from founder-led to professionally managed, portfolio companies under investor oversight, and organizations navigating executive transitions.",
      },
      {
        heading: "Roles Dr. Kurr Fills",
        content:
          "The most common fractional mandates are Chief Commercial Officer (CCO) — leading commercial strategy, go-to-market operations, partnerships, and revenue growth; Chief Transformation Officer (CTO) — driving end-to-end organizational transformation, operating model redesign, and digital enablement; and Chief Operating Officer (COO) — overseeing operational excellence, service delivery, and cross-functional process optimization. Dr. Kurr also serves as interim executive during leadership transitions and as a C-suite sparring partner for CEOs and founders navigating complex strategic decisions.",
      },
      {
        heading: "Why This Works for Pharma & Life Sciences",
        content:
          "Regulated industries require executives who understand compliance, market access, medical affairs, and the unique dynamics of pharma commercialization. A fractional leader from outside the industry creates risk. Dr. Kurr brings 20+ years of direct pharma experience — at Boehringer Ingelheim, Novartis, and now across biotech and MedTech — ensuring that strategic decisions are grounded in deep domain knowledge. At Lemna Bio, he leads commercial strategy and partnership development for a computational drug design company. At THENA Capital, he provides strategic counsel to a specialist MedTech investor evaluating early-stage digital health and device companies.",
      },
      {
        heading: "The Business Case",
        content:
          "A full-time C-level executive in pharma commands a total cost of €400-600K+ annually. A fractional mandate delivers the same caliber of leadership at 30-50% of that cost — with the flexibility to scale engagement up or down as the business evolves. For investors, this means deploying experienced operating leadership across portfolio companies without the overhead. For founders, it means accessing executive experience that would otherwise be out of reach.",
      },
    ],
    highlights: [
      { value: "2-3", label: "Days per week, embedded in the leadership team" },
      { value: "20+", label: "Years of C-level pharma experience" },
      { value: "3", label: "Active mandates across biotech, MedTech, and advisory" },
    ],
    offerings: [
      "Fractional Chief Commercial Officer (CCO)",
      "Fractional Chief Transformation Officer (CTO)",
      "Fractional Chief Operating Officer (COO)",
      "Interim leadership during executive transitions",
      "C-suite coaching and executive sparring",
    ],
    relatedLinks: [
      {
        label: "About Lemna Bio — Computational Drug Design",
        href: "https://www.lemnabio.com/",
      },
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
  {
    slug: "global-operating-model-design",
    title: "Global Operating Model Design",
    tagline:
      "Scalable operating models that balance centralization with local agility",
    description:
      "An operating model is the bridge between strategy and execution. When it works, the organization scales efficiently. When it doesn't, even brilliant strategies fail in delivery. Dr. Kurr specializes in designing and implementing global operating models that balance centralization with local agility — including shared services, offshoring, nearshoring, and hybrid delivery structures. His work at Boehringer Ingelheim resulted in one of the industry's leading content supply chains, built from zero to full global scale in four years.",
    sections: [
      {
        heading: "Structure Follows Process Follows Strategy",
        content:
          "Dr. Kurr's operating model philosophy is rooted in a core equation: structure follows process follows strategy. Too many organizations restructure without first rethinking their processes or clarifying their strategy. The result is expensive reorganization that changes reporting lines but not outcomes. Every operating model engagement begins with strategic clarity — what is the organization trying to achieve, for whom, and at what scale? — then moves to process architecture, and only then to organizational structure. This disciplined sequence, anchored in the three pillars of People, Process, and Technology, prevents the common pitfall of reorganizing without rethinking how work actually gets done.",
      },
      {
        heading: "Shared Services, Offshoring, and Nearshoring",
        content:
          "Dr. Kurr has deep experience designing and launching global service centers. At Boehringer Ingelheim, he built a Digital Content Factory in India (an offshore production center), a Creative Factory, and a Global Services Delivery Unit — all integrated into a single, scalable operating model. The insource vs. outsource decision is never binary. The right model depends on capability maturity, regulatory requirements, cost structures, and talent availability. Dr. Kurr helps organizations make these decisions systematically, using stage-gate transition planning that de-risks the journey from current state to target state.",
      },
      {
        heading: "Vendor and Partner Ecosystem Optimization",
        content:
          "Most pharma organizations work with dozens of external partners — agencies, technology vendors, BPO providers, consultancies. Without deliberate ecosystem management, this creates duplication, quality inconsistency, and spiraling costs. Dr. Kurr's approach includes vendor consolidation, performance management frameworks, and strategic partnership design. His published research on cooperation management provides the academic foundation for this work, while his operational experience at Boehringer Ingelheim (where he built a strategic partnership with Indegene for go-to-market transformation) provides the practical blueprint.",
      },
      {
        heading: "From Design to Implementation",
        content:
          "Operating model design without implementation is just a slide deck. Dr. Kurr stays through the transition — from design through piloting, rollout, and stabilization. At Boehringer Ingelheim, the first geography (Singapore/ASKAN region) went live in early 2020, and within four years the organization had achieved full geographical scale covering all markets worldwide. This hands-on implementation experience — not just advisory — is what separates Dr. Kurr's approach from traditional consulting engagements.",
      },
    ],
    highlights: [
      { value: "#1", label: "Content supply chain in pharma per external benchmarks" },
      { value: "4 years", label: "From zero to full global operating scale" },
      { value: "10x", label: "Organization growth under this model" },
    ],
    offerings: [
      "Insource vs. outsource strategy",
      "Off- and nearshoring center design",
      "Shared services center build-out",
      "Vendor and partner ecosystem optimization",
      "Stage-gate transition planning",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "ai-digital-strategy",
    title: "AI & Digital Strategy for Regulated Industries",
    tagline:
      "Practical AI adoption that works within pharma compliance frameworks — no hype, just results",
    description:
      "AI is transforming every industry — but in pharma, adoption must work within strict regulatory and compliance frameworks. Dr. Kurr helps organizations move beyond the AI hype to identify practical, governed use cases that deliver measurable value. His approach combines hands-on experience building AI-enabled operations at Boehringer Ingelheim with academic partnerships in AI and data science, and executive education from MIT Sloan's Digital Business program.",
    sections: [
      {
        heading: "AI That Fits Governed Workflows",
        content:
          "The biggest challenge in pharma AI adoption is not the technology — it is governance. Medical, legal, and regulatory (MLR) review workflows, pharmacovigilance requirements, and data privacy regulations create constraints that most AI vendors do not understand. Dr. Kurr has built AI-enabled operations inside these constraints. At Boehringer Ingelheim, he integrated AI and data science into go-to-market operations while maintaining full compliance with pharma-specific regulatory requirements. The key is human-in-the-loop governance design — ensuring that AI accelerates human decision-making without removing accountability.",
      },
      {
        heading: "Agentic AI for Commercial Operations",
        content:
          "The next frontier is agentic AI — autonomous AI systems that can execute multi-step workflows with minimal human intervention. In pharma commercial operations, this means AI agents that can draft content, route it through approval workflows, personalize omnichannel engagement, and optimize field force deployment. Dr. Kurr helps organizations develop agentic AI strategies that are both ambitious and realistic — identifying which workflows are ready for autonomy, which require human oversight, and how to build the governance frameworks that make agentic AI safe in regulated environments.",
      },
      {
        heading: "Content Supply Chain Automation",
        content:
          "Dr. Kurr built what external benchmarks called one of the leading content supply chains in the pharma industry. AI played a central role — from automated content generation and localization to intelligent routing and performance analytics. Content supply chain automation in pharma requires understanding the full value chain: from medical review through creative production, localization, regulatory approval, and multichannel distribution. Dr. Kurr's experience covers the entire chain, not just point solutions.",
      },
      {
        heading: "AI Readiness and Roadmap",
        content:
          "Most organizations are not ready for AI — not because the technology is not available, but because their data, processes, and governance structures are not mature enough to support it. Dr. Kurr's AI readiness assessment evaluates organizational maturity across five dimensions: data infrastructure, process standardization, governance frameworks, talent and skills, and change readiness. The result is a prioritized roadmap that sequences AI adoption based on organizational readiness, not technology trends. His executive education at MIT Sloan (Digital Business, 2024) and his AI and Data Science fellowship partnership with Eberhard Karls Universität Tübingen provide the academic foundation for this work.",
      },
    ],
    highlights: [
      { value: "MIT", label: "Executive Certificate in Digital Business (2024)" },
      { value: "3", label: "IMD digital strategy programs completed" },
      { value: "#1", label: "AI-enabled content supply chain in pharma" },
    ],
    offerings: [
      "AI readiness assessment and roadmap",
      "Agentic AI strategy for commercial operations",
      "MLR workflow optimization with AI",
      "Content supply chain automation",
      "Human-in-the-loop governance design",
    ],
    relatedLinks: [
      {
        label: "MIT Sloan Executive Education — Digital Business",
        href: "https://executive.mit.edu/",
      },
    ],
  },
  {
    slug: "commercial-medical-operations",
    title: "Commercial & Medical Operations Transformation",
    tagline:
      "Redesigning go-to-market and medical affairs operations for efficiency, scale, and omnichannel engagement",
    description:
      "Pharma commercial and medical operations are under unprecedented pressure — shrinking field forces, rising omnichannel expectations, and increasingly complex regulatory environments. Dr. Kurr brings direct experience redesigning these operations at global scale, having built Boehringer Ingelheim's entire go-to-market services organization from scratch and transforming it into one of the industry's most benchmarked delivery models.",
    sections: [
      {
        heading: "Building an Industry-Leading Service Organization",
        content:
          "As Global Head of Human Pharma Services at Boehringer Ingelheim (2019-2025), Dr. Kurr built the entire go-to-market services organization from a standing start. This included a Global Services Delivery Unit for digital support operations, a Digital Content Factory (offshore production center in India), a Creative Factory launched in 2023, a Global Services Operations Team, and a Global Service Layer Organization with eight colleagues embedded across global markets. The organization expanded tenfold under his leadership and achieved full geographical coverage within four years.",
      },
      {
        heading: "Omnichannel Engagement at Scale",
        content:
          "Modern pharma go-to-market requires seamless omnichannel engagement — coordinating field force visits, medical education, digital content, email campaigns, and HCP portals into a single, data-driven experience. Dr. Kurr's partnership with Indegene at Boehringer Ingelheim transformed go-to-market operations and enabled better physician and patient engagement through more agile, data-driven, omnichannel approaches. This is not about adding channels — it is about designing an operating model that orchestrates them effectively.",
      },
      {
        heading: "Content Factory and Creative Services",
        content:
          "Pharma content production is uniquely complex — subject to medical, legal, and regulatory (MLR) review, localization requirements across dozens of markets, and brand consistency standards. Dr. Kurr designed and launched both a Digital Content Factory and a Creative Factory, creating a production system that delivers content at scale while maintaining quality and compliance. The content factory model reduces production timelines, lowers per-asset costs, and creates the operational infrastructure needed for personalized, omnichannel content at scale.",
      },
      {
        heading: "Medical Affairs and Market Access",
        content:
          "Commercial transformation in pharma cannot ignore medical affairs and market access — both are increasingly central to commercial success. Dr. Kurr's approach integrates medical affairs services optimization (including medical information, medical education, and publication support) with commercial operations to create a unified go-to-market model. Market access and value management are addressed as part of the operating model, not as separate functions competing for resources.",
      },
    ],
    highlights: [
      { value: "10x", label: "Organization growth at Boehringer Ingelheim" },
      { value: "#1", label: "Content supply chain per external benchmarks" },
      { value: "4 years", label: "From zero to full global coverage" },
    ],
    offerings: [
      "Go-to-market operating model redesign",
      "Content factory and creative services build",
      "Omnichannel engagement strategy",
      "Medical affairs services optimization",
      "Market access and value management",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "strategic-partnerships-alliances",
    title: "Strategic Partnerships & Alliances",
    tagline:
      "Structuring, launching, and managing strategic cooperations based on published research and 20+ years of partnership management",
    description:
      "Strategic partnerships are among the most powerful — and most mismanaged — levers in business. Dr. Kurr literally wrote the book on cooperation management. His co-authored work 'Kooperationsmanagement' (Carl Hanser Verlag, 2005) provides a systematic framework for building successful inter-company cooperations, and his 20+ years of operational experience have put that research into practice across pharma, biotech, MedTech, and manufacturing.",
    sections: [
      {
        heading: "Published Research on Cooperation Management",
        content:
          "Dr. Kurr's academic work at the University of St. Gallen focused on collaboration management in the developing and manufacturing supplier industry. His doctoral thesis — 'Potentialorientiertes Kooperationsmanagement in der Zulieferindustrie' — and his co-authored book 'Kooperationsmanagement: Systematische Vorbereitung – Gezielter Auf- und Ausbau – Entscheidende Erfolgsfaktoren' provide a step-by-step methodology for systematic preparation, targeted development, and critical success factors of inter-company partnerships. His academic paper 'Success factors for collaboration management in manufacturing companies' (International Journal of Services and Operations Management, 2006) further codifies these principles.",
      },
      {
        heading: "Strategic Partner Selection and Due Diligence",
        content:
          "The most common partnership failure mode is poor partner selection. Dr. Kurr's framework begins with rigorous strategic partner assessment — evaluating strategic fit, capability complementarity, cultural alignment, and risk profiles before any engagement begins. At Boehringer Ingelheim, he built a strategic partnership with Indegene that transformed go-to-market operations across global markets. At THENA Capital, he evaluates potential portfolio companies through a partnership and collaboration lens, assessing not just the company's technology but its ability to build and maintain the partnerships required for commercial success.",
      },
      {
        heading: "Partnership Governance and Performance Management",
        content:
          "A partnership without governance is just a contract. Dr. Kurr designs governance structures that create accountability, align incentives, and build escalation paths before problems arise. This includes joint steering committees, shared KPIs, regular business reviews, and clear decision rights. Performance management frameworks ensure that partnerships deliver the value they promised — and provide early warning signals when they don't. This approach transforms vendor relationships from transactional to strategic.",
      },
      {
        heading: "Vendor Consolidation and Ecosystem Design",
        content:
          "Most large pharma organizations work with too many external partners — creating duplication, quality inconsistency, and spiraling costs. Dr. Kurr helps organizations rationalize their vendor ecosystem through deliberate consolidation and partnership tiering. The goal is not fewer vendors for the sake of fewer — it is a deliberately designed ecosystem where each partner has a clear role, clear expectations, and clear accountability. This approach typically reduces costs by 15-25% while improving quality and delivery speed.",
      },
    ],
    highlights: [
      { value: "2", label: "Books published on cooperation management" },
      { value: "20+", label: "Years of partnership management experience" },
      { value: "3", label: "Academic papers on collaboration success factors" },
    ],
    offerings: [
      "Strategic partner selection and due diligence",
      "Partnership governance design",
      "Vendor consolidation and optimization",
      "Joint venture and alliance structuring",
      "Partnership performance management",
    ],
    relatedLinks: [
      {
        label: "Book: Kooperationsmanagement — Hanser Verlag",
        href: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
      },
      {
        label: "Research: Success factors for collaboration management",
        href: "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
      },
    ],
  },
  {
    slug: "organizational-design-people-strategy",
    title: "Organizational Design & People Strategy",
    tagline:
      "Building high-performing global teams from the ground up that attract talent, empower leaders, and scale without losing culture",
    description:
      "Organizations don't transform — people do. Dr. Kurr's approach to organizational design puts people at the center, creating structures that attract talent, empower leaders, and scale without losing the culture that made the organization successful in the first place. His leadership philosophy — built on transparency, respect, empowerment, fairness, and vision — has been validated through building and leading global teams across multiple organizations.",
    sections: [
      {
        heading: "Building Global Teams from Scratch",
        content:
          "At Boehringer Ingelheim, Dr. Kurr didn't just build an organization — he built a culture. Starting with a blank canvas, he recruited, developed, and retained a diverse global team that expanded tenfold in four years. The Global Service Layer Organization placed eight colleagues across global markets, each serving as the local face of a centralized capability. Building global teams requires deliberate attention to cultural context, communication patterns, and local empowerment within a global framework. Dr. Kurr's teams consistently delivered because they were built on trust and accountability, not control.",
      },
      {
        heading: "Organization Design for Transformation",
        content:
          "Organizational design is not about drawing boxes on a chart. It is about creating structures that enable strategy execution. Dr. Kurr designs organizations using his core equation — structure follows process follows strategy — ensuring that every role, reporting line, and governance mechanism exists to enable a specific strategic outcome. This includes matrix organization design, center of excellence models, federated vs. centralized structures, and global-local balance frameworks. The design process always starts with the work that needs to be done, then creates the structure to do it.",
      },
      {
        heading: "Talent Strategy for Transformation Programs",
        content:
          "Transformation programs fail without the right people — but 'right people' doesn't mean hiring the most experienced candidates. It means creating a talent strategy that matches the transformation's phase. Early-stage transformations need entrepreneurial builders. Scaling phases need operators and process designers. Mature organizations need optimizers and innovators. Dr. Kurr helps organizations identify which talent profiles they need at each phase and build recruiting, development, and retention strategies that match.",
      },
      {
        heading: "Change Management and Leadership Development",
        content:
          "Change management is not a communications exercise — it is a leadership discipline. Dr. Kurr's approach to change management is rooted in his five core leadership traits: transparency (clear communication fostering trust, especially in uncertain environments), respect (conveyed through communication style and interaction quality), empowerment (avoiding micromanagement, enabling teams to make decisions with accountability), fairness (described as 'one of the most important things in life'), and vision (providing a North Star and compelling direction beyond strategy). Leadership development programs based on these principles create leaders who can sustain transformation long after the advisor has left.",
      },
    ],
    highlights: [
      { value: "10x", label: "Team growth under Dr. Kurr's leadership" },
      { value: "5", label: "Core leadership traits driving organizational culture" },
      { value: "20+", label: "Years developing high-performing global teams" },
    ],
    offerings: [
      "Organization design and restructuring",
      "Global team build-out and scaling",
      "Talent strategy for transformation programs",
      "Change management and adoption",
      "Leadership development and team coaching",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
];

export function getAdvisoryServiceBySlug(slug: string): AdvisoryService | undefined {
  return advisoryServicesData.find((s) => s.slug === slug);
}

export function getAllAdvisoryServiceSlugs(): string[] {
  return advisoryServicesData.map((s) => s.slug);
}
