export default function Footer({ data }) {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>
          Built with{' '}
          <span className="text-indigo-400">React</span> +{' '}
          <span className="text-indigo-400">Tailwind CSS</span>
          {' '}|{' '}© 2026 {data.name}
        </p>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-indigo-400 transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
