import { Link } from 'react-router-dom'

const PageHero = ({ eyebrow, title, description, breadcrumb, children }) => (
  <section className="relative overflow-hidden border-b border-pine-900/10 bg-cream">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-grid-soft opacity-70 [mask-image:radial-gradient(120%_90%_at_80%_0%,black,transparent_72%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-pine-900/10"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-8 top-10 h-56 w-56 rounded-full border border-pine-900/10"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-16 top-24 h-2.5 w-2.5 rounded-full bg-clay-400"
    />

    <div className="container-custom relative py-14 md:py-20">
      <nav
        aria-label="Breadcrumb"
        className="mb-7 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-pine-600"
      >
        <Link to="/" className="transition-colors hover:text-pine-900">
          Home
        </Link>
        <span aria-hidden="true" className="text-pine-900/25">
          /
        </span>
        <span className="text-pine-900/45">{breadcrumb}</span>
      </nav>

      <div className="max-w-3xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          {eyebrow}
        </span>
        <h1 className="mt-4 text-balance text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70 md:text-lg">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  </section>
)

export default PageHero
