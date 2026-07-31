import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from './ScrollReveal'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact({ data }) {
  const formRef = useRef(null)
  const [busy,   setBusy]   = useState(false)
  const [status, setStatus] = useState({ text: '', type: '' })

  const handleSubmit = async e => {
    e.preventDefault()
    setBusy(true)
    setStatus({ text: '', type: '' })

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ text: '⚠️ EmailJS is not configured yet. Please set up your .env file.', type: 'warn' })
      setBusy(false)
      return
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus({ text: '✅ Message sent! I will get back to you soon.', type: 'success' })
      formRef.current.reset()
    } catch {
      setStatus({ text: '❌ Something went wrong. Please email me directly.', type: 'error' })
    } finally {
      setBusy(false)
    }
  }

  const INFO = [
    { icon: '📧', label: 'Email',    value: data.email,    href: `mailto:${data.email}` },
    { icon: '📍', label: 'Location', value: data.location, href: null },
    { icon: '💼', label: 'LinkedIn', value: 'sujit-panigrahi', href: data.linkedin },
    { icon: '✅', label: 'Status',   value: 'Open to Opportunities', href: null, highlight: true },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">06 — Contact</span>
            <h2 className="text-4xl font-bold text-white mt-2">Get In Touch</h2>
            <p className="text-gray-400 mt-3">Open to Software Engineer &amp; Automation roles. Feel free to reach out!</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact info */}
          <ScrollReveal>
            <div className="space-y-6">
              {INFO.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm ${item.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@company.com"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Hi Sujit, I'd like to discuss an opportunity..."
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={busy}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors"
              >
                {busy ? 'Sending…' : 'Send Message →'}
              </button>

              {status.text && (
                <p className={`text-sm text-center ${
                  status.type === 'success' ? 'text-green-400' :
                  status.type === 'warn'    ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {status.text}
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
