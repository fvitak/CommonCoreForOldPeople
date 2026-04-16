import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Section 1 — Grade Preview */}
      <section className="bg-tan py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12">Common Core, Common Sense, Grade by Grade</h2>
        <div className="flex flex-nowrap justify-center gap-4 max-w-4xl mx-auto">
          <Link
            href="/grades/1"
            className="bg-bark text-white font-bold text-lg px-6 py-8 rounded-xl flex-1 hover:bg-bark/85 transition-colors"
          >
            <div>Grade 1</div>
            <div className="text-sm font-normal mt-2 text-white/80">Coming soon</div>
          </Link>
          {["Grade 2", "Grade 3", "Grade 4", "Grade 5"].map((grade) => (
            <div
              key={grade}
              className="bg-bark/40 border-2 border-bark/30 text-charcoal/60 font-bold text-lg px-6 py-8 rounded-xl flex-1 cursor-not-allowed select-none"
            >
              <div>{grade}</div>
              <div className="text-sm font-normal mt-2 text-charcoal/40">Coming soon</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Hook */}
      <section className="bg-sand flex flex-col items-center justify-center text-center px-6 py-7">
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal max-w-4xl leading-tight mb-6">
          Confused why your kid&apos;s math homework looks nothing like math?
        </h1>
        <p className="text-xl md:text-2xl text-charcoal max-w-2xl mb-6">
          You&apos;re not wrong to be confused. But there&apos;s a reason it works — and it takes about 10 minutes to get it.
        </p>
        <p className="text-base text-charcoal/70 italic max-w-xl">
          From a dad who rolled his eyes at Common Core for years — until his 7-year-old changed his mind at a science fair.
        </p>
      </section>

      {/* Section 3 — The Conversion Story */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-6 text-charcoal text-lg leading-relaxed">
          <p>
            I was always decent at math. Not because I memorized everything — honestly, multiplication tables were a struggle. What I did instead was figure out tricks. There&apos;s this thing with nines: put down the finger you&apos;re multiplying by, count the fingers on each side, and you&apos;ve got your answer. I broke big problems into smaller ones I could add up. I didn&apos;t know that was a technique. I didn&apos;t know it had a name. It was just how my brain worked.
          </p>
          <p>
            Then Common Core showed up and everybody lost their minds. Me included. I glanced at some of the homework — just glanced, no context — and thought: what the hell is that? Why would you take simple math and make it look like that? I was fully on board with the backlash. That was a reasonable position, I thought.
          </p>
          <p>
            My wife has a master&apos;s in childhood education. She specializes in special needs kids. Early on, she got into it with a friend over Common Core — defending it, actually. I was listening, because she was making sense. We&apos;re behind the rest of the world in math. Not a little — a lot. And the way we&apos;ve been teaching it was never really about understanding. It was about passing a test. The fastest way to get the right answer has always been a calculator. So if that&apos;s all we&apos;re doing — teaching kids to arrive at an answer — what exactly did we learn?
          </p>
          <p>
            That started to land for me. Math, while you&apos;re learning it, is not about the answer. My nine-finger trick works. But it works not because of fingers. Nine times six is fifty-four because if you have six groups of nine things, you have fifty-four things. That&apos;s real. The trick is just a shortcut to something that was already true before I invented my little workaround.
          </p>
          <p>
            My son is in first grade. Late birthday, so one of the youngest in his class. We were at a STEAM fair — the math station, easy, medium, hard problems. We picked medium. The teacher put up 60 minus 32. I double-took. That felt like a big jump for a first grader. The teacher started to pull it back. I said let him try.
          </p>
          <p>
            He took a few seconds. Then he worked through it out loud, in groups of ten: six groups of ten, take away three groups, you&apos;ve got thirty. Thirty minus two is twenty-eight. Done. I had to actually think about it myself to confirm he was right.
          </p>
          <p>
            How many of us would&apos;ve needed a second to do 60 minus 32 on paper? Borrowing works — but why does it work? That &ldquo;why&rdquo; isn&apos;t in the curriculum. It&apos;s not on the test, so nobody teaches it. This site is that ten-minute conversation. The one that turns &ldquo;what is this nonsense&rdquo; into &ldquo;oh — that&apos;s actually kind of brilliant.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 4 — What This Is */}
      <section className="bg-sage py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">What we&apos;re building</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Grade-by-grade guides for parents — starting with 1st grade and working up. Each one shows you the old way you remember, the Common Core way your kid is learning, and most importantly, <em>why</em> they&apos;re actually the same thing.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Who it&apos;s for</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Anyone sitting at a kitchen table feeling like the dummy in the room. Gen X parents who learned math by memorization and now feel lost. Grandparents helping with homework. Anyone who ever thought Common Core was nonsense and is willing to give it ten minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Email Capture */}
      <section className="bg-charcoal py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Want to know when new grades drop?
        </h2>
        <div
          id="email-capture-placeholder"
          className="text-tan text-lg max-w-md mx-auto border border-tan/30 rounded-xl p-8"
        >
          Sign up below — [email form coming in TASK-03]
        </div>
      </section>
    </main>
  );
}
