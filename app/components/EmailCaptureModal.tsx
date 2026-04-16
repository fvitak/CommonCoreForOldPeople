'use client';

import { useEffect } from 'react';
import EmailCapture from './EmailCapture';

interface Props {
  onClose: () => void;
}

export default function EmailCaptureModal({ onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-charcoal rounded-2xl py-10 px-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-white text-2xl font-bold text-center mb-1">
          Want to know when this drops?
        </h2>
        <p className="text-white/70 text-sm text-center mb-2">
          No spam. Just a note when something new is ready.
        </p>
        <EmailCapture />
      </div>
    </div>
  );
}
