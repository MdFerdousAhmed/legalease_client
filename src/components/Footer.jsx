"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-default-100 border-t border-default-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Description */}
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
            <p className="mt-3 text-default-600 text-sm leading-relaxed">
              Connecting legal professionals with top law firms and recruiters
              worldwide. Build your career with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-default-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Newsletter
            </h3>

            <p className="text-default-600 text-sm mb-4">
              Subscribe to receive job updates and career tips.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-default-300 px-4 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="button"
                className="bg-primary text-white rounded-xl px-4 py-2 font-medium hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <p className="text-default-600 text-sm mb-4">
              Stay connected through our social channels.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center hover:bg-primary hover:text-sky-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center hover:bg-primary hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center hover:bg-primary hover:text-sky-400 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center hover:bg-primary hover:text-sky-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-default-200 mt-10 pt-6 text-center text-sm text-default-500">
          © {new Date().getFullYear()} LegalEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}