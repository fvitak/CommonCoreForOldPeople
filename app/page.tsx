import EmailCapture from "@/app/components/EmailCapture";
import GradeGrid from "@/app/components/GradeGrid";

export default function Home() {
  return (
    <main>
      {/* Sections 1+2 fill the viewport so the email capture is always above the fold */}
      <div className="min-h-screen flex flex-col">

        {/* Section 1 — Grade Preview */}
        <section
          className="bg-tan px-6 text-center flex-shrink-0"
          style={{ paddingTop: 'clamp(0.75rem, 2.7vh, 4rem)', paddingBottom: 'clamp(0.75rem, 2.7vh, 4rem)' }}
        >
          <h2
            className="font-bold text-charcoal"
            style={{ fontSize: 'clamp(1.5rem, 3.6vh, 3rem)', marginBottom: 'clamp(1rem, 2.3vh, 3rem)' }}
          >
            Grade by grade. Starting now.
          </h2>
          <p className="text-charcoal/70 mb-4 text-base">Grade 1 is live. More coming fast.</p>
          <GradeGrid />
        </section>

        {/* Section 2 — Hook + Email Capture */}
        <section className="bg-sand flex flex-col items-center justify-center text-center px-6 flex-1"
          style={{ paddingTop: 'clamp(0.5rem, 1.5vh, 1.75rem)', paddingBottom: 'clamp(0.5rem, 1.5vh, 1.75rem)' }}
        >
          <h1
            className="font-bold text-charcoal max-w-4xl leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4.2vh, 3.75rem)', marginBottom: 'clamp(0.5rem, 1.2vh, 1.5rem)' }}
          >
            Confused why your kid&apos;s math homework looks nothing like math?
          </h1>
          <p
            className="text-charcoal max-w-2xl"
            style={{ fontSize: 'clamp(1rem, 2vh, 1.5rem)', marginBottom: 'clamp(0.5rem, 1.2vh, 1.5rem)' }}
          >
            You&apos;re not wrong. There&apos;s actually a reason it works. It takes about 10 minutes to get it and honestly you&apos;ll be glad you did.
          </p>
          <p
            className="text-charcoal/70 italic max-w-xl"
            style={{ fontSize: 'clamp(0.875rem, 1.5vh, 1rem)', marginBottom: 'clamp(0.5rem, 1.5vh, 2rem)' }}
          >
            From a dad who thought it was total nonsense. Until his 7-year-old schooled him at a science fair.
          </p>
          <div className="w-full bg-charcoal rounded-2xl py-6 px-4 max-w-[480px]">
            <h2 className="text-white text-xl font-bold mb-1">Want to know when new grades drop?</h2>
            <p className="text-white/70 text-sm mb-2">No spam. Just a heads up when something&apos;s ready.</p>
            <EmailCapture />
          </div>
        </section>

      </div>

      {/* Section 3 — The Story */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-6 text-charcoal text-lg leading-relaxed">
          <p>
            I was always good at math. Not because I memorized everything. Honestly, multiplication tables were kind of a mess for me. I learned tricks instead. The nine-finger trick where you put down the finger you&apos;re multiplying by and count the fingers on each side. Breaking big problems into smaller ones I could add up. I just figured that&apos;s how everybody did it. Turns out that was a thing.
          </p>
          <p>
            Then Common Core came along and everyone lost their minds. I was right there with them. I looked at some of the homework solutions, didn&apos;t read anything, no context, just glanced at them and thought what the hell is that. Why would you make simple math more complicated. I was fully bought in to the backlash.
          </p>
          <p>
            My wife has a master&apos;s in childhood education. She specializes in special needs. Early on she got into it with a friend of mine over this stuff. She was defending Common Core and I actually listened because she was making sense. We&apos;re behind the rest of the world in math. The old way was never really about understanding. It was about passing a test. The easiest way to get the right answer has always been a calculator. So if that&apos;s the goal, what exactly did we learn?
          </p>
          <p>
            Here&apos;s the thing. Math, while you&apos;re learning it, is not about the answer. The nine-finger trick works. But not because of fingers. Nine times six is fifty-four because if you have six groups of nine things, you have fifty-four things. That&apos;s real. The trick is just a shortcut to something that was already true. I was doing Common Core math my whole life. I just didn&apos;t know it had a name.
          </p>
          <p>
            My son. First grade, late birthday, one of the youngest in his class. We&apos;re at a STEAM fair math station. Easy, medium, hard. He fires off the easy one like it was a waste of his time. We go medium. The teacher throws out 60 minus 32. I double take. That&apos;s a hell of a jump. The teacher starts to back off and I say nah, let him try. He takes a few seconds and then works through it in groups of ten. Six groups of ten, take away three, you&apos;ve got thirty, minus two is twenty-eight. Done. I had to actually think about that myself.
          </p>
          <p>
            How many of us would have needed a second to work through 60 minus 32 on paper? Borrowing works. But why does it work? That why is not in the curriculum. It&apos;s not on the test so teachers don&apos;t have time to teach it, if they even know it themselves. This site is that ten minute conversation. The one that turns &ldquo;what the hell is this&rdquo; into &ldquo;oh that&apos;s actually kind of brilliant.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 4 — What This Is */}
      <section className="bg-sage py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">What we&apos;re building</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Grade by grade guides for parents. Starting with 1st grade and working up. Each one shows you the way you remember learning it, the way your kid is learning it now, and the part nobody ever explains: why they&apos;re actually the same thing.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Who it&apos;s for</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Anyone sitting at a kitchen table feeling like the dummy in the room. Gen X parents who learned math by memorization and now feel completely lost. Grandparents helping with homework. Anyone who ever looked at their kid&apos;s worksheet and thought &ldquo;this is insane&rdquo; and is willing to give it ten minutes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
