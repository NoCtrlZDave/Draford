import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarCheck,
  Check,
  Clock,
  Eye,
  MapPin,
  Navigation,
  Phone,
  Quote,
  Star,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import HeroImageCarousel from '../components/HeroImageCarousel'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  clinic,
  differentiators,
  pillars,
  processSteps,
  services,
} from '../data/site'
import useDocumentTitle from '../lib/useDocumentTitle'

const stats = [
  { icon: Users, value: '1000+', label: 'Patients served' },
  { icon: Award, value: 'Expert', label: 'Professional care' },
  { icon: Eye, value: 'Comprehensive', label: 'Eye examinations' },
  { icon: Star, value: '5-Star', label: 'Patient experience' },
]

const testimonials = [
  {
    name: 'Sarah A.',
    location: 'Abuja',
    text: 'Exceptional care and attention to detail. The team took time to explain everything and helped me find the perfect glasses.',
    rating: 5,
  },
  {
    name: 'Michael O.',
    location: 'Gudu',
    text: 'Professional, thorough, and genuinely caring. My eye exam was comprehensive and I left feeling confident about my eye health.',
    rating: 5,
  },
  {
    name: 'Amina K.',
    location: 'Abuja',
    text: 'Modern facility with friendly staff. They made me comfortable throughout and provided clear explanations. Highly recommend!',
    rating: 5,
  },
]

const Home = () => {
  useDocumentTitle(null)

  return (
    <div>
      <HeroImageCarousel />

      <section className="relative -mt-16 md:-mt-20">
        <div className="container-custom">
          <Reveal>
            <div className="grid gap-4 rounded-[1.75rem] border border-pine-900/10 bg-white/90 p-6 shadow-[0_40px_80px_-50px_rgba(13,33,29,0.7)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center gap-3.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="font-display text-xl text-ink">{stat.value}</p>
                      <p className="text-xs text-ink/65">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream">
        <div className="container-custom grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                <pillar.icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{pillar.title}</p>
                <p className="mt-1 text-xs leading-5 text-ink/65">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Eye care, <em className="italic text-pine-600">made personal.</em>
                </>
              }
              description="From a routine check-up to new glasses or contact lenses, every service is built around your eyes and your everyday life."
            />
            <Link
              to="/services"
              className="btn btn-outline shrink-0 self-start md:self-auto"
            >
              All services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.id} delay={index * 70} className="h-full">
                  <Link
                    to={`/services#${service.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-pine-900/20 hover:shadow-[0_40px_80px_-50px_rgba(13,33,29,0.7)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pine-50/50 blur-2xl transition-all duration-500 group-hover:bg-pine-100/60"
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pine-50 text-pine-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-pine-900 group-hover:text-cream group-hover:shadow-[0_20px_40px_-20px_rgba(23,58,51,0.8)]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </span>
                      <span className="font-display text-2xl text-pine-900/20">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-pine-900">
                      {service.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-ink/65">
                      {service.summary}
                    </p>
                    <span className="relative mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-pine-700">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-pine-900/10 bg-cream">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 md:p-12 lg:p-14">
                  <SectionHeading
                    eyebrow="Why Draford"
                    title={
                      <>
                        Care that sees{' '}
                        <em className="italic text-pine-600">the whole you.</em>
                      </>
                    }
                    description="Your eyes are part of a bigger picture. We take the time to understand your history, your habits and what you need from your vision."
                  />

                  <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {differentiators.map((item) => {
                      const Icon = item.icon

                      return (
                        <div key={item.title} className="group">
                          <div className="flex items-center gap-2.5">
                            <Icon
                              className="h-4.5 w-4.5 text-pine-600 transition-transform duration-300 group-hover:scale-110"
                              strokeWidth={1.8}
                            />
                            <h3 className="font-sans text-sm font-semibold text-ink">
                              {item.title}
                            </h3>
                          </div>
                          <p className="mt-2 text-xs leading-5 text-ink/65">
                            {item.text}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="relative overflow-hidden bg-pine-950 p-8 text-cream md:p-12 lg:p-14">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cream/10"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-cream/10"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-clay-400/10 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="bg-noise pointer-events-none absolute inset-0"
                  />

                  <div className="relative">
                    <Quote className="h-8 w-8 text-clay-300" strokeWidth={1.4} />
                    <blockquote className="mt-6 text-balance text-3xl leading-[1.08] text-cream md:text-4xl">
                      &ldquo;Clear vision is more than seeing well. It&apos;s
                      moving through your day with confidence.&rdquo;
                    </blockquote>
                    <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-clay-300">
                      The Draford approach
                    </p>

                    <div className="mt-10 flex items-center gap-3 border-t border-cream/10 pt-6">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/10">
                        <Eye className="h-4 w-4 text-cream" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-cream">
                          The Draford care team
                        </p>
                        <p className="text-xs text-cream/60">Gudu, Abuja</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream section-padding">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="What patients say"
            title={
              <>
                Trusted by families in{' '}
                <em className="italic text-pine-600">Gudu, Abuja.</em>
              </>
            }
            description="Hear from patients who have experienced our thoughtful, unhurried approach to eye care."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80}>
                <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-50px_rgba(13,33,29,0.7)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-clay-50/60 blur-2xl transition-all duration-500 group-hover:bg-clay-100/70"
                  />
                  <div className="relative flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-clay-400 text-clay-400" />
                    ))}
                  </div>
                  <blockquote className="relative mt-5 text-sm leading-7 text-ink/75">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="relative mt-6 flex items-center gap-3 border-t border-pine-900/10 pt-5">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-pine-50 text-pine-700">
                      <span className="text-sm font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                      <p className="text-xs text-ink/60">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream section-padding">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="Your visit"
            title={
              <>
                Simple from <em className="italic text-pine-600">start to finish.</em>
              </>
            }
            description="No complicated steps. Just a clear path to understanding your eyes and getting the care you need."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal key={step.number} delay={index * 90} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-canvas p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-50px_rgba(13,33,29,0.6)]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pine-50/50 blur-2xl transition-all duration-500 group-hover:bg-pine-100/60"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-pine-700 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-pine-900 group-hover:text-cream">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-display text-3xl text-pine-900/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="relative mt-7 text-2xl leading-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-ink/65">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="btn btn-primary">
              Book your visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Visit us"
                title={
                  <>
                    Find us in <em className="italic text-pine-600">Gudu, Abuja.</em>
                  </>
                }
                description="Conveniently located at Iyemi Plaza. Call ahead if you would like help finding us or would like to confirm today's opening hours."
              />

              <div className="mt-9 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-pine-900/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                    <MapPin className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Address</p>
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm leading-6 text-ink/65 transition-colors hover:text-pine-700"
                    >
                      {clinic.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-pine-900/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Phone</p>
                    <a
                      href={clinic.phoneHref}
                      className="mt-1 block text-sm text-ink/65 transition-colors hover:text-pine-700"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-pine-900/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                    <Clock className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Opening hours
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      {clinic.hoursNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get directions
                  <Navigation className="h-4 w-4" />
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Contact the clinic
                </Link>
              </div>
            </div>

            <div className="min-h-[26rem] overflow-hidden rounded-[2rem] border border-pine-900/10 bg-pine-50">
              <iframe
                src={clinic.mapEmbedUrl}
                title="Draford Eye Care Clinic location map"
                className="h-full min-h-[26rem] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

export default Home
