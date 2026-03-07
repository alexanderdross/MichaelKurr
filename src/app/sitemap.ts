import { MetadataRoute } from "next";
import { getAllExpertiseSlugs } from "@/data/expertise";
import { getAllLeadershipSlugs } from "@/data/leadership";
import { getAllAdvisoryServiceSlugs } from "@/data/advisory-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://michaelkurr.com";
  const lastModified = new Date("2026-03-07");

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Section redirects (302 → /#section) — keeps section keywords indexable
    ...(
      ["about", "expertise", "impact", "publications", "leadership", "featured", "recommendations"] as const
    ).map((section) => ({
      url: `${base}/${section}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: section === "about" || section === "expertise" ? 0.9 : 0.8,
    })),
    {
      url: `${base}/contact/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
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
