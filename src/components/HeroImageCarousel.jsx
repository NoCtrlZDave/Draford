import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

const defaultSlides = [
  {
    id: 1,
    image: heroImage,
    alt: 'Draford Eye Care Clinic - Professional eye care services',
    eyebrow: 'Eye care in Gudu, Abuja',
    title: (
      <>
        Clearer vision.
        <br />
        <em className="italic text-clay-300">Better</em> eye care.
      </>
    ),
    description:
      'Draford Eye Care Clinic brings comprehensive eye exams, quality eyewear and thoughtful guidance together in one calm, welcoming clinic.',
    primaryCta: { href: '/contact', label: 'Book an appointment' },
    secondaryCta: { href: '/services', label: 'Explore our services' },
  },
  {
    id: 2,
    image: heroImage,
    alt: 'Modern eye examination equipment at Draford Eye Care Clinic',
    eyebrow: 'Precision & comfort',
    title: (
      <>
        See more with{' '}
        <em className="italic text-clay-300">modern</em> diagnostics.
      </>
    ),
    description:
      'Thorough eye health assessments with careful explanations. Know exactly how your eyes are doing, with no guesswork.',
    primaryCta: { href: '/services#eye-exams', label: 'Learn about eye exams' },
    secondaryCta: { href: '/contact', label: 'Book your check-up' },
  },
  {
    id: 3,
    image: heroImage,
    alt: 'Stylish prescription eyewear at Draford Eye Care Clinic',
    eyebrow: 'Frames & lenses',
    title: (
      <>
        Eyewear that fits{' '}
        <em className="italic text-clay-300">your style</em> and life.
      </>
    ),
    description:
      'Expert guidance on frames, progressive lenses and coatings. The right pair should feel effortless from day one.',
    primaryCta: { href: '/services#eyewear', label: 'Find your perfect pair' },
    secondaryCta: { href: '/contact', label: 'Book a styling visit' },
  },
]

const HeroImageCarousel = ({ slides = defaultSlides, interval = 5000 }) => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = slides.length

  useEffect(() => {
    if (total <= 1 || isPaused) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, interval)
    return () => clearInterval(id)
  }, [total, isPaused, interval])

  if (!total) return null

  const goTo = (index) => {
    setCurrent((index + total) % total)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  return (
    <section
      className="relative h-[85vh] min-h-[600px] overflow-hidden md:h-[90vh] lg:min-h-[700px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-label="Hero image carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== current}
        >
          <img
            src={slide.image}
            alt={slide.alt || ''}
            className="h-full w-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-950/90 via-pine-950/70 to-pine-950/40 md:from-pine-950/85 md:via-pine-950/60 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full">
        <div className="container-custom flex h-full items-center">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id || index}
                className={`transition-all duration-1000 ease-out ${
                  index === current
                    ? 'translate-x-0 opacity-100'
                    : 'pointer-events-none absolute translate-x-8 opacity-0'
                }`}
                aria-hidden={index !== current}
              >
                {slide.eyebrow && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay-400" />
                    {slide.eyebrow}
                  </span>
                )}

                <h1 className="mt-6 text-balance text-4xl leading-[1.02] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>

                {slide.description && (
                  <p className="mt-6 max-w-xl text-base leading-7 text-cream/90 md:text-lg md:leading-8">
                    {slide.description}
                  </p>
                )}

                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    {slide.primaryCta && (
                      <Link
                        to={slide.primaryCta.href}
                        className="btn bg-cream text-pine-950 shadow-[0_18px_35px_-24px_rgba(251,249,244,0.9)] hover:-translate-y-0.5 hover:bg-white"
                      >
                        {slide.primaryCta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {slide.secondaryCta && (
                      <Link
                        to={slide.secondaryCta.href}
                        className="btn border border-cream/30 bg-cream/5 text-cream backdrop-blur hover:-translate-y-0.5 hover:bg-cream/10"
                      >
                        {slide.secondaryCta.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {total > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 md:bottom-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? 'true' : 'false'}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-10 bg-cream'
                  : 'w-2 bg-cream/40 hover:bg-cream/70'
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative h-8 w-[1px] bg-cream/30">
          <div className="animate-scroll absolute left-0 top-0 h-2 w-[1px] bg-cream" />
        </div>
      </div>
    </section>
  )
}

export default HeroImageCarousel
