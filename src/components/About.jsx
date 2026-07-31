import ScrollReveal from './ScrollReveal'

export default function About({ data }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">01 — About</span>
            <h2 className="text-4xl font-bold text-white mt-2">Who I Am</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Photo + bio */}
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <div className="relative w-40 h-40">
                <img
                  src="/sujit.jpg"
                  alt="Sujit Panigrahi"
                  className="w-40 h-40 rounded-2xl object-cover ring-2 ring-indigo-500/50 ring-offset-4 ring-offset-gray-950"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">{data.about}</p>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors w-fit"
              >
                View LinkedIn Profile ↗
              </a>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-colors"
                >
                  <div className="text-4xl font-extrabold text-indigo-400 mb-2">{s.number}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
