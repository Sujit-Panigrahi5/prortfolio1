import ScrollReveal from './ScrollReveal'

export default function Skills({ data }) {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">02 — Skills</span>
            <h2 className="text-4xl font-bold text-white mt-2">Technical Expertise</h2>
          </div>
        </ScrollReveal>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {Object.entries(data.skills).map(([cat, items]) => (
            <ScrollReveal key={cat}>
              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 h-full hover:border-indigo-500/30 transition-colors">
                <h3 className="text-white font-semibold mb-4">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-indigo-950/60 text-indigo-300 text-xs rounded-full border border-indigo-800/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ML Learning */}
        {data.ml_learning?.length > 0 && (
          <>
            <ScrollReveal>
              <div className="mb-10">
                <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">Currently Learning</span>
                <h3 className="text-3xl font-bold text-white mt-2">Machine Learning Journey</h3>
                <p className="text-gray-400 mt-2">Actively building ML skills with Scikit-learn, NumPy, and Pandas</p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.ml_learning.map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-sm">{item.topic}</span>
                      <span className="text-indigo-400 font-bold text-sm">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 mb-3">
                      <div
                        className="bg-indigo-500 h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
