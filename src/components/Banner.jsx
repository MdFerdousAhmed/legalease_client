"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import Image from "next/image";

const slides = [
  {
    title: "Find Your Dream Legal Job",
    desc: "Connect with top recruiters and law firms worldwide.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Hire Verified Legal Professionals",
    desc: "Recruit the best lawyers, paralegals, and legal experts.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Smart Hiring, Faster Results",
    desc: "AI-powered matching for legal careers and recruiters.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
              {slide.desc}
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                Find Jobs
              </button>
              <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-medium">
                Hire Talent
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}