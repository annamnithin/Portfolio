"use client"

import { useMemo } from "react"

type ParticleKind = "maple" | "sakura" | "spark"

const MapleLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c.6 1.8.3 3.1-.8 4.2 1.3-.4 2.3-1.1 3-2.3.2 1.6-.2 2.9-1.2 4 1.6-.2 2.9-.9 3.9-2-.1 1.9-.9 3.3-2.4 4.3l3.5.2-2.7 1.8 1 1.2-3.2-.3.6 3.4-2.4-1.9-1.9 2.6-1.9-2.6-2.4 1.9.6-3.4-3.2.3 1-1.2L2 13.4l3.5-.2C4 12.2 3.2 10.8 3.1 8.9c1 1.1 2.3 1.8 3.9 2-1-1.1-1.4-2.4-1.2-4 .7 1.2 1.7 1.9 3 2.3C7.7 10.1 7.4 8.8 8 7c1 .9 1.7 2 2 3.3.3-1.3.9-2.4 2-3.3z" />
  </svg>
)

const SakuraPetal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 3c2.2 1.4 4.5 4.2 4.5 7.2 0 2.1-1.3 3.6-3 4.4.7 1 1.1 2.2 1.1 3.4 0 .9-.6 1.5-1.4 1.5-.8 0-1.7-.7-3.2-2-1.5 1.3-2.4 2-3.2 2-.8 0-1.4-.6-1.4-1.5 0-1.2.4-2.4 1.1-3.4-1.7-.8-3-2.3-3-4.4C7.5 7.2 9.8 4.4 12 3z" />
  </svg>
)

const Spark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="6" />
  </svg>
)

export function ParticleField({
  kind,
  count = 18,
  className = "",
  colorClass,
}: {
  kind: ParticleKind
  count?: number
  className?: string
  colorClass?: string
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100
        const size = 10 + Math.random() * 16
        const duration = 7 + Math.random() * 9
        const delay = Math.random() * 10
        const drift = (Math.random() * 160 - 80).toFixed(0) + "px"
        const animName = kind === "sakura" ? "petal-drift" : "leaf-fall"
        return { i, left, size, duration, delay, drift, animName }
      }),
    [count, kind],
  )

  const defaultColor =
    kind === "maple" ? "text-shu/70" : kind === "sakura" ? "text-pink-300/80" : "text-ochre/60"

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.i}
          className={`absolute top-[-8%] ${colorClass ?? defaultColor}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            // @ts-expect-error custom property
            "--drift": p.drift,
            animation: `${p.animName} ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {kind === "maple" ? (
            <MapleLeaf className="h-full w-full" />
          ) : kind === "sakura" ? (
            <SakuraPetal className="h-full w-full" />
          ) : (
            <Spark className="h-full w-full" />
          )}
        </span>
      ))}
    </div>
  )
}
