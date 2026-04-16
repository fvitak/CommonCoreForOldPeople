import Link from "next/link";

const sections = [
  {
    title: "Adding & Subtracting",
    description:
      "Understanding what it means to combine and take away — not just how to do it",
    upNext: true,
  },
  {
    title: "Place Value",
    description:
      "Why the position of a digit changes everything (ones, tens, hundreds)",
    upNext: false,
  },
  {
    title: "Measuring Length",
    description:
      "Comparing and ordering objects — the foundation of all measurement",
    upNext: false,
  },
  {
    title: "Telling Time",
    description:
      "Reading clocks to the hour and half-hour — and why we measure time the way we do",
    upNext: false,
  },
  {
    title: "Counting & Sorting Data",
    description:
      "Reading simple charts and graphs — making sense of information",
    upNext: false,
  },
  {
    title: "Shapes & Space",
    description:
      "2D and 3D shapes, halves and quarters — geometry starts here",
    upNext: false,
  },
];

export default function Grade1Page() {
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
          Choose your topic
        </h1>
        <p className="text-lg text-charcoal/70 mb-14">
          Here&apos;s everything we cover in Grade 1. We&apos;re building these out now — check
          back soon, or sign up below to get notified.
        </p>

        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`bg-white rounded-xl px-6 py-5 cursor-default select-none ${
                section.upNext ? "border-l-4 border-bark" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-charcoal/70 text-base">
                  {section.description}
                </p>
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-charcoal/70 mb-6">
            Want to know when Grade 1 lessons go live?
          </p>
          <div
            id="email-capture-placeholder"
            className="border border-tan rounded-xl p-8 text-charcoal/40 text-base"
          >
            [Email capture — see TASK-03]
          </div>
        </div>
      </div>
    </main>
  );
}
