import { MetadataRoute } from "next";
import { getAllExpertiseSlugs } from "@/data/expertise";
import { getAllLeadershipSlugs } from "@/data/leadership";
import { getAllAdvisoryServiceSlugs } from "@/data/advisory-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://michaelkurr.com";
  const lastModified = new Date("2026-03-06");

  const sectionSlugs = [
    { slug: "about", priority: 0.9 },
    { slug: "expertise", priority: 0.9 },
    { slug: "impact", priority: 0.8 },
    { slug: "publications", priority: 0.8 },
    { slug: "leadership", priority: 0.8 },
    { slug: "featured", priority: 0.7 },
    { slug: "recommendations", priority: 0.7 },
    { slug: "contact", priority: 0.7 },
  ];

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sectionSlugs.map(({ slug, priority }) => ({
      url: `${base}/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllExpertiseSlugs().map((slug) => ({
      url: `${base}/expertise/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllLeadershipSlugs().map((slug) => ({
      url: `${base}/leadership/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/advisory/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...getAllAdvisoryServiceSlugs().map((slug) => ({
      url: `${base}/advisory/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${base}/transformation-circus/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/imprint/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${base}/privacy-policy/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
