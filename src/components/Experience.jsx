import ScrollReveal from './ScrollReveal'

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">03 — Experience</span>
            <h2 className="text-4xl font-bold text-white mt-2">Where I've Worked</h2>
          </div>
        </ScrollReveal>

        <div className="relative border-l-2 border-indigo-500/30 pl-8 space-y-12">
          {data.experience.map((job, i) => (
            <ScrollReveal key={i}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-950" />

                <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-indigo-400 font-medium mt-0.5">{job.company} &mdash; {job.location}</p>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-indigo-950/60 text-indigo-300 text-xs rounded-full border border-indigo-800/40 h-fit">
                      {job.duration}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mb-5">📁 {job.project}</p>

                  <ul className="space-y-3 mb-6">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
