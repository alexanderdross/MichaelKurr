import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    ...props
  }: {
    alt: string;
    src: string;
    [key: string]: unknown;
  }) => <img alt={alt} src={src} {...props} />,
}));

describe("Expertise component", () => {
  it("renders all 6 expertise cards with links", async () => {
    const { default: Expertise } = await import(
      "@/components/Expertise"
    );
    const { container } = render(<Expertise />);

    expect(
      screen.getByText("Corporate Transformation")
    ).toBeInTheDocument();
    expect(screen.getByText("Process Reengineering")).toBeInTheDocument();
    expect(
      screen.getByText("Commercial & Medical Operations")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Cooperation Management")
    ).toBeInTheDocument();
    expect(screen.getByText("Digital & AI Strategy")).toBeInTheDocument();
    expect(screen.getByText("People & Leadership")).toBeInTheDocument();

    // Check that cards link to subpages
    const expertiseLinks = container.querySelectorAll(
      'a[href^="/expertise/"]'
    );
    expect(expertiseLinks).toHaveLength(6);
  });

  it("renders Learn more CTAs on each card", async () => {
    const { default: Expertise } = await import(
      "@/components/Expertise"
    );
    const { container } = render(<Expertise />);

    // Each card has a "Learn more" visible text + sr-only " about {title}"
    const learnMore = container.querySelectorAll("span");
    const learnMoreTexts = Array.from(learnMore).filter(
      (s) => s.textContent?.startsWith("Learn more")
    );
    expect(learnMoreTexts).toHaveLength(6);
  });
});

describe("Leadership component", () => {
  it("renders all 5 leadership traits with links", async () => {
    const { default: Leadership } = await import(
      "@/components/Leadership"
    );
    const { container } = render(<Leadership />);

    expect(screen.getByText("Transparency")).toBeInTheDocument();
    expect(screen.getByText("Respect")).toBeInTheDocument();
    expect(screen.getByText("Empowerment")).toBeInTheDocument();
    expect(screen.getByText("Fairness")).toBeInTheDocument();
    expect(screen.getByText("Vision")).toBeInTheDocument();

    // Check that traits link to subpages
    const leadershipLinks = container.querySelectorAll(
      'a[href^="/leadership/"]'
    );
    expect(leadershipLinks).toHaveLength(5);
  });

  it("renders the three management rules section", async () => {
    const { default: Leadership } = await import(
      "@/components/Leadership"
    );
    const { container } = render(<Leadership />);

    const ruleHeadings = container.querySelectorAll("h3");
    const mgmtRules = Array.from(ruleHeadings).find(
      (h) => h.textContent === "Three Management Rules"
    );
    expect(mgmtRules).toBeTruthy();
  });
});

describe("Hero component", () => {
  it("renders Dr. Michael Kurr heading", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />);

    expect(screen.getByText("Michael Kurr")).toBeInTheDocument();
    // "Dr." appears in both the visible label and the sr-only span
    const drElements = screen.getAllByText(/^Dr\.?\s?$/);
    expect(drElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders updated tagline without Boehringer Ingelheim", async () => {
    const { default: Hero } = await import("@/components/Hero");
    render(<Hero />);

    expect(screen.queryByText(/Boehringer/)).not.toBeInTheDocument();
  });

  it("renders LinkedIn link", async () => {
    const { default: Hero } = await import("@/components/Hero");
    const { container } = render(<Hero />);

    const linkedinLink = container.querySelector(
      'a[href="https://www.linkedin.com/in/michaelkurr/"]'
    );
    expect(linkedinLink).toBeTruthy();
  });
});

describe("Contact component", () => {
  it("renders connect section with LinkedIn link", async () => {
    const { default: Contact } = await import("@/components/Contact");
    const { container } = render(<Contact />);

    const link = container.querySelector(
      'a[href="https://www.linkedin.com/in/michaelkurr/"]'
    );
    expect(link).toBeTruthy();
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("mentions fractional C-level support", async () => {
    const { default: Contact } = await import("@/components/Contact");
    const { container } = render(<Contact />);

    expect(container.textContent).toContain("fractional C-level");
  });
});

describe("Footer component", () => {
  it("renders copyright with current year", async () => {
    const { default: Footer } = await import("@/components/Footer");
    const { container } = render(<Footer />);

    const year = new Date().getFullYear().toString();
    expect(container.textContent).toContain(year);
  });

  it("renders navigation links", async () => {
    const { default: Footer } = await import("@/components/Footer");
    const { container } = render(<Footer />);

    const links = container.querySelectorAll("a");
    const hrefs = Array.from(links).map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("/advisory/");
    expect(hrefs).toContain("/contact/");
  });
});
