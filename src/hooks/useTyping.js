import { useState, useEffect, useRef } from 'react'

export function useTyping(words) {
  const [text, setText] = useState('')
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    if (!words || words.length === 0) return
    let timer

    function tick() {
      const s    = state.current
      const word = words[s.wordIdx]

      if (s.deleting) {
        s.charIdx--
        setText(word.substring(0, s.charIdx))
      } else {
        s.charIdx++
        setText(word.substring(0, s.charIdx))
      }

      let delay = s.deleting ? 60 : 110

      if (!s.deleting && s.charIdx === word.length) {
        delay = 1800
        s.deleting = true
      } else if (s.deleting && s.charIdx === 0) {
        s.deleting = false
        s.wordIdx  = (s.wordIdx + 1) % words.length
        delay      = 400
      }

      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 1200)
    return () => clearTimeout(timer)
  }, [words])

  return text
}
