import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Eye,
  MessageCircle,
  ScanEye,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { values } from '../data/site'
import useDocumentTitle from '../lib/useDocumentTitle'

const approach = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Listen first',
    text: 'Your history, habits and concerns shape the examination. We start with your experience, not a checklist.',
  },
  {
    number: '02',
    icon: ScanEye,
    title: 'Look closely',
    text: 'Modern diagnostics help us see what a quick check might miss, so recommendations are grounded in a full picture.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Explain clearly',
    text: 'You leave knowing what we found, what it means and what comes next — in language that makes sense.',
  },
]

const About = () => {
  useDocumentTitle('About')

  return (
    <div>
      <PageHero
        breadcrumb="About"
        eyebrow="About the clinic"
        title={
          <>
            Thoughtful eye care,{' '}
            <em className="italic text-pine-600">right here in Abuja.</em>
          </>
        }
        description="Draford Eye Care Clinic is a professional eye care facility in Gudu, Abuja, built around careful clinical practice and genuinely personal care."
      >
        <Link to="/contact" className="btn btn-primary">
          Book a visit
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="btn btn-outline">
          Explore services
        </Link>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                Our story
              </span>
              <h2 className="mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl md:text-[2.9rem]">
                A neighbourhood clinic with a{' '}
                <em className="italic text-pine-600">simple belief.</em>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-ink/70">
                <p>
                  Good vision shapes how you work, learn and connect with the
                  people around you. That belief sits at the centre of everything
                  we do at Draford Eye Care Clinic.
                </p>
                <p>
                  Based in Gudu, Abuja, we serve individuals and families across
                  the Federal Capital Territory. We combine careful clinical
                  practice with modern diagnostic equipment and an approach that
                  treats every patient as an individual, not an appointment slot.
                </p>
                <p>
                  Whether you need a routine check-up, an updated prescription or
                  advice about your eye health, we take the time to understand
                  what matters to you and to explain your options clearly.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-pine-900/10 pt-6">
                {['Gudu, Abuja', 'Comprehensive optometry', 'Patient-first care'].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-ink/65"
                    >
                      <Check className="h-4 w-4 text-pine-600" strokeWidth={2.4} />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] bg-pine-950 p-8 text-cream md:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full border border-cream/10"
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream/10">
                    <Eye className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-clay-300">
                    Our mission
                  </p>
                  <p className="mt-3 font-display text-2xl leading-[1.2] text-cream md:text-[1.75rem]">
                    To make quality eye care feel accessible, understandable and
                    genuinely personal for every person who walks through our
                    doors.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-[2rem] border border-pine-900/10 bg-clay-50 p-8 md:p-10">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-clay-700">
                    What you can expect
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {[
                      'Unhurried appointments',
                      'Plain-language explanations',
                      'Recommendations without pressure',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-ink/75"
                      >
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-200/70 text-clay-800">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream section-padding">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title={
              <>
                The principles behind{' '}
                <em className="italic text-pine-600">the practice.</em>
              </>
            }
            description="Three commitments shape how we care for every patient who visits us."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <Reveal key={value.title} delay={index * 80} className="h-full">
                  <div className="h-full rounded-[1.75rem] border border-pine-900/10 bg-canvas p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-pine-700 shadow-sm">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 text-2xl leading-tight text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink/65">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="How we care"
                title={
                  <>
                    A calmer, clearer{' '}
                    <em className="italic text-pine-600">way to be seen.</em>
                  </>
                }
                description="We have designed the clinic experience to feel straightforward from the moment you arrive to the moment you leave."
              />
              <Link
                to="/services"
                className="btn btn-outline mt-8 self-start"
              >
                See our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-pine-900/10 border-t border-pine-900/10">
              {approach.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.number} className="flex gap-5 py-6">
                    <div className="flex shrink-0 flex-col items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-pine-50 text-pine-700">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-display text-sm text-pine-900/30">
                        {item.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl leading-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Meet us"
        title="Experience eye care that feels personal."
        description="Book your eye examination at Draford Eye Care Clinic and discover the difference a thoughtful, unhurried approach makes."
      />
    </div>
  )
}

export default About
