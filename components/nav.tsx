"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-0.5 origin-left bg-shu" style={{ scaleX: progress }} />
      <nav
        className={`flex items-center justify-between px-6 py-4 transition-colors duration-500 md:px-10 ${
          scrolled ? "border-b border-border bg-washi/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Nithin Annam — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-shu text-sm font-serif text-washi">
            ニ
          </span>
          <span className="font-serif text-lg tracking-wide text-sumi">Nithin Annam</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-shu focus-visible:text-shu"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-5 bg-sumi" />
          <span className="h-0.5 w-5 bg-sumi" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-b border-border bg-washi/95 px-6 py-3 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted hover:text-shu"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
