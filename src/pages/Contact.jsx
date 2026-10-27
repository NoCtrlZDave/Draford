import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
} from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import { clinic, services } from '../data/site'
import useDocumentTitle from '../lib/useDocumentTitle'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

const timeOptions = ['Morning', 'Afternoon', 'Evening', 'Any time']

const formatDate = (value) => {
  if (!value) return ''
  return new Date(`${value}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const FieldError = ({ id, message }) =>
  message ? (
    <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  ) : null

const Contact = () => {
  useDocumentTitle('Contact & Appointments')

  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const now = new Date()
  const minDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(now.getDate()).padStart(2, '0')}`

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validate = () => {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Please enter your full name.'
    }
    if (!form.phone.trim()) {
      next.phone = 'Please enter a phone number.'
    } else if (!/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (form.date && form.date < minDate) {
      next.date = 'Please choose today or a future date.'
    }

    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    const subject = `Appointment request — ${form.name.trim()}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() && `Email: ${form.email.trim()}`,
      form.service && `Service: ${form.service}`,
      form.date && `Preferred date: ${formatDate(form.date)}`,
      form.time && `Preferred time: ${form.time}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')

    setSubmitted(true)
    window.location.href = `${clinic.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const resetForm = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact & appointments"
        title={
          <>
            Let&apos;s talk about{' '}
            <em className="italic text-pine-600">your eyes.</em>
          </>
        }
        description="Book an appointment, ask a question or get directions to the clinic. We are happy to help you take the next step."
      >
        <a href={clinic.phoneHref} className="btn btn-primary">
          <Phone className="h-4 w-4" />
          Call the clinic
        </a>
        <a
          href={clinic.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Get directions
          <Navigation className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="rounded-[2rem] border border-pine-900/10 bg-white p-6 md:p-10">
              {submitted ? (
                <div className="py-4 text-center md:py-8">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-pine-50 text-pine-700">
                    <Check className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
                    Your request is ready to send.
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ink/65">
                    We have opened your email app with your appointment details.
                    Send the email when you are ready and we will reply to
                    confirm. Prefer to talk? Call us on {clinic.phone}.
                  </p>

                  <div className="mt-7 rounded-2xl border border-pine-900/10 bg-pine-50/60 p-5 text-left text-sm">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-pine-700">
                      Your request
                    </p>
                    <dl className="mt-3 space-y-2">
                      <div className="flex justify-between gap-4">
                        <dt className="text-ink/65">Name</dt>
                        <dd className="text-right font-medium text-ink/80">
                          {form.name}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-ink/65">Phone</dt>
                        <dd className="text-right font-medium text-ink/80">
                          {form.phone}
                        </dd>
                      </div>
                      {form.service && (
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink/65">Service</dt>
                          <dd className="text-right font-medium text-ink/80">
                            {form.service}
                          </dd>
                        </div>
                      )}
                      {(form.date || form.time) && (
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink/65">Preferred</dt>
                          <dd className="text-right font-medium text-ink/80">
                            {[formatDate(form.date), form.time]
                              .filter(Boolean)
                              .join(' · ')}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-ink/65">
                    Email app did not open?{' '}
                    <a
                      href={clinic.emailHref}
                      className="font-semibold text-pine-700 underline underline-offset-2 hover:text-pine-900"
                    >
                      Email us directly
                    </a>{' '}
                    or call {clinic.phone}.
                  </p>

                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-primary"
                    >
                      Send another request
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a href={clinic.phoneHref} className="btn btn-outline">
                      <Phone className="h-4 w-4" />
                      Call instead
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                    Appointment request
                  </span>
                  <h2 className="mt-4 text-balance text-3xl leading-[1.05] md:text-4xl">
                    Tell us how we can help.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">
                    Share a few details and we will get back to you to confirm a
                    time. Prefer to talk? Call us on{' '}
                    <a
                      href={clinic.phoneHref}
                      className="font-semibold text-pine-700 underline underline-offset-2 hover:text-pine-900"
                    >
                      {clinic.phone}
                    </a>
                    .
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="label">
                          Full name{' '}
                          <span className="text-clay-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`field ${errors.name ? 'field-error' : ''}`}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        <FieldError id="name" message={errors.name} />
                      </div>

                      <div>
                        <label htmlFor="phone" className="label">
                          Phone number{' '}
                          <span className="text-clay-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className={`field ${errors.phone ? 'field-error' : ''}`}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        <FieldError id="phone" message={errors.phone} />
                      </div>

                      <div>
                        <label htmlFor="email" className="label">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`field ${errors.email ? 'field-error' : ''}`}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        <FieldError id="email" message={errors.email} />
                      </div>

                      <div>
                        <label htmlFor="service" className="label">
                          Service needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                          <option value="Other">Other / not sure</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="date" className="label">
                          Preferred date
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={minDate}
                          value={form.date}
                          onChange={handleChange}
                          className={`field ${errors.date ? 'field-error' : ''}`}
                          aria-invalid={Boolean(errors.date)}
                          aria-describedby={errors.date ? 'date-error' : undefined}
                        />
                        <FieldError id="date" message={errors.date} />
                      </div>

                      <div>
                        <label htmlFor="time" className="label">
                          Preferred time
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Select a time</option>
                          {timeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your concerns or any questions you have..."
                        className="field resize-y"
                      />
                    </div>

                    <p className="text-xs leading-5 text-ink/65">
                      <span className="text-clay-600">*</span> Required. We only
                      use these details to respond to your appointment request.
                    </p>

                    <button type="submit" className="btn btn-primary w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Send appointment request
                    </button>
                  </form>
                </>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] border border-pine-900/10 bg-white p-6 md:p-7">
                <h2 className="text-xl leading-tight text-ink">
                  Contact information
                </h2>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                      <MapPin className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/65">
                        Address
                      </p>
                      <a
                        href={clinic.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm leading-6 text-ink/70 transition-colors hover:text-pine-700"
                      >
                        {clinic.address}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                      <Phone className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/65">
                        Phone
                      </p>
                      <a
                        href={clinic.phoneHref}
                        className="mt-1 block text-sm text-ink/70 transition-colors hover:text-pine-700"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                      <Mail className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/65">
                        Email
                      </p>
                      <a
                        href={clinic.emailHref}
                        className="mt-1 block break-all text-sm text-ink/70 transition-colors hover:text-pine-700"
                      >
                        {clinic.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-clay-200 bg-clay-50 p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-clay-200/60 text-clay-800">
                    <Clock className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <h2 className="text-xl leading-tight text-ink">
                    Opening hours
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/70">
                  {clinic.hoursNote}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] bg-pine-950 p-6 text-cream md:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cream/10"
                />
                <h2 className="text-xl leading-tight text-cream">
                  Prefer to talk?
                </h2>
                <p className="mt-3 text-sm leading-6 text-cream/60">
                  Call the clinic and we will help you find a time that works.
                </p>
                <a href={clinic.phoneHref} className="btn btn-cream mt-5 w-full">
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2rem] border border-pine-900/10 bg-pine-50">
            <iframe
              src={clinic.mapEmbedUrl}
              title="Draford Eye Care Clinic location map"
              className="h-[360px] w-full md:h-[460px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-pine-950/35 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-pine-900/10 bg-cream/95 p-5 shadow-xl backdrop-blur sm:right-auto sm:w-[22rem]">
              <p className="eyebrow">Find us</p>
              <p className="mt-2 font-display text-xl text-ink">
                {clinic.addressLines[0]}
              </p>
              <p className="text-sm text-ink/65">{clinic.addressLines[1]}</p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full"
              >
                Get directions
                <Navigation className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
