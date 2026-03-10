export interface Industry {
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

export const industriesData: Industry[] = [
  {
    slug: "pharma-biotech",
    title: "Pharma & Biotech",
    tagline:
      "Strategic transformation and commercial operations advisory for large pharma, specialty pharma, and emerging biotech companies",
    description:
      "The pharmaceutical and biotech industry is undergoing a generational shift — from blockbuster models to precision medicine, from field-force-driven to omnichannel engagement, from manual operations to AI-enabled workflows. Dr. Kurr has spent over 20 years at the heart of this transformation, leading global change programs at Boehringer Ingelheim and Novartis, and now advising biotech companies through Dr. Kurr Advisory and his fractional CCO role at Lemna Bio.",
    sections: [
      {
        heading: "Large Pharma Transformations",
        content:
          "Large pharma organizations face a unique challenge: transforming at scale without disrupting commercial operations or regulatory compliance. Dr. Kurr has led enterprise-wide transformation programs at Boehringer Ingelheim and Novartis, redesigning operating models, building global service organizations, and implementing digital workflows across dozens of markets simultaneously. His approach — structure follows process follows strategy — ensures that reorganizations create real operational improvement, not just new reporting lines. At Boehringer Ingelheim, this approach delivered a tenfold organization expansion and full global coverage in four years.",
      },
      {
        heading: "Specialty Pharma Scale-Up",
        content:
          "Specialty pharma companies operate in a different paradigm — smaller patient populations, complex distribution, and specialized HCP engagement. Scaling commercial operations in specialty pharma requires operating models that are lean but sophisticated: targeted go-to-market strategies, efficient content supply chains, and compliance frameworks adapted to niche therapeutic areas. Dr. Kurr helps specialty pharma organizations build scalable commercial infrastructure without the overhead of large pharma organizational complexity.",
      },
      {
        heading: "Emerging Biotech Commercialization",
        content:
          "For emerging biotech companies transitioning from R&D to commercial stage, the leap to market readiness is one of the most critical — and most frequently mismanaged — milestones. Dr. Kurr's fractional C-level model is purpose-built for this transition: providing experienced commercial leadership without the full-time cost. At Lemna Bio, he leads commercial strategy and partnership development for a computational drug design company, bringing the same rigor he applied at Boehringer Ingelheim to a pre-commercial biotech context. This includes market shaping, commercial partnership structuring, go-to-market planning, and organizational readiness.",
      },
      {
        heading: "Go-to-Market Redesign",
        content:
          "Traditional pharma go-to-market models — field-force-centric, territory-based, and siloed by function — are no longer fit for purpose. Modern go-to-market requires omnichannel orchestration, data-driven targeting, and integrated commercial-medical engagement. Dr. Kurr built Boehringer Ingelheim's go-to-market services organization from scratch, including a Digital Content Factory, Creative Factory, and Global Services Delivery Unit. His strategic partnership with Indegene transformed go-to-market operations across global markets, enabling more agile, data-driven, omnichannel physician and patient engagement.",
      },
    ],
    highlights: [
      { value: "20+", label: "Years in pharma transformation" },
      { value: "10x", label: "Organization growth at Boehringer Ingelheim" },
      { value: "#1", label: "Content supply chain in the industry" },
    ],
    offerings: [
      "Large pharma transformations",
      "Specialty pharma scale-up",
      "Emerging biotech commercialization",
      "Go-to-market redesign",
      "Omnichannel engagement strategy",
    ],
    relatedLinks: [
      {
        label: "About Lemna Bio — Computational Drug Design",
        href: "https://www.lemnabio.com/",
      },
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "medtech-diagnostics",
    title: "MedTech & Diagnostics",
    tagline:
      "Commercial operations optimization, digital health strategy, and device company scaling for MedTech and diagnostics organizations",
    description:
      "MedTech and diagnostics companies face a distinct set of challenges: complex regulatory pathways, reimbursement uncertainty, and the need to scale commercial operations rapidly in competitive markets. Dr. Kurr brings direct experience in this sector — through his Fellowship at THENA Capital, a UK-based specialist MedTech investor, and his earlier career at Roche Diagnostics — combined with transferable transformation expertise from large pharma.",
    sections: [
      {
        heading: "Commercial Operations Optimization",
        content:
          "MedTech commercial operations often evolve organically, creating complexity that hampers growth. Sales processes, distributor management, customer service, and field operations accumulate layers of inefficiency as companies scale from startup to mid-market. Dr. Kurr applies the same operating model discipline that transformed large pharma operations to MedTech — identifying process bottlenecks, redesigning workflows, and implementing scalable service delivery models. The key difference is pace: MedTech transformations must move faster, with less organizational inertia but also fewer resources to absorb transition costs.",
      },
      {
        heading: "Digital Health Strategy",
        content:
          "Digital health is reshaping the MedTech landscape — from connected devices and remote monitoring to AI-powered diagnostics and digital therapeutics. But technology alone does not create value. Dr. Kurr helps MedTech companies develop digital health strategies that connect technology capabilities to commercial outcomes: which digital features drive adoption, how to position digital solutions for reimbursement, and how to build the operational infrastructure to support digital-physical hybrid products. His work at THENA Capital provides insight into what investors look for in digital health companies, informing strategy from both the operator and investor perspectives.",
      },
      {
        heading: "Device Company Scaling",
        content:
          "Scaling a device company from early-stage to commercial success requires navigating regulatory approvals, building manufacturing and supply chain capabilities, establishing distribution networks, and building a commercial organization — often simultaneously. Dr. Kurr's fractional C-level model provides the executive bandwidth needed during this critical phase. His experience building organizations from scratch at Boehringer Ingelheim translates directly to the device company context: the same principles of structure follows process follows strategy apply, adapted to the faster timelines and leaner resources of the MedTech sector.",
      },
      {
        heading: "Market Access and Reimbursement",
        content:
          "Reimbursement is the single most important commercial lever for many MedTech and diagnostics companies. Without a clear pathway to reimbursement, even breakthrough technologies fail commercially. Dr. Kurr helps companies develop market access strategies that begin early — during product development — and integrate health economics, clinical evidence generation, and payer engagement into the overall commercial strategy. His cross-industry experience ensures that market access is not treated as a standalone function but as an integral part of the go-to-market model.",
      },
    ],
    highlights: [
      { value: "THENA", label: "Fellow at specialist MedTech investor" },
      { value: "Roche", label: "Direct diagnostics industry experience" },
      { value: "20+", label: "Years of cross-industry transformation" },
    ],
    offerings: [
      "Commercial operations optimization",
      "Digital health strategy",
      "Device company scaling",
      "Market access and reimbursement",
      "Distributor and channel management",
    ],
    relatedLinks: [
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
  {
    slug: "life-sciences-services",
    title: "Life Sciences Services",
    tagline:
      "CRO/CDMO optimization, contract commercialization, and global capability build-out for life sciences service organizations",
    description:
      "Life sciences services companies — CROs, CDMOs, contract commercial organizations, and specialized service providers — operate at the intersection of operational excellence and client service. Dr. Kurr's experience building and scaling internal service organizations at Boehringer Ingelheim, combined with his research on cooperation management, provides a unique perspective on optimizing service delivery, client relationships, and operational scalability in this sector.",
    sections: [
      {
        heading: "CRO / CDMO Optimization",
        content:
          "Contract research and manufacturing organizations face constant pressure to improve efficiency, reduce timelines, and maintain quality across an increasingly complex portfolio of client engagements. Dr. Kurr's expertise in global operating model design — including shared services, offshoring, and process standardization — applies directly to CRO/CDMO operations. His approach focuses on identifying which processes can be standardized and centralized, which require local flexibility, and how to build governance structures that balance efficiency with client-specific requirements. The result is an operating model that scales without sacrificing quality or responsiveness.",
      },
      {
        heading: "Contract Commercialization (CCO)",
        content:
          "Contract commercial organizations provide outsourced commercial capabilities — from sales force deployment to medical affairs support to content production. Dr. Kurr built exactly this type of organization inside Boehringer Ingelheim, giving him a unique insider perspective on what makes contract commercial services successful. He understands both sides: what the client organization needs (flexibility, quality, cost predictability) and what the service organization needs (standardization, talent development, technology infrastructure). This dual perspective makes his advisory work with CCOs and CSOs uniquely practical and grounded.",
      },
      {
        heading: "Service Delivery Transformation",
        content:
          "Service delivery in life sciences is being transformed by technology — AI-enabled workflows, automated quality checks, digital collaboration platforms, and data-driven performance management. But technology adoption in service organizations requires careful change management: client-facing teams resist changes that might disrupt established relationships, and quality standards in regulated environments create additional constraints. Dr. Kurr's experience managing precisely this type of transformation at Boehringer Ingelheim — introducing AI and digital tools into regulated service delivery workflows — provides the practical blueprint for life sciences service organizations looking to modernize.",
      },
      {
        heading: "Global Capability Build-Out",
        content:
          "Life sciences service companies expanding globally face the challenge of replicating service quality across different geographies while adapting to local regulatory requirements, talent markets, and client expectations. Dr. Kurr achieved full geographical scale at Boehringer Ingelheim within four years, starting with the Singapore/ASKAN region and expanding to cover all markets worldwide. His stage-gate transition planning methodology — piloting in select geographies, stabilizing, and then scaling — de-risks global expansion and ensures consistent service delivery across markets.",
      },
    ],
    highlights: [
      { value: "4 years", label: "From zero to full global scale" },
      { value: "#1", label: "Content supply chain in pharma" },
      { value: "10x", label: "Service organization growth" },
    ],
    offerings: [
      "CRO / CDMO optimization",
      "Contract commercialization (CCO)",
      "Service delivery transformation",
      "Global capability build-out",
      "Client relationship and governance design",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "healthtech-digital-health",
    title: "HealthTech & Digital Health",
    tagline:
      "Enterprise AI adoption, platform go-to-market strategy, and regulatory technology strategy for HealthTech and digital health companies",
    description:
      "HealthTech and digital health companies are building the infrastructure that will power the next generation of healthcare delivery. But the path from innovative technology to commercial success in healthcare is uniquely challenging — regulatory complexity, long sales cycles, reimbursement uncertainty, and the need to integrate with legacy clinical workflows. Dr. Kurr brings a rare combination of deep pharma industry knowledge and hands-on digital transformation experience to help HealthTech companies navigate this landscape.",
    sections: [
      {
        heading: "Enterprise AI Adoption",
        content:
          "Enterprise AI in healthcare is not just about algorithms — it is about governance, integration, and trust. Healthcare organizations adopt AI slowly because the stakes are high: patient safety, regulatory compliance, and clinical validation requirements create barriers that do not exist in other industries. Dr. Kurr helps HealthTech companies understand and navigate these barriers, developing go-to-market strategies that address enterprise buyers' concerns around governance, data privacy, and clinical validation. His experience building AI-enabled operations at Boehringer Ingelheim — within strict regulatory and compliance frameworks — provides the practical insight that HealthTech companies need to sell into pharma and healthcare organizations.",
      },
      {
        heading: "Platform Go-to-Market Strategy",
        content:
          "HealthTech platforms face a classic chicken-and-egg problem: they need users to demonstrate value, but they need to demonstrate value to attract users. Dr. Kurr helps platform companies develop go-to-market strategies that break this cycle — identifying beachhead use cases, designing partnership-driven adoption models, and building the commercial organization needed to sell complex platform solutions to enterprise healthcare buyers. His experience with strategic partnerships and ecosystem design, grounded in his published research on cooperation management, is particularly relevant for platform businesses that depend on partner ecosystems for distribution and integration.",
      },
      {
        heading: "Regulatory Technology Strategy",
        content:
          "RegTech in healthcare is an emerging category with enormous potential — automating compliance workflows, streamlining regulatory submissions, and enabling real-time pharmacovigilance monitoring. But selling regulatory technology to pharma and healthcare organizations requires deep understanding of their regulatory processes, compliance requirements, and risk tolerance. Dr. Kurr bridges this gap: his operational experience inside pharma organizations means he understands the buyer's perspective, while his advisory role allows him to help HealthTech companies position their products effectively. This includes regulatory strategy consulting, compliance framework design, and go-to-market planning specifically for RegTech solutions.",
      },
      {
        heading: "Health Data Analytics Operations",
        content:
          "Health data analytics is only as good as the operational infrastructure behind it — data pipelines, governance frameworks, quality assurance processes, and the organizational capabilities to act on insights. Dr. Kurr helps HealthTech companies build the operational backbone that turns data analytics capabilities into sustainable commercial advantage. His experience building content supply chains and digital operations at Boehringer Ingelheim provides a transferable blueprint: the same principles of process standardization, quality management, and scalable delivery apply to health data analytics operations. His MIT Sloan executive education in digital business and his AI fellowship with the University of Tübingen provide the academic foundation for this work.",
      },
    ],
    highlights: [
      { value: "MIT", label: "Executive Certificate in Digital Business" },
      { value: "3", label: "IMD digital strategy programs" },
      { value: "AI", label: "Fellowship with University of Tübingen" },
    ],
    offerings: [
      "Enterprise AI adoption strategy",
      "Platform go-to-market strategy",
      "Regulatory technology strategy",
      "Health data analytics operations",
      "Digital health commercial planning",
    ],
    relatedLinks: [
      {
        label: "MIT Sloan Executive Education — Digital Business",
        href: "https://executive.mit.edu/",
      },
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
  {
    slug: "automotive-mobility",
    title: "Automotive & Mobility",
    tagline:
      "Operating model redesign, supply chain cooperation management, and digital transformation advisory for automotive OEMs, suppliers, and mobility companies",
    description:
      "The automotive industry is undergoing its most fundamental transformation in a century — electrification, software-defined vehicles, autonomous driving, and new mobility models are reshaping every aspect of the business. Dr. Kurr brings direct automotive experience from his career at Daimler (now Mercedes-Benz) and deep expertise in operating model design, cooperation management, and organizational transformation that transfers directly to the challenges facing automotive companies today.",
    sections: [
      {
        heading: "Operating Model Redesign for the New Automotive Era",
        content:
          "Electrification and software-defined vehicles are forcing automotive OEMs and suppliers to fundamentally rethink their operating models. Traditional manufacturing-centric organizations must evolve to integrate software development, battery technology, and digital services alongside conventional engineering and production. Dr. Kurr's core methodology — structure follows process follows strategy — provides the disciplined framework needed to redesign automotive operating models without the common pitfall of reorganizing reporting lines without changing how work actually gets done. His experience building global operating models at Boehringer Ingelheim, including shared services and offshore delivery centers, translates directly to the automotive context.",
      },
      {
        heading: "Supply Chain Cooperation Management",
        content:
          "The automotive supply chain is becoming an ecosystem of strategic partnerships — OEMs collaborating with battery suppliers, software companies, charging infrastructure providers, and mobility service platforms. Managing these complex multi-party relationships requires exactly the kind of cooperation management expertise Dr. Kurr brings. His co-authored book 'Kooperationsmanagement' and his doctoral thesis on cooperation management in supplier industries provide the academic foundation, while his operational experience managing strategic partnerships at Boehringer Ingelheim provides the practical blueprint. He helps automotive companies structure, negotiate, and govern alliances that deliver value rather than becoming expensive coordination overhead.",
      },
      {
        heading: "Shared Services & Global Business Services",
        content:
          "Many automotive companies are building or optimizing global business services to reduce costs and improve efficiency across finance, HR, procurement, IT, and commercial operations. Dr. Kurr's experience as Senior Global Program Lead for Global Business Services at Novartis and his work building shared service organizations at Boehringer Ingelheim transfers directly to automotive GBS design. He helps companies design the right balance between centralization and local flexibility, select insource vs. outsource models, and implement stage-gate transition plans that de-risk the journey to a new operating model.",
      },
      {
        heading: "Content & Digital Operations",
        content:
          "Automotive companies are increasingly building digital content factories for vehicle configurators, personalized marketing, dealer support materials, and after-sales communications — challenges analogous to the pharma content supply chains Dr. Kurr built at Boehringer Ingelheim. The same principles of modular content architecture, automated production workflows, quality governance, and scalable delivery apply. Dr. Kurr helps automotive companies design and implement content operations that deliver personalized, multichannel experiences at scale while maintaining brand consistency across markets.",
      },
    ],
    highlights: [
      { value: "Daimler", label: "Direct automotive industry experience" },
      { value: "$33B", label: "Automotive consulting market (2025)" },
      { value: "64%", label: "OEMs prioritizing AI-driven optimization" },
    ],
    offerings: [
      "Operating model redesign for electrification and software-defined vehicles",
      "Supply chain cooperation and alliance management",
      "Shared services and GBS design",
      "Content and digital operations",
      "Process reengineering for manufacturing operations",
    ],
    relatedLinks: [
      {
        label: "Book: Kooperationsmanagement — Hanser Verlag",
        href: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
      },
    ],
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    tagline:
      "Process-oriented reorganization, complexity management, and Industry 4.0 strategy for manufacturing companies and specialty materials firms",
    description:
      "Dr. Kurr's roots are in industrial manufacturing — his engineering degree from RWTH Aachen in Production Management and Manufacturing Technology, his management consulting career at Schuh & Co. GmbH specializing in manufacturing operations, and his work with companies like Schott (specialty glass and materials). His co-authored book 'Prozessorientierte Reorganisation' is literally the practitioner's playbook for manufacturing process reengineering, featuring case studies from industrial firms including Schiesser, Alu Menziken, and Lista.",
    sections: [
      {
        heading: "Process-Oriented Reorganization",
        content:
          "Dr. Kurr's book 'Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen' (Carl Hanser Verlag, 2006) provides a comprehensive methodology for business process reengineering that balances radical change with the human factor. This is not theoretical — it was developed through direct consulting engagements with manufacturing companies at Schuh & Co. and validated through academic research at the University of St. Gallen. The methodology covers the full lifecycle: from process analysis and target state design through implementation and stabilization. For manufacturing companies undergoing digital transformation or operational restructuring, this provides a proven, structured approach.",
      },
      {
        heading: "Complexity Management",
        content:
          "Manufacturing companies accumulate complexity over time — product variants, process variations, supplier networks, and organizational layers that add cost without adding value. Schuh & Co., where Dr. Kurr worked as a management consultant, is renowned for its complexity management methodology. Dr. Kurr applies this expertise to help manufacturing companies identify and reduce unnecessary complexity in their product portfolios, production processes, and organizational structures. The goal is not simplification for its own sake but finding the right level of complexity that serves customers while maintaining operational efficiency.",
      },
      {
        heading: "Industry 4.0 Strategy",
        content:
          "The convergence of IoT, AI, robotics, and data analytics is creating massive demand for operating model redesign in manufacturing. But Industry 4.0 is not a technology project — it is an organizational transformation. Dr. Kurr helps manufacturing companies develop Industry 4.0 strategies that connect technology investments to business outcomes, using his three-pillar approach of People, Process, and Technology. His MIT Sloan Executive Certificate in Digital Business and his IMD digital transformation certifications provide the digital strategy foundation, while his manufacturing background ensures that strategies are grounded in operational reality.",
      },
      {
        heading: "Strategic Alliance & Joint Venture Advisory",
        content:
          "Manufacturing companies increasingly rely on strategic alliances — R&D partnerships, manufacturing joint ventures, supplier cooperations, and technology licensing arrangements. Dr. Kurr's doctoral thesis focused specifically on cooperation management in the developing and manufacturing supplier industry, and his published research codifies the success factors for collaboration management in manufacturing companies. He helps industrial firms structure partnerships that create value, design governance mechanisms that prevent common failure modes, and manage alliance portfolios systematically rather than ad hoc.",
      },
    ],
    highlights: [
      { value: "RWTH", label: "Engineering degree in Production Management" },
      { value: "2", label: "Books on manufacturing transformation" },
      { value: "35%", label: "Manufacturing adoption of fractional executives" },
    ],
    offerings: [
      "Process-oriented reorganization (BPR)",
      "Complexity management",
      "Industry 4.0 strategy",
      "Shared services and support function optimization",
      "Strategic alliance and joint venture advisory",
    ],
    relatedLinks: [
      {
        label: "Book: Prozessorientierte Reorganisation — Amazon",
        href: "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
      },
      {
        label: "Book: Prozessorientierte Reorganisation — Hanser eLibrary",
        href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
      },
    ],
  },
  {
    slug: "consumer-goods",
    title: "Consumer Goods (CPG/FMCG)",
    tagline:
      "Content supply chain design, digital content factory setup, and omnichannel content strategy for consumer goods brands",
    description:
      "The content supply chain challenges facing consumer goods companies are remarkably similar to those Dr. Kurr solved in pharma — modular content architecture, personalized multichannel delivery, offshore production centers, and AI-powered content creation at scale. Dr. Kurr built what external benchmarks called 'one of the leading content supply chains in the industry' at Boehringer Ingelheim. The same methodology, adapted for CPG's faster pace and different regulatory context, helps consumer brands build world-class content operations.",
    sections: [
      {
        heading: "Content Supply Chain Design",
        content:
          "CPG brands face an explosion of content demand — thousands of SKUs, dozens of markets, hundreds of retail and digital channels, and consumers expecting personalized, relevant content at every touchpoint. Most brands manage this through fragmented agency relationships, creating duplication, inconsistency, and spiraling costs. Dr. Kurr's content supply chain methodology — developed through building end-to-end content operations at Boehringer Ingelheim — provides a systematic approach to designing modular, scalable content production operations. This includes content architecture design, production workflow optimization, quality governance, and performance analytics.",
      },
      {
        heading: "Digital Content Factory Setup",
        content:
          "At Boehringer Ingelheim, Dr. Kurr built a Digital Content Factory as an offshore production center in India, creating a scalable content production capability that delivered content across global markets. The same model applies to CPG — building dedicated content production centers (offshore, nearshore, or hybrid) that produce high-quality content at scale with lower costs and faster turnaround than traditional agency models. Dr. Kurr helps CPG companies design, build, and launch digital content factories, including location selection, team structure, technology infrastructure, quality management, and transition planning from agency-dependent to in-house production.",
      },
      {
        heading: "Omnichannel Content Strategy",
        content:
          "Consumers interact with CPG brands across an expanding set of channels — e-commerce platforms, social media, retail media networks, direct-to-consumer websites, in-store displays, and packaging. Delivering consistent, personalized content across all these channels requires an integrated content strategy and the operational infrastructure to execute it. Dr. Kurr's experience designing omnichannel engagement at Boehringer Ingelheim — coordinating content across field force visits, digital channels, email campaigns, and HCP portals — translates directly to the CPG context. The key is moving from channel-specific content production to a unified content operations model that feeds all channels from a single, modular content source.",
      },
      {
        heading: "MarTech and Content Operations Architecture",
        content:
          "The technology stack underpinning content operations — DAM systems, content management platforms, creative automation tools, analytics, and distribution technology — can either enable or constrain content supply chain performance. Dr. Kurr helps CPG companies design content operations architecture that integrates technology, workflows, and governance into a coherent operating model. This includes vendor selection, integration architecture, capability assessment, and change management to ensure that technology investments translate into operational improvement rather than becoming expensive shelfware.",
      },
    ],
    highlights: [
      { value: "#1", label: "Content supply chain built in pharma" },
      { value: "10x", label: "Content operations growth at Boehringer" },
      { value: "Global", label: "Full geographical scale in 4 years" },
    ],
    offerings: [
      "Content supply chain design",
      "Digital content factory setup",
      "Omnichannel content strategy",
      "MarTech and content operations architecture",
      "Agency-to-in-house transition planning",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services (BFSI)",
    tagline:
      "Global Business Services design, operating model transformation, and process reengineering for banks, insurers, and financial institutions",
    description:
      "Financial services held the largest share of the strategic consulting market in 2024 — and for good reason. Banks, insurers, and asset managers face relentless pressure to reduce costs, improve compliance, digitize operations, and manage increasingly complex partner ecosystems. Dr. Kurr's experience designing Global Business Services at Novartis and building scalable operating models at Boehringer Ingelheim transfers directly to BFSI, where shared services optimization, process reengineering, and vendor governance are critical priorities.",
    sections: [
      {
        heading: "Global Business Services (GBS) Design & Optimization",
        content:
          "As Senior Global Program Lead for Global Business Services at Novartis, Dr. Kurr was directly responsible for designing and optimizing shared service operations at enterprise scale. Banks and insurers face identical challenges: how to consolidate fragmented support functions into efficient, scalable service centers while maintaining service quality and regulatory compliance. Dr. Kurr helps financial institutions design GBS operating models that balance cost efficiency with operational resilience — including location strategy, service catalog design, governance frameworks, and technology enablement.",
      },
      {
        heading: "Operating Model Transformation",
        content:
          "Financial services operating models are under pressure from multiple directions — digital banking, open finance regulations, evolving customer expectations, and new competitive threats from fintechs and neobanks. Transformation requires more than technology upgrades; it requires fundamental rethinking of how work is organized, governed, and delivered. Dr. Kurr's operating model methodology — structure follows process follows strategy — ensures that transformations address root causes rather than symptoms. His experience achieving full global scale at Boehringer Ingelheim within four years demonstrates that ambitious operating model transformations are achievable when approached with the right discipline.",
      },
      {
        heading: "Process Reengineering for Compliance",
        content:
          "Regulatory-driven process transformation is a constant in financial services — from KYC/AML processes to Solvency II compliance to ESG reporting requirements. Dr. Kurr's published methodology on process-oriented reorganization provides a structured approach to compliance-driven BPR that balances regulatory requirements with operational efficiency. Unlike pure compliance consultants, Dr. Kurr approaches regulatory processes as operational challenges, identifying opportunities to improve both compliance and efficiency simultaneously through process standardization, automation, and governance redesign.",
      },
      {
        heading: "Cooperation Management for Fintech Partnerships",
        content:
          "Banks and insurers increasingly depend on fintech partnerships, outsourcing arrangements, and technology vendor ecosystems. Managing these relationships — from partner selection through governance and performance management — requires the same cooperation management expertise that Dr. Kurr brings from pharma. His published research on success factors for collaboration management and his operational experience structuring strategic partnerships provide a systematic framework for financial institutions managing complex vendor and partner ecosystems.",
      },
    ],
    highlights: [
      { value: "#1", label: "BFSI largest strategic consulting segment" },
      { value: "GBS", label: "Senior Global Program Lead at Novartis" },
      { value: "20+", label: "Years of operating model transformation" },
    ],
    offerings: [
      "Global Business Services (GBS) design and optimization",
      "Operating model transformation",
      "Process reengineering for compliance",
      "Fintech partnership and vendor governance",
      "Shared services center design and optimization",
    ],
    relatedLinks: [
      {
        label: "Book: Prozessorientierte Reorganisation — Hanser eLibrary",
        href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
      },
    ],
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    tagline:
      "Fractional COO/CCO leadership, go-to-market operations design, and organizational scaling for technology companies and B2B SaaS scale-ups",
    description:
      "Technology is the number one sector using fractional executives, with over 51% of fractional placements. Scale-up challenges — building organizations from scratch, designing go-to-market operations, managing global expansion, and structuring enterprise partnerships — are universal. Dr. Kurr brings pharma-grade operational rigor to fast-growing tech companies, combined with digital strategy credentials from MIT Sloan and IMD that provide credibility in the technology sector.",
    sections: [
      {
        heading: "Fractional COO/CCO for Tech Scale-Ups",
        content:
          "Technology scale-ups moving from Series B to pre-IPO need experienced operational leadership but often cannot justify or attract full-time C-level hires. Dr. Kurr's fractional model provides exactly this — 2-3 days per week of embedded executive presence with real accountability, team ownership, and board-level authority. His experience building a global organization from scratch at Boehringer Ingelheim demonstrates the ability to create scalable operational infrastructure in dynamic environments. For HealthTech and MedTech companies, he bridges the gap between technology and pharma — understanding both worlds.",
      },
      {
        heading: "Go-to-Market Operations Design",
        content:
          "Building scalable sales and marketing operations for B2B SaaS requires the same operational discipline that Dr. Kurr applied at Boehringer Ingelheim — designing repeatable processes, building content supply chains for sales enablement, implementing performance analytics, and creating the organizational structures that support consistent execution across markets. His experience designing omnichannel engagement models translates directly to B2B tech go-to-market, where coordinating inbound marketing, outbound sales, partnerships, and customer success into a unified model is critical for capital-efficient growth.",
      },
      {
        heading: "Partnership & Alliance Strategy",
        content:
          "Technology companies depend on partnerships for distribution, integration, and market access — but most manage partnerships reactively rather than strategically. Dr. Kurr's published research on cooperation management and his operational experience structuring enterprise partnerships provide a systematic framework for building and managing technology alliance ecosystems. This includes partner selection criteria, tier-based partner program design, joint go-to-market planning, and partnership governance that ensures mutual value creation.",
      },
      {
        heading: "Organizational Design for Scale",
        content:
          "Designing organizations that work from 50 to 500+ employees is one of the most challenging transitions in a technology company's lifecycle. What works with a flat, founder-led team breaks down as the company scales — but premature bureaucracy kills innovation and agility. Dr. Kurr helps technology companies design operating models that scale without losing the culture and speed that made them successful. His five-pillar leadership philosophy — Transparency, Respect, Empowerment, Fairness, and Vision — provides the cultural foundation, while his operating model expertise provides the structural framework.",
      },
    ],
    highlights: [
      { value: "51.6%", label: "Tech sector leads fractional executive adoption" },
      { value: "MIT", label: "Executive Certificate in Digital Business" },
      { value: "3", label: "IMD digital strategy certifications" },
    ],
    offerings: [
      "Fractional COO / CCO for scale-ups",
      "Go-to-market operations design",
      "Partnership and alliance strategy",
      "Organizational design for scale",
      "Enterprise sales operations build-out",
    ],
    relatedLinks: [
      {
        label: "MIT Sloan Executive Education — Digital Business",
        href: "https://executive.mit.edu/",
      },
    ],
  },
  {
    slug: "energy-chemicals",
    title: "Energy & Chemicals",
    tagline:
      "Organizational transformation, joint venture and alliance advisory, and change management for energy transition and chemical industry transformation",
    description:
      "The energy transition is driving the most significant organizational transformations in the energy and chemicals sectors since deregulation. Joint ventures for renewable energy, hydrogen, and carbon capture require sophisticated alliance management. Chemical companies — which share many characteristics with pharma (regulated, process-oriented, global) — need the same operating model and organizational transformation capabilities that Dr. Kurr has delivered across his career. His German base provides a natural advantage in advising European energy and chemical companies.",
    sections: [
      {
        heading: "Organizational Transformation for the Energy Transition",
        content:
          "Energy companies transitioning from fossil fuels to renewables face organizational challenges that mirror what Dr. Kurr has managed in pharma: legacy structures that resist change, cultures built around old business models, and the need to build entirely new capabilities while maintaining existing operations. Dr. Kurr's experience building organizations from scratch at Boehringer Ingelheim — creating new organizational capabilities alongside existing operations without disrupting either — provides the operational playbook. His change management approach, rooted in his five core leadership traits, ensures that transformation programs engage people rather than alienating them.",
      },
      {
        heading: "Joint Venture & Alliance Advisory",
        content:
          "The energy transition is creating an explosion of joint ventures and consortia — partnerships for offshore wind development, hydrogen production, carbon capture and storage, battery manufacturing, and charging infrastructure. These alliances are complex, high-stakes, and frequently fail due to poor governance, misaligned incentives, or cultural incompatibility. Dr. Kurr's published expertise in cooperation management — including his book, doctoral thesis, and academic papers — provides a rigorous, evidence-based framework for structuring partnerships that deliver results. From partner selection through governance design to performance management, his methodology reduces the risk of alliance failure.",
      },
      {
        heading: "Shared Services Optimization",
        content:
          "Asset-heavy energy and chemical companies maintain large support functions — finance, HR, procurement, HSE, IT — that often operate below efficiency benchmarks. Dr. Kurr's experience designing Global Business Services at Novartis and building scalable service organizations at Boehringer Ingelheim transfers directly to energy and chemicals. He helps companies design efficient shared services that reduce overhead while maintaining the operational resilience required in safety-critical industries. This includes location strategy, operating model design, governance frameworks, and technology enablement.",
      },
      {
        heading: "Change Management for Large-Scale Transformation",
        content:
          "Leading people through large-scale organizational change in traditional industries requires patience, empathy, and strategic thinking — three qualities Dr. Kurr considers essential management principles. Energy and chemical companies have long-tenured workforces, strong functional identities, and deep expertise that must be preserved through transformation. Dr. Kurr's people-centered approach to change management — avoiding assumptions, practicing patience, and staying current by embracing change proactively — builds the trust and engagement needed to sustain transformation programs that may span years rather than quarters.",
      },
    ],
    highlights: [
      { value: "Schott", label: "Direct specialty materials experience" },
      { value: "EU", label: "German base for European energy companies" },
      { value: "2", label: "Published books on transformation methodology" },
    ],
    offerings: [
      "Organizational transformation for the energy transition",
      "Joint venture and alliance advisory",
      "Shared services optimization",
      "Change management for large-scale transformation",
      "Process reengineering for chemicals and energy",
    ],
    relatedLinks: [
      {
        label: "Book: Kooperationsmanagement — Hanser Verlag",
        href: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
      },
      {
        label: "Book: Prozessorientierte Reorganisation — Amazon",
        href: "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
      },
    ],
  },
  {
    slug: "investors-venture-capital",
    title: "Investors & Venture Capital",
    tagline:
      "Commercial due diligence, portfolio company advisory, and strategic guidance for MedTech, biotech, and digital health investors",
    description:
      "Investors in life sciences — venture capital firms, private equity, family offices, and corporate venture arms — need deep commercial and operational insight to evaluate portfolio opportunities and support portfolio companies. Dr. Kurr provides the practitioner perspective that pure financial analysts cannot: having built and scaled global commercial organizations at Boehringer Ingelheim and Novartis, he can assess whether a company's commercial strategy, operating model, and organizational readiness will translate into sustainable growth. As Fellow at THENA Capital, a UK-based specialist MedTech investor, he applies this lens to early-stage digital and device companies daily.",
    sections: [
      {
        heading: "Commercial Due Diligence",
        content:
          "When evaluating pharma, biotech, or MedTech investments, commercial viability is often the make-or-break factor. Dr. Kurr provides commercial due diligence that goes beyond market sizing and competitive landscape — assessing organizational readiness, go-to-market capability, content and channel operations maturity, and scalability of the commercial model. His 20+ years operating inside top pharma companies provides pattern recognition that identifies risks and opportunities invisible to desk-based analysis.",
      },
      {
        heading: "Portfolio Company Advisory",
        content:
          "Post-investment, portfolio companies need hands-on commercial and operational guidance to achieve their growth targets. As an operating partner or venture partner model, Dr. Kurr embeds within portfolio companies to accelerate commercial readiness — from market access and pricing strategy to sales organization design and launch planning. His fractional CCO model at Lemna Bio demonstrates exactly this approach: providing C-level commercial capability to a computational drug design company without the overhead of a full-time hire.",
      },
      {
        heading: "Market Access & Pricing Assessment",
        content:
          "For investors evaluating therapeutic or diagnostic assets, understanding the reimbursement landscape and pricing potential is critical to investment thesis validation. Dr. Kurr assesses market access strategies, payer engagement plans, and health economics positioning — translating complex regulatory and commercial dynamics into investor-friendly frameworks for decision-making.",
      },
      {
        heading: "Board Service & Strategic Governance",
        content:
          "Investors increasingly seek board members who combine operational expertise with strategic perspective. Dr. Kurr serves on advisory boards providing governance, commercial strategy guidance, and operational oversight. His academic foundation — doctorate from University of St. Gallen and executive certifications from MIT Sloan and IMD — complements his practitioner experience, offering boards the rigorous, evidence-based perspective they need for critical decisions.",
      },
    ],
    highlights: [
      { value: "THENA", label: "Fellow at specialist MedTech investor" },
      { value: "Lemna Bio", label: "Active fractional CCO engagement" },
      { value: "180%", label: "Growth in fractional pharma placements since 2023" },
    ],
    offerings: [
      "Commercial due diligence for pharma and MedTech assets",
      "Operating partner / venture partner advisory",
      "Market access and pricing assessment",
      "Portfolio company board service",
      "Post-acquisition integration advisory",
    ],
    relatedLinks: [
      {
        label: "THENA Capital — Specialist MedTech Investor",
        href: "https://thenacapital.com/",
      },
      {
        label: "Lemna Bio — Computational Drug Design",
        href: "https://www.lemnabio.com/",
      },
    ],
  },
  {
    slug: "boards-governance",
    title: "Boards & Governance",
    tagline:
      "Independent non-executive director and supervisory board roles providing strategic oversight and industry expertise for life sciences and cross-industry companies",
    description:
      "Effective boards require directors who combine strategic vision with operational depth. Dr. Kurr brings over 20 years of C-level and VP experience across top pharma companies (Boehringer Ingelheim, Novartis), automotive (Daimler), and specialty materials (Schott) — complemented by a doctorate and executive MBA from University of St. Gallen, and executive education from MIT Sloan and IMD. His broad industry exposure, academic rigor, and published expertise in transformation and cooperation management make him a valuable addition to boards seeking experienced, independent governance.",
    sections: [
      {
        heading: "Non-Executive Director Roles",
        content:
          "As a non-executive director, Dr. Kurr provides independent strategic oversight grounded in deep operational experience. Having built organizations from scratch and led enterprise-wide transformations, he brings the practitioner perspective that boards need to evaluate management proposals, challenge assumptions, and ensure strategic alignment. His experience spans pharma, MedTech, automotive, and manufacturing — providing the cross-industry lens that enriches board-level discussions.",
      },
      {
        heading: "Supervisory Board Service",
        content:
          "In the German and Swiss corporate governance tradition, the supervisory board plays a critical role in overseeing management, approving strategy, and ensuring compliance. Dr. Kurr's German-Swiss professional background, combined with his academic foundation at University of St. Gallen, positions him uniquely for supervisory board roles at European companies. His expertise in corporate transformation, process reengineering, and cooperation management — documented in two published books — provides the structured, evidence-based approach that supervisory boards value.",
      },
      {
        heading: "Strategic Governance Advisory",
        content:
          "Beyond formal board roles, Dr. Kurr advises companies on governance structure, board composition, and strategic oversight frameworks. For pre-IPO companies, this includes preparing for public company governance requirements. For private companies, this means designing governance structures that balance founder control with investor protection and strategic guidance.",
      },
      {
        heading: "Pre-IPO Board Preparation",
        content:
          "Companies approaching IPO need board members with the credibility, experience, and governance skills that public markets demand. Dr. Kurr helps companies build board-ready governance structures, establish appropriate committees, and develop the reporting and compliance frameworks needed for public company status — while providing the pharma and life sciences domain expertise that sector-focused investors value.",
      },
    ],
    highlights: [
      { value: "20+", label: "Years of C-level and VP experience" },
      { value: "5", label: "Major global organizations served" },
      { value: "Dr. oec.", label: "Doctorate from University of St. Gallen" },
    ],
    offerings: [
      "Independent non-executive director roles",
      "Supervisory board membership (DACH region)",
      "Strategic governance advisory",
      "Pre-IPO board preparation",
      "Board composition and structure advisory",
    ],
    relatedLinks: [
      {
        label: "Dr. Kurr Advisory — Strategic Clarity & Scalable Operating Models",
        href: "https://dr.michaelkurr.com/advisory/",
      },
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
  {
    slug: "executive-education",
    title: "Executive Education & Speaking",
    tagline:
      "Keynote speeches, corporate workshops, and executive education programs on transformation, leadership, and pharma innovation",
    description:
      "Dr. Kurr's combination of published methodology, hands-on transformation experience, and compelling personal story — building a tenfold organization from scratch in four years — makes him a sought-after speaker and educator. As co-author of two books on organizational transformation and cooperation management (Carl Hanser Verlag), former Head of Management Support at University of St. Gallen, and featured executive in CIOLook Magazine, he brings both academic rigor and practical insight to every engagement.",
    sections: [
      {
        heading: "Conference Keynotes",
        content:
          "Dr. Kurr delivers keynote speeches on transformation, commercial operations, and leadership at pharma, digital health, and cross-industry conferences. His talks are built on real stories — not theory — from building Boehringer Ingelheim's global services organization, leading transformation at Novartis, and advising biotech companies through his fractional leadership model. Topics include: 'From Zero to Global Scale: Building World-Class Service Organizations,' 'Structure Follows Process Follows Strategy: A Practitioner's Guide to Transformation,' 'The Content Supply Chain Revolution in Pharma,' and 'Leading Through Uncertainty: Five Traits That Matter.'",
      },
      {
        heading: "Corporate Executive Workshops",
        content:
          "Half-day and full-day workshops for leadership teams facing transformation challenges. Dr. Kurr facilitates structured sessions on operating model design, process reengineering, cooperation management, and organizational change — drawing on the frameworks from his published books and adapting them to each organization's specific context. These workshops are designed to produce actionable roadmaps, not just inspiration.",
      },
      {
        heading: "University & MBA Guest Lectures",
        content:
          "With his academic roots at University of St. Gallen — where he served as Head of Management Support at the Institute for Technology Management — Dr. Kurr brings the rare combination of academic depth and executive experience to university settings. He delivers guest lectures for executive MBA, EMBA, and executive education programs at institutions such as IMD, University of St. Gallen, and MIT Sloan, covering corporate transformation, cooperation management, and AI strategy in regulated industries.",
      },
      {
        heading: "Panel Moderation & Industry Events",
        content:
          "Dr. Kurr moderates panels at industry events including HLTH, Fierce Pharma Week, the Pharma Omnichannel HCP Engagement Conference, and the Digital Breakthrough for Pharma Summit. His deep industry knowledge and structured approach to discussion ensure panels that are substantive and actionable, not just performative.",
      },
    ],
    highlights: [
      { value: "2", label: "Published books (Carl Hanser Verlag)" },
      { value: "CIOLook", label: "Featured in CIOLook Magazine" },
      { value: "St. Gallen", label: "Academic roots at HSG" },
    ],
    offerings: [
      "Conference keynote speeches",
      "Corporate executive workshops (half-day / full-day)",
      "University and MBA guest lectures",
      "Panel moderation at industry events",
      "Custom executive education programs",
    ],
    relatedLinks: [
      {
        label: "CIOLook Feature — From Concept to Reality",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
      {
        label: "Book: Prozessorientierte Reorganisation — Hanser Verlag",
        href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
      },
    ],
  },
  {
    slug: "interim-turnaround",
    title: "Interim & Turnaround Management",
    tagline:
      "Embedded executive leadership for post-merger integration, organizational turnaround, and commercial function stabilization",
    description:
      "When organizations face critical transitions — post-merger integration, executive departures, underperforming commercial operations, or regulatory crises — they need experienced leaders who can step in immediately and deliver results. Dr. Kurr's proven ability to build from zero (not just optimize existing operations), combined with his management consulting background at Schuh & Co. and his comfort with ambiguity and complex corporate environments, makes him uniquely suited for interim management and turnaround engagements.",
    sections: [
      {
        heading: "Post-Merger Integration",
        content:
          "Integrating commercial operations after mergers and acquisitions is one of the highest-stakes challenges in corporate leadership. Overlapping organizations, conflicting processes, cultural differences, and customer uncertainty must be managed simultaneously while maintaining commercial momentum. Dr. Kurr brings the operating model design expertise — structure follows process follows strategy — needed to integrate commercial functions efficiently. His experience building organizations from scratch at Boehringer Ingelheim demonstrates the organizational design capability that M&A integration demands.",
      },
      {
        heading: "Commercial Organization Turnaround",
        content:
          "When go-to-market organizations underperform — declining market share, inefficient operations, misaligned channel strategies, or talent gaps — the solution requires both diagnostic rigor and execution speed. Dr. Kurr applies his process-oriented reorganization methodology (published in his book with Carl Hanser Verlag) to identify root causes, redesign operating models, and rebuild commercial capability. His approach combines radical change with the human factor — ensuring that turnaround programs are sustainable, not just disruptive.",
      },
      {
        heading: "Executive Transition Leadership",
        content:
          "When key executives depart — particularly in commercial, operations, or transformation roles — organizations need interim leaders who can maintain momentum and strategic direction while permanent replacements are recruited. Dr. Kurr's fractional leadership model provides this bridge: experienced C-level capability on flexible terms, with the credibility and track record to maintain stakeholder confidence during transitions.",
      },
      {
        heading: "Crisis Management & Stabilization",
        content:
          "Regulatory challenges, market disruptions, or operational crises require leaders who can manage ambiguity and make decisions under pressure. Dr. Kurr's management philosophy — 'avoid assumptions, reality always looks different' — is purpose-built for crisis contexts. His experience across multiple industries (pharma, automotive, manufacturing) provides the pattern recognition needed to identify what matters most and act decisively when stakes are highest.",
      },
    ],
    highlights: [
      { value: "10x", label: "Built organization from scratch at Boehringer" },
      { value: "4 yrs", label: "Zero to full global scale" },
      { value: "Schuh & Co.", label: "Management consulting foundation" },
    ],
    offerings: [
      "Post-merger commercial integration",
      "Go-to-market organization turnaround",
      "Interim C-level leadership",
      "Crisis management and stabilization",
      "Organizational restructuring and redesign",
    ],
    relatedLinks: [
      {
        label: "Book: Prozessorientierte Reorganisation — Amazon",
        href: "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
      },
      {
        label: "Dr. Kurr Advisory — Fractional C-Level Leadership",
        href: "https://dr.michaelkurr.com/advisory/fractional-c-level-leadership/",
      },
    ],
  },
  {
    slug: "expert-networks",
    title: "Expert Networks & Micro-Advisory",
    tagline:
      "High-value, short-format advisory consultations through premium expert networks for investors, corporations, and strategic decision-makers",
    description:
      "Expert networks connect decision-makers — investors, corporate strategists, and consultants — with industry practitioners who can provide rapid, high-value insight on specific topics. Dr. Kurr's 20+ years of operational experience across pharma commercial operations, content supply chains, omnichannel transformation, and cooperation management makes him a sought-after expert across multiple platforms. His combination of practitioner depth, published methodology, and current market activity (Fractional CCO at Lemna Bio, Fellow at THENA Capital) ensures that his insights are both authoritative and current.",
    sections: [
      {
        heading: "Investment Research Consultations",
        content:
          "Institutional investors, hedge funds, and private equity firms frequently seek expert consultations to validate investment theses, assess competitive dynamics, and understand industry trends. Dr. Kurr provides insight on pharma commercial model transformation, content supply chain economics, omnichannel strategy maturity, CDMO and outsourcing trends, and the competitive landscape across Boehringer Ingelheim, Novartis, and the broader pharma sector. His perspective is uniquely valuable because it combines deep insider knowledge with current advisory market activity.",
      },
      {
        heading: "Corporate Strategy Consultations",
        content:
          "Corporations evaluating strategic decisions — entering new markets, restructuring operations, building service organizations, or evaluating partnership strategies — benefit from rapid access to practitioners who have faced similar challenges. Dr. Kurr provides targeted, high-impact consultations on operating model design, cooperation management, content operations, and organizational transformation — distilling 20+ years of experience into actionable guidance within a single call or short engagement.",
      },
      {
        heading: "Premium Expert Network Platforms",
        content:
          "Dr. Kurr is available through leading expert networks including GLG (Gerson Lehrman Group), AlphaSights, Guidepoint, Third Bridge, Tegus, Prosapient, and Dialectica. These platforms provide structured, compliance-screened engagements that connect his expertise with the specific questions decision-makers need answered — efficiently and at premium rates reflecting the depth and currency of his knowledge.",
      },
      {
        heading: "Topics of Expertise",
        content:
          "Key topics Dr. Kurr is sought for include: pharma commercial model transformation, content supply chain design and optimization, omnichannel HCP engagement strategy, global business services (GBS) design, cooperation management and strategic alliances, digital factory and AI strategy in regulated industries, automotive and manufacturing operating model transformation, and organizational design for scale. Each topic is backed by hands-on experience — not just advisory perspective.",
      },
    ],
    highlights: [
      { value: "7+", label: "Expert network platforms available" },
      { value: "$500–1K", label: "Hourly consultation rate" },
      { value: "20+", label: "Years of practitioner expertise" },
    ],
    offerings: [
      "Investment research consultations (VC, PE, hedge funds)",
      "Corporate strategy micro-advisory",
      "Expert calls via GLG, AlphaSights, Guidepoint",
      "Third Bridge, Tegus, Prosapient, Dialectica availability",
      "Rapid-turnaround industry insight briefings",
    ],
    relatedLinks: [
      {
        label: "GLG — Gerson Lehrman Group",
        href: "https://glginsights.com/",
      },
      {
        label: "AlphaSights — Expert Network",
        href: "https://www.alphasights.com/",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industriesData.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industriesData.map((i) => i.slug);
}
