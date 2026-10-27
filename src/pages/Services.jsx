import { ArrowRight, Check, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import FaqAccordion from '../components/FaqAccordion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  clinic,
  faqs,
  processSteps,
  services,
} from '../data/site'
import useDocumentTitle from '../lib/useDocumentTitle'

const Services = () => {
  useDocumentTitle('Services')

  return (
    <div>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our services"
        title={
          <>
            Complete care for{' '}
            <em className="italic text-pine-600">how you see.</em>
          </>
        }
        description="From routine eye examinations to eyewear and contact lenses, our services are designed around your vision, your comfort and your everyday life."
      >
        <Link to="/contact" className="btn btn-primary">
          Book an appointment
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <Phone className="h-4 w-4" />
          Call the clinic
        </a>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-pine-900/15 bg-white/60 px-4 py-2 text-xs font-semibold text-ink/65 transition-colors hover:border-pine-900/30 hover:text-pine-900"
              >
                {service.shortTitle}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Reveal key={service.id}>
                  <article
                    id={service.id}
                    className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-pine-900/10 bg-white"
                  >
                    <div className="grid lg:grid-cols-[1fr_1.05fr]">
                      <div className="p-7 md:p-10">
                        <div className="flex items-center justify-between">
                          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pine-50 text-pine-700">
                            <Icon className="h-6 w-6" strokeWidth={1.6} />
                          </span>
                          <span className="font-display text-3xl text-pine-900/15">
                            {service.number}
                          </span>
                        </div>
                        <h2 className="mt-6 text-balance text-3xl leading-[1.05] md:text-4xl">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-ink/65 md:text-base">
                          {service.description}
                        </p>
                        <Link
                          to="/contact"
                          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pine-700 transition-colors hover:text-pine-900"
                        >
                          Book this service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="border-t border-pine-900/10 bg-pine-50/60 p-7 md:p-10 lg:border-l lg:border-t-0">
                        <p className="eyebrow">What&apos;s included</p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 rounded-xl border border-pine-900/5 bg-white/80 p-3 text-sm leading-5 text-ink/70"
                            >
                              <Check
                                className="mt-0.5 h-4 w-4 shrink-0 text-pine-600"
                                strokeWidth={2.4}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 flex items-center gap-2 text-xs text-ink/65">
                          <Phone className="h-3.5 w-3.5 text-pine-600" />
                          Call to check availability
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream section-padding">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="What to expect"
            title={
              <>
                A visit that feels{' '}
                <em className="italic text-pine-600">straightforward.</em>
              </>
            }
            description="Your appointment is designed to be thorough, comfortable and easy to follow."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal key={step.number} delay={index * 80} className="h-full">
                  <div className="h-full rounded-[1.75rem] border border-pine-900/10 bg-canvas p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-pine-700 shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-display text-3xl text-pine-900/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl leading-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink/65">
                      {step.text}
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Good to know"
                title={
                  <>
                    Questions,{' '}
                    <em className="italic text-pine-600">answered.</em>
                  </>
                }
                description="A few things patients often ask before their first visit. If your question is not here, we are happy to help."
              />

              <div className="mt-8 rounded-[1.5rem] border border-pine-900/10 bg-white p-6">
                <p className="text-sm font-semibold text-ink">
                  Still have a question?
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  Speak directly with our team for guidance on your visit.
                </p>
                <a
                  href={clinic.phoneHref}
                  className="btn btn-primary mt-5 w-full"
                >
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
                <a
                  href={clinic.emailHref}
                  className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-pine-700 transition-colors hover:text-pine-900"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {clinic.email}
                </a>
              </div>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Ready to schedule your eye exam?"
        description="Take the first step towards better vision and healthier eyes. Contact us today to book your appointment at Draford Eye Care Clinic."
      />
    </div>
  )
}

export default Services
