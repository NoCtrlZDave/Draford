import { Link } from 'react-router-dom'

const EyeMark = ({ className = '' }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1.6 12C5.4 6.1 10.4 3.2 16 3.2S26.6 6.1 30.4 12c-3.8 5.9-8.8 8.8-14.4 8.8S5.4 17.9 1.6 12Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" />
    <path
      d="M26 3.2v3.4M24.3 4.9h3.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
)

const Logo = ({ light = false, onClick, className = '' }) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label="Draford Eye Care Clinic — home"
    className={`group inline-flex items-center gap-3 ${className}`}
  >
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-3 ${
        light
          ? 'bg-cream text-pine-950'
          : 'bg-pine-950 text-cream shadow-[0_12px_24px_-16px_rgba(13,33,29,0.9)]'
      }`}
    >
      <EyeMark className="h-6 w-6" />
    </span>
    <span className="leading-none">
      <span
        className={`block font-display text-[1.6rem] leading-none ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        Draford
      </span>
      <span
        className={`mt-1.5 block text-[0.55rem] font-bold uppercase tracking-[0.3em] ${
          light ? 'text-cream/60' : 'text-pine-600'
        }`}
      >
        Eye Care Clinic
      </span>
    </span>
  </Link>
)

export default Logo
