import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinic } from '../data/site'

const CtaBand = ({
  eyebrow = 'Book your visit',
  title = 'Your eyes deserve a closer look.',
  description = 'Book a comprehensive eye examination at Draford Eye Care Clinic in Gudu, Abuja. We will confirm your appointment and answer any questions you have.',
  className = '',
}) => (
  <section className={`container-custom pb-20 md:pb-28 ${className}`}>
    <div className="group relative overflow-hidden rounded-[2rem] bg-pine-950 px-6 py-14 text-cream transition-all duration-500 hover:shadow-[0_60px_120px_-60px_rgba(12,33,29,0.9)] md:px-14 md:py-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full border border-cream/10 transition-transform duration-1000 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-cream/10 transition-transform duration-1000 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-clay-400/15 blur-3xl transition-all duration-1000 group-hover:bg-clay-400/25"
      />
      <div
        aria-hidden="true"
        className="bg-noise pointer-events-none absolute inset-0"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-end">
        <div>
          <span className="eyebrow text-clay-300">
            <span className="h-1.5 w-1.5 rounded-full bg-clay-300" />
            {eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl leading-[1.03] text-cream sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 md:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link to="/contact" className="btn btn-cream group/btn">
            Book an appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
          <a href={clinic.phoneHref} className="btn btn-on-dark">
            <Phone className="h-4 w-4" />
            Call the clinic
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default CtaBand
