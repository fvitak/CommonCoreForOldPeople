'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="max-w-[420px] mx-auto text-center py-6">
        <p className="text-white text-lg">
          You&apos;re on the list. We&apos;ll let you know when new grades drop.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[420px] mx-auto px-4 py-8">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg bg-sand text-charcoal px-4 py-3 mb-3 text-base outline-none focus:ring-2 focus:ring-bark"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C17F5E] text-white font-semibold rounded-lg px-4 py-3 text-base hover:bg-[#a96c4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Signing you up...' : 'Count me in'}
      </button>
      {error && (
        <p className="text-red-300 text-sm mt-2 text-center">
          Something went wrong. Try again?
        </p>
      )}
    </form>
  );
}
