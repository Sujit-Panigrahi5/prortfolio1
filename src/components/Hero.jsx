import { useTyping } from '../hooks/useTyping'

export default function Hero({ data }) {
  const typedText = useTyping(data.taglines)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl">
        <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          {data.name}
        </h1>
        <div className="text-xl md:text-2xl text-gray-400 mb-2 h-8">
          <span>I&apos;m a </span>
          <span className="text-indigo-300 font-semibold">{typedText}</span>
          <span className="text-indigo-400 animate-blink">|</span>
        </div>
        <p className="text-gray-500 text-sm mb-10">{data.location}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 font-semibold rounded-xl transition-colors"
          >
            Get In Touch
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white font-semibold rounded-xl transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gray-600" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
