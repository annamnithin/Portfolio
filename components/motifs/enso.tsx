"use client"

import { motion } from "framer-motion"

export function Enso({ className = "", strokeClass = "stroke-sumi" }: { className?: string; strokeClass?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <motion.path
        d="M148 52c-12-14-30-23-50-23-39 0-70 31-70 70s31 70 70 70c33 0 61-23 68-54"
        className={strokeClass}
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  )
}
