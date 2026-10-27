import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { clinic, navLinks } from '../data/site'
import Logo from './Logo'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 8,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <div className="bg-pine-950 text-cream/75">
        <div className="container-custom flex items-center justify-between gap-4 py-2.5 text-[0.7rem] font-medium">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-clay-300" />
            <span className="truncate">
              Gudu, Abuja
              <span className="hidden sm:inline">
                {' '}
                · Comprehensive eye care for the whole family
              </span>
            </span>
          </p>
          <a
            href={clinic.phoneHref}
            className="flex shrink-0 items-center gap-2 transition-colors hover:text-cream"
          >
            <Phone className="h-3.5 w-3.5 text-clay-300" />
            {clinic.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-pine-900/10 bg-canvas/85 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_22px_45px_-34px_rgba(13,33,29,0.7)]' : ''
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-6 py-3.5">
          <Logo onClick={closeMenu} />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `group relative text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-pine-900'
                      : 'text-ink/65 hover:text-pine-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-clay-500 transition-opacity ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-40'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={clinic.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-ink/65 transition-colors hover:text-pine-900 xl:flex"
            >
              <Phone className="h-4 w-4 text-pine-600" />
              {clinic.phone}
            </a>
            <Link
              to="/contact"
              className="btn btn-primary px-5 py-3 text-[0.82rem] group"
            >
              Book a visit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-pine-900/15 bg-white/60 text-ink transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-pine-900/10 bg-canvas shadow-[0_35px_60px_-35px_rgba(13,33,29,0.5)] lg:hidden"
          >
            <div className="container-custom py-6">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-pine-900/10 py-4 font-display text-2xl transition-colors ${
                        isActive ? 'text-pine-700' : 'text-ink'
                      }`
                    }
                  >
                    {link.name}
                    <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] text-pine-900/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="btn btn-primary w-full"
                >
                  Book a visit
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={clinic.phoneHref} className="btn btn-outline w-full">
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-ink/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pine-600" />
                {clinic.address}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
