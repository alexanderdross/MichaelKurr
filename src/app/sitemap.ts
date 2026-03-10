import { MetadataRoute } from "next";
import { getAllExpertiseSlugs } from "@/data/expertise";
import { getAllLeadershipSlugs } from "@/data/leadership";
import { getAllAdvisoryServiceSlugs } from "@/data/advisory-services";
import { getAllIndustrySlugs } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dr.michaelkurr.com";
  const lastModified = new Date("2026-03-10");

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
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
    ...getAllIndustrySlugs().map((slug) => ({
      url: `${base}/industries/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
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
