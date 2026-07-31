import ScrollReveal from './ScrollReveal'

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">04 — Projects</span>
            <h2 className="text-4xl font-bold text-white mt-2">What I've Built</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((proj, i) => (
            <ScrollReveal key={i}>
              <div className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-7 flex flex-col h-full hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-extrabold text-indigo-500/20 mb-4 font-mono">
                  {proj.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{proj.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {proj.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-gray-500 text-xs leading-relaxed">
                      <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-indigo-950/60 text-indigo-300 text-xs rounded-lg border border-indigo-800/30">
                      {t}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    ↗ Live Demo
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
