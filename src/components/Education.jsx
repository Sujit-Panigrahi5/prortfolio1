import ScrollReveal from './ScrollReveal'

export default function Education({ data }) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">05 — Education</span>
            <h2 className="text-4xl font-bold text-white mt-2">Academic Background</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {data.education.map((edu, i) => (
            <ScrollReveal key={i}>
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 flex gap-5 hover:border-indigo-500/30 transition-colors h-full">
                <div className="text-3xl shrink-0">🎓</div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 text-sm mb-3">{edu.institution}</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{edu.duration}</span>
                    <span className="text-indigo-300 font-semibold">{edu.grade}</span>
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
