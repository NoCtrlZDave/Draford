import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinic, navLinks, services } from '../data/site'
import Logo from './Logo'

const Footer = () => (
  <footer className="relative overflow-hidden bg-pine-950 text-cream/65">
    <div
      aria-hidden="true"
      className="bg-noise pointer-events-none absolute inset-0"
    />
    <p
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] leading-none text-cream/[0.03]"
    >
      Draford
    </p>

    <div className="container-custom relative pb-10 pt-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_0.85fr_1.1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-7 text-cream/55">
            Thoughtful, comprehensive eye care in Gudu, Abuja. Clearer vision
            and better eye health, one appointment at a time.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Draford Eye Care Clinic on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/30 hover:bg-cream/10 hover:text-cream"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cream/55">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-cream"
                >
                  {link.name}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cream/55">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services#${service.id}`}
                  className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-cream"
                >
                  {service.shortTitle}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cream/55">
            Visit us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
              <span>
                {clinic.addressLines[0]}
                <br />
                {clinic.addressLines[1]}
              </span>
            </li>
            <li>
              <a
                href={clinic.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4 shrink-0 text-clay-300" />
                {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href={clinic.emailHref}
                className="flex items-start gap-3 break-all transition-colors hover:text-cream"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 transition-colors hover:text-cream"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
