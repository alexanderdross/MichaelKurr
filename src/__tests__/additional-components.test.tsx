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

describe("About component", () => {
  it("renders section heading", async () => {
    const { default: About } = await import("@/components/About");
    render(<About />);

    expect(
      screen.getByText("Two Decades of Transforming Global Organizations")
    ).toBeInTheDocument();
  });

  it("renders current roles in bio", async () => {
    const { default: About } = await import("@/components/About");
    const { container } = render(<About />);

    expect(container.textContent).toContain("Founder of Dr. Kurr Advisory");
    expect(container.textContent).toContain("Lemna Bio");
    expect(container.textContent).toContain("THENA Capital");
  });

  it("renders timeline as ordered list", async () => {
    const { default: About } = await import("@/components/About");
    const { container } = render(<About />);

    const ol = container.querySelector("ol");
    expect(ol).toBeTruthy();

    const items = ol!.querySelectorAll("li");
    expect(items.length).toBe(7);
  });

  it("renders the core philosophy quote", async () => {
    const { default: About } = await import("@/components/About");
    const { container } = render(<About />);

    expect(container.textContent).toContain(
      "Structure follows process follows strategy"
    );
  });
});

describe("Impact component", () => {
  it("renders all four metrics", async () => {
    const { default: Impact } = await import("@/components/Impact");
    const { container } = render(<Impact />);

    expect(container.textContent).toContain("10");
    expect(container.textContent).toContain("4");
    expect(container.textContent).toContain("20");
    expect(container.textContent).toContain("6");
  });

  it("renders #1 content supply chain highlight", async () => {
    const { default: Impact } = await import("@/components/Impact");
    const { container } = render(<Impact />);

    expect(container.textContent).toContain(
      "leading content supply chains in the industry"
    );
  });

  it("mentions advisory positioning", async () => {
    const { default: Impact } = await import("@/components/Impact");
    const { container } = render(<Impact />);

    expect(container.textContent).toContain("independent advisor");
  });
});

describe("Publications component", () => {
  it("renders both book titles", async () => {
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    const { container } = render(<Publications />);

    expect(container.textContent).toContain(
      "Prozessorientierte Reorganisation"
    );
    expect(container.textContent).toContain("Kooperationsmanagement");
  });

  it("renders book cover image with proper alt text", async () => {
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    const { container } = render(<Publications />);

    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img!.getAttribute("alt")).toContain("Prozessorientierte Reorganisation");
  });

  it("renders all academic works", async () => {
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    const { container } = render(<Publications />);

    const listItems = container.querySelectorAll("ul li");
    expect(listItems.length).toBe(4);
  });

  it("renders dissertation badge", async () => {
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    render(<Publications />);

    expect(screen.getByText("Dissertation")).toBeInTheDocument();
  });

  it("has external links with proper security attributes", async () => {
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    const { container } = render(<Publications />);

    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
    expect(externalLinks.length).toBeGreaterThan(0);
  });
});

describe("Featured component", () => {
  it("renders all 5 featured items", async () => {
    const { default: Featured } = await import("@/components/Featured");
    const { container } = render(<Featured />);

    expect(container.textContent).toContain("CIOLook Magazine");
    expect(container.textContent).toContain("Hanser Verlag");
    expect(container.textContent).toContain("University of St. Gallen");
    expect(container.textContent).toContain("ResearchGate");
    expect(container.textContent).toContain("Google Knowledge Graph");
  });

  it("renders recommendations carousel with blockquote", async () => {
    const { default: Featured } = await import("@/components/Featured");
    const { container } = render(<Featured />);

    const blockquote = container.querySelector("blockquote");
    expect(blockquote).toBeTruthy();
    expect(container.textContent).toContain("What Colleagues Say");
    expect(container.textContent).toContain("LinkedIn Recommendations");
  });

  it("renders LinkedIn recommendations link", async () => {
    const { default: Featured } = await import("@/components/Featured");
    const { container } = render(<Featured />);

    const link = container.querySelector(
      'a[href="https://www.linkedin.com/in/michaelkurr/details/recommendations/"]'
    );
    expect(link).toBeTruthy();
    expect(link!.textContent).toContain("View all recommendations");
  });

  it("has decorative SVG hidden from screen readers", async () => {
    const { default: Featured } = await import("@/components/Featured");
    const { container } = render(<Featured />);

    const svg = container.querySelector('svg[aria-hidden="true"]');
    expect(svg).toBeTruthy();
  });
});

describe("Navigation component", () => {
  it("renders all section links", async () => {
    const { default: Navigation } = await import(
      "@/components/Navigation"
    );
    const { container } = render(<Navigation />);

    const links = container.querySelectorAll("a");
    const hrefs = Array.from(links).map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("#expertise");
    expect(hrefs).toContain("#impact");
    expect(hrefs).toContain("#publications");
    expect(hrefs).toContain("#leadership");
    expect(hrefs).toContain("#recommendations");
  });

  it("has aria-label on nav element", async () => {
    const { default: Navigation } = await import(
      "@/components/Navigation"
    );
    const { container } = render(<Navigation />);

    const nav = container.querySelector("nav");
    expect(nav?.getAttribute("aria-label")).toBe("Main navigation");
  });

  it("has accessible mobile toggle button", async () => {
    const { default: Navigation } = await import(
      "@/components/Navigation"
    );
    const { container } = render(<Navigation />);

    const button = container.querySelector("button");
    expect(button).toBeTruthy();
    expect(button?.getAttribute("aria-label")).toBe(
      "Open navigation menu"
    );
    expect(button?.getAttribute("aria-expanded")).toBe("false");
    expect(button?.getAttribute("aria-controls")).toBe("mobile-menu");
  });
});

describe("Security: external link attributes", () => {
  it("all target=_blank links have noopener noreferrer", async () => {
    const { default: Hero } = await import("@/components/Hero");
    const { default: Featured } = await import("@/components/Featured");
    const { default: Publications } = await import(
      "@/components/Publications"
    );
    const { default: Footer } = await import("@/components/Footer");

    const components = [
      <Hero key="hero" />,
      <Featured key="featured" />,
      <Publications key="pubs" />,
      <Footer key="footer" />,
    ];

    for (const component of components) {
      const { container, unmount } = render(component);
      const blankLinks = container.querySelectorAll('a[target="_blank"]');
      blankLinks.forEach((link) => {
        expect(link.getAttribute("rel")).toContain("noopener");
        expect(link.getAttribute("rel")).toContain("noreferrer");
      });
      unmount();
    }
  });
});
