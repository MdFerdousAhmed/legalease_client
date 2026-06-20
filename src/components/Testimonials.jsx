"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "LegalEase helped me land my dream position at a leading law firm within weeks. The application process was seamless, and the job recommendations perfectly matched my experience and career goals.",
    name: "Emily Carter",
    role: "Corporate Lawyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Finding qualified legal professionals used to be challenging. LegalEase streamlined our hiring process and connected us with top-tier candidates faster than any other platform we've used.",
    name: "David Mitchell",
    role: "Legal Recruitment Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 w-full">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Users Say
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-default-500">
          Discover why legal professionals and recruiters trust LegalEase to
          grow their careers and build exceptional legal teams.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-content1 border border-default-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-default-600 italic leading-relaxed text-lg">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={56}
                height={56}
                className="rounded-full object-cover w-14 h-14"
              />

              <div>
                <h4 className="font-semibold text-lg">
                  {testimonial.name}
                </h4>

                <p className="text-primary text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}