import Link from "next/link";
import EmailCapture from "@/app/components/EmailCapture";

const grades = [
  {
    number: 1,
    subtext: "Adding, subtracting, and understanding what numbers actually mean",
    active: true,
  },
  { number: 2, subtext: "Coming soon", active: false },
  { number: 3, subtext: "Coming soon", active: false },
  { number: 4, subtext: "Coming soon", active: false },
  { number: 5, subtext: "Coming soon", active: false },
  { number: 6, subtext: "Coming soon", active: false },
];

export default function GradesPage() {
  return (
    <main className="bg-sand min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-center">
          Choose your grade
        </h1>
        <p className="text-xl text-charcoal/70 text-center mb-14">
          Start where your kid is. We&apos;ll show you the why behind what they&apos;re learning.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {grades.map((grade) =>
            grade.active ? (
              <Link
                key={grade.number}
                href="/grades/1"
                className="relative bg-bark text-white font-bold text-xl px-6 py-10 rounded-xl hover:bg-bark/85 transition-colors"
              >
                <div>Grade {grade.number}</div>
                <div className="text-sm font-normal mt-2 text-white/80">
                  {grade.subtext}
                </div>
              </Link>
            ) : (
              <div
                key={grade.number}
                className="relative bg-tan text-charcoal/60 font-bold text-xl px-6 py-10 rounded-xl opacity-60 cursor-default select-none"
              >
                <div>Grade {grade.number}</div>
                <div className="text-sm font-normal mt-2">{grade.subtext}</div>
                <span className="absolute top-3 right-3 text-base">🔒</span>
              </div>
            )
          )}
        </div>

        <div className="mt-16 bg-charcoal rounded-2xl py-8 px-4 text-center">
          <h2 className="text-white text-xl font-bold mb-1">Want to know when new grades drop?</h2>
          <p className="text-white/70 text-sm mb-2">No spam. Just a note when something new is ready.</p>
          <EmailCapture />
        </div>
      </div>
    </main>
  );
}
