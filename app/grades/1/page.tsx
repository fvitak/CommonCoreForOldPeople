'use client';

import { useState } from 'react';
import Link from 'next/link';
import EmailCapture from '@/app/components/EmailCapture';
import EmailCaptureModal from '@/app/components/EmailCaptureModal';

const sections = [
  {
    title: 'Adding and Subtracting',
    description: 'Not just how to do it. What it actually means to put things together or take them away.',
    upNext: true,
  },
  {
    title: 'Place Value',
    description: 'Why where a digit sits changes everything. Ones, tens, hundreds.',
    upNext: false,
  },
  {
    title: 'Measuring Length',
    description: 'Comparing and ordering objects. It's where all measurement starts.',
    upNext: false,
  },
  {
    title: 'Telling Time',
    description: 'Reading clocks to the hour and half hour. And why we even measure time this way.',
    upNext: false,
  },
  {
    title: 'Counting and Sorting Data',
    description: 'Reading simple charts and graphs. What are the numbers actually telling you.',
    upNext: false,
  },
  {
    title: 'Shapes and Space',
    description: '2D and 3D shapes, halves and quarters. This is where geometry starts.',
    upNext: false,
  },
];

export default function Grade1Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-offwhite min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/grades"
          className="text-bark hover:underline text-base mb-10 inline-block"
        >
          ← Back to Grades
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Grade 1. First Grade Math.
        </h1>
        <p className="text-lg text-charcoal/70 mb-14">
          Here&apos;s everything we&apos;re covering in Grade 1. We&apos;re building these out now. Sign up below and we&apos;ll let you know when something&apos;s ready.
        </p>

        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setModalOpen(true)}
              className={`w-full bg-white rounded-xl px-6 py-5 text-left hover:bg-white/70 transition-colors ${
                section.upNext ? 'border-l-4 border-bark' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-charcoal mb-1">
                    {section.title}
                  </h2>
                  <p className="text-charcoal/60 text-base">
                    {section.description}
                  </p>
                </div>
                {section.upNext ? (
                  <span className="shrink-0 mt-1 bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    Up next
                  </span>
                ) : (
                  <span className="shrink-0 mt-1 bg-sage/30 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                    Coming soon
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-charcoal rounded-2xl py-8 px-4">
            <h2 className="text-white text-xl font-bold mb-1">Want to know when Grade 1 lessons go live?</h2>
            <p className="text-white/70 text-sm mb-2">No spam. Just a note when something new is ready.</p>
            <EmailCapture />
          </div>
        </div>
      </div>

      {modalOpen && <EmailCaptureModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
