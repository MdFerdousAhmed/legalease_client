"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white md:text-4xl font-sans">Client Testimonials</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
          Do not just take our word for it. Hear from leading organizers and attendees enjoying the platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 border border-white/5 backdrop-blur-xl hover:border-pink-500/30 transition-all duration-300 p-8 rounded-2xl space-y-6 relative hover:-translate-y-1">
          <p className="text-slate-300 italic text-md leading-relaxed">
            Discover rewarding opportunities in the legal industry. Connect with leading law firms, corporate legal teams, and recruiters to advance your career with confidence.
          </p>
          <div className="flex items-center gap-4">
            <Image
              width={48}
              height={48}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              className="rounded-full h-12 w-12 object-cover shrink-0"
              alt="user image"
            />
            <div>
              <h4 className="text-white font-bold text-sm">Sarah Jenkins</h4>
              <p className="text-indigo-500 text-xs font-semibold">Director, TechVibe Events</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/5 backdrop-blur-xl hover:border-pink-500/30 transition-all duration-300 p-8 rounded-2xl space-y-6 relative hover:-translate-y-1">
          <p className="text-slate-300 italic text-md leading-relaxed">
            Find qualified legal professionals faster than ever. Post jobs, manage applications, and connect with top talent through a streamlined hiring experience.
          </p>
          <div className="flex items-center gap-4">
            <Image
              width={48}
              height={48}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              className="rounded-full w-12 h-12 object-cover shrink-0"
              alt="user image"
            />
            <div>
              <h4 className="text-white font-bold text-sm">Marcus Brody</h4>
              <p className="text-indigo-500 text-xs font-semibold">Fervent Event Attendee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}