'use client';

import { useState } from 'react';
import Link from 'next/link';
import EmailCaptureModal from './EmailCaptureModal';

export default function GradeGrid() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-nowrap justify-center gap-4 max-w-4xl mx-auto">
        <Link
          href="/grades/1"
          className="bg-bark text-white font-bold text-lg px-6 rounded-xl flex-1 hover:bg-bark/85 transition-colors"
          style={{ paddingTop: 'clamp(0.75rem, 1.9vh, 2rem)', paddingBottom: 'clamp(0.75rem, 1.9vh, 2rem)' }}
        >
          <div>Grade 1</div>
          <div className="text-sm font-normal mt-2 text-white/80">Coming soon</div>
        </Link>
        {['Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map((grade) => (
          <button
            key={grade}
            onClick={() => setModalOpen(true)}
            className="bg-bark/40 border-2 border-bark/30 text-charcoal/60 font-bold text-lg px-6 rounded-xl flex-1 text-left hover:bg-bark/50 transition-colors"
            style={{ paddingTop: 'clamp(0.75rem, 1.9vh, 2rem)', paddingBottom: 'clamp(0.75rem, 1.9vh, 2rem)' }}
          >
            <div>{grade}</div>
            <div className="text-sm font-normal mt-2 text-charcoal/40">Coming soon</div>
          </button>
        ))}
      </div>
      {modalOpen && <EmailCaptureModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
