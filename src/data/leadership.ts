export interface LeadershipTrait {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  sections: {
    heading: string;
    content: string;
  }[];
  quote?: string;
  relatedLinks: {
    label: string;
    href: string;
  }[];
}

export const leadershipData: LeadershipTrait[] = [
  {
    slug: "transparency",
    name: "Transparency",
    tagline:
      "Clear communication that fosters trust, especially in uncertain environments",
    description:
      "For Dr. Kurr, transparency is the bedrock of effective leadership. In environments defined by complexity, ambiguity, and constant change - as is typical in global pharma - clear and honest communication is what separates high-performing teams from dysfunctional ones.",
    sections: [
      {
        heading: "Why Transparency Matters",
        content:
          "In large-scale transformation programs, uncertainty is the norm. Teams are asked to adopt new processes, accept new structures, and deliver results before the path is fully clear. Dr. Kurr believes that in these moments, leaders who communicate openly - sharing what they know, what they don't know, and what they're doing about it - build the trust that enables their teams to move forward with confidence rather than hesitation.",
      },
      {
        heading: "Transparency in Practice",
        content:
          "When building the Global Human Pharma Services organization at Boehringer Ingelheim from scratch, Dr. Kurr made transparency a non-negotiable principle. As the organization scaled from a small team to a global operation covering every market, he ensured that strategic direction, progress updates, and challenges were communicated clearly and consistently across all levels and geographies. This approach was critical in maintaining alignment as the organization grew tenfold.",
      },
      {
        heading: "The Connection to Trust",
        content:
          "Transparency is not about oversharing or creating anxiety - it's about respecting people enough to give them the information they need to make good decisions. When leaders are transparent, they signal that they trust their teams with the truth. That trust is reciprocated, creating a virtuous cycle that accelerates execution and reduces the organizational friction that kills transformation programs.",
      },
    ],
    quote:
      "Clear communication fosters trust - especially when the path ahead is uncertain.",
    relatedLinks: [],
  },
  {
    slug: "respect",
    name: "Respect",
    tagline:
      "Conveyed through the quality of every interaction and communication",
    description:
      "Respect, in Dr. Kurr's leadership framework, is not an abstract value - it is conveyed through concrete behaviors: the quality of interactions, the attention given to others' perspectives, and the dignity afforded to every team member regardless of hierarchy.",
    sections: [
      {
        heading: "Respect as a Daily Practice",
        content:
          "Dr. Kurr views respect not as a declaration but as something demonstrated in every meeting, every email, and every decision. It manifests in listening before speaking, in acknowledging contributions, and in treating disagreements as opportunities for better thinking rather than power struggles. This is especially important in global organizations where cultural norms around hierarchy and communication styles vary significantly.",
      },
      {
        heading: "Cross-Cultural Leadership",
        content:
          "Having led teams spanning every global market - from Singapore and the ASKAN region to Europe and the Americas - Dr. Kurr has developed a deep appreciation for how respect is expressed differently across cultures. His approach centers on quality of interaction: giving full attention, following through on commitments, and ensuring that all voices are heard in decision-making processes. This cultural sensitivity has been essential in scaling organizations globally.",
      },
      {
        heading: "Respect and Performance",
        content:
          "Research consistently shows that teams where members feel respected outperform those where they don't. Dr. Kurr's experience confirms this: the organizations he has built are characterized by high retention, strong engagement, and a willingness among team members to go beyond their formal responsibilities. When people feel respected, they bring their full capability to work.",
      },
    ],
    quote:
      "Respect is conveyed through the quality of every interaction - not through words, but through actions.",
    relatedLinks: [],
  },
  {
    slug: "empowerment",
    name: "Empowerment",
    tagline:
      "Enabling teams to make decisions with accountability - no micromanagement",
    description:
      "Empowerment is the leadership principle Dr. Kurr considers most critical to scaling organizations. When you need to grow a team tenfold and cover every global market within four years, you cannot do it through top-down control - you must trust and enable others to lead.",
    sections: [
      {
        heading: "Beyond Delegation",
        content:
          "Empowerment, as Dr. Kurr practices it, goes well beyond delegation. It means giving people genuine authority over their domains, providing them with the resources and context they need, and then stepping back to let them execute. It means accepting that they may approach problems differently than you would - and that this is not only acceptable but often better. The opposite of empowerment is micromanagement, which Dr. Kurr identifies as one of the most destructive leadership behaviors.",
      },
      {
        heading: "Empowerment at Scale",
        content:
          "Building the Global Human Pharma Services organization at Boehringer Ingelheim required empowering leaders across every market to own their local delivery while maintaining coherence with the global operating model. The Global Service Layer Organization - eight colleagues spanning global markets - was designed specifically to enable this balance. Each leader had the authority to adapt to local needs while operating within a shared framework.",
      },
      {
        heading: "Accountability as the Other Side",
        content:
          "Empowerment without accountability is chaos. Dr. Kurr pairs every grant of autonomy with clear expectations about outcomes, timelines, and standards. This pairing - freedom with responsibility - creates an environment where people feel trusted and motivated, while also understanding that their decisions have consequences. It's a balance that Dr. Kurr considers essential for building high-performing organizations.",
      },
    ],
    quote:
      "Avoid micromanagement - trust your teams to make decisions and hold them accountable for outcomes.",
    relatedLinks: [],
  },
  {
    slug: "fairness",
    name: "Fairness",
    tagline:
      '"One of the most important things in life" - the foundation of everything',
    description:
      'Dr. Kurr describes fairness as "one of the most important things in life." In his leadership framework, fairness is not just a principle among others - it is the foundation on which transparency, respect, empowerment, and vision all rest.',
    sections: [
      {
        heading: "Fairness as Foundation",
        content:
          "In Dr. Kurr's view, people can tolerate uncertainty, change, and even difficult decisions - as long as the process is fair. When teams believe that decisions are made equitably, that contributions are recognized proportionally, and that rules apply equally regardless of position, they extend the trust that leaders need to drive transformation. Without fairness, every other leadership principle rings hollow.",
      },
      {
        heading: "Fairness in Transformation",
        content:
          "Organizational transformations are inherently disruptive. Roles change, structures shift, and not everyone benefits equally in the short term. Dr. Kurr's emphasis on fairness ensures that these transitions are managed with integrity - that decisions are explained, that affected individuals are treated with dignity, and that the distribution of opportunities and burdens is as equitable as the situation allows. This approach has been critical in maintaining team cohesion during periods of rapid change.",
      },
      {
        heading: "A Personal Conviction",
        content:
          "For Dr. Kurr, fairness is not a management technique - it's a personal conviction that predates his career. It shapes how he evaluates his own decisions, how he resolves conflicts, and how he expects his teams to treat each other. Leaders who prioritize fairness create organizations where people feel safe to take risks, speak up, and commit fully - because they trust that the system will treat them justly.",
      },
    ],
    quote:
      "Fairness is one of the most important things in life - it is the foundation on which everything else rests.",
    relatedLinks: [],
  },
  {
    slug: "vision",
    name: "Vision",
    tagline:
      "Providing a North Star and compelling direction that goes beyond strategy",
    description:
      "Vision, in Dr. Kurr's leadership framework, is what transforms strategy from a document into a movement. It provides the North Star that aligns teams across geographies and functions, giving people a reason to commit beyond their formal obligations.",
    sections: [
      {
        heading: "Beyond Strategy",
        content:
          "Strategy answers the question \"what do we do and why?\" Vision answers a deeper question: \"what are we building and why does it matter?\" Dr. Kurr believes that effective leaders must provide both - a rigorous strategy and a compelling vision that inspires people to execute it with energy and conviction. At Boehringer Ingelheim, the vision was not just to build a services organization, but to create an industry-leading capability that would redefine how pharma companies engage physicians and patients.",
      },
      {
        heading: "Vision and Alignment",
        content:
          "When an organization spans every global market, alignment is the greatest challenge. Detailed instructions cannot cover every scenario. What can align an organization is a shared vision - a clear picture of what success looks like. Dr. Kurr's approach to vision-setting emphasizes simplicity, repeatability, and emotional resonance. A vision that people can articulate in their own words is one that will guide their daily decisions.",
      },
      {
        heading: "The North Star Principle",
        content:
          'Dr. Kurr uses the metaphor of a North Star deliberately: a fixed point that guides navigation even when the terrain is unfamiliar. In corporate environments, where market conditions, technology, and competitive dynamics shift constantly, having a stable directional reference prevents organizations from losing their way. As one colleague observed, Dr. Kurr "is admired for his bold vision and ability to make things happen" - the two are inseparable.',
      },
    ],
    quote:
      "Provide a North Star and compelling direction - vision is what transforms strategy into a movement.",
    relatedLinks: [],
  },
];

export function getLeadershipBySlug(
  slug: string
): LeadershipTrait | undefined {
  return leadershipData.find((item) => item.slug === slug);
}

export function getAllLeadershipSlugs(): string[] {
  return leadershipData.map((item) => item.slug);
}
