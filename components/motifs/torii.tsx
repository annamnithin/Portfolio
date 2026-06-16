export function Torii({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" className={className} aria-hidden="true">
      {/* top curved beam */}
      <path d="M8 38 Q80 18 152 38 L152 52 Q80 36 8 52 Z" className="fill-shu" />
      {/* second beam */}
      <rect x="20" y="62" width="120" height="12" className="fill-shu" />
      {/* left pillar */}
      <rect x="34" y="52" width="16" height="120" className="fill-shu" />
      {/* right pillar */}
      <rect x="110" y="52" width="16" height="120" className="fill-shu" />
      {/* center tablet */}
      <rect x="74" y="62" width="12" height="22" className="fill-washi" />
    </svg>
  )
}
