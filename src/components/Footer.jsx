
"use client";

import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoGithub } from "@gravity-ui/icons";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { name: "Job discovery", href: "/job-discovery" },
    { name: "Worker AI", href: "/worker-ai" },
    { name: "Companies", href: "/companies" },
    { name: "Salary data", href: "/salary-data" },
  ];

  const navigationLinks = [
    { name: "Help Center", href: "/help-center" },
    { name: "Career Library", href: "/career-library" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Brand Guideline", href: "/brand-guideline" },
    { name: "Newsroom", href: "/newsroom" },
  ];

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="legalease logo"
                  width={200}
                  height={100}
                />
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
              Connecting talented professionals with top companies.
              Discover opportunities, hire smarter, and grow your career.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:bg-violet-500 hover:text-white"
              >
                <LogoFacebook />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition  hover:text-white hover:bg-violet-500"
              >
                <LogoGithub />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:bg-violet-500 hover:text-white"
              >
                <LogoLinkedin />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-violet-400">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-violet-400">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-violet-400">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-800 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} LegalEase. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-zinc-600 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="text-sm text-zinc-600 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-zinc-600 transition hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}