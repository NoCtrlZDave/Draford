import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroCarousel = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = slides.length

  useEffect(() => {
    if (total <= 1 || isPaused) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 5500)
    return () => clearInterval(id)
  }, [total, isPaused])

  if (!total) return null

  const goTo = (index) => {
    setCurrent((index + total) % total)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-70 [mask-image:radial-gradient(95%_80%_at_60%_0%,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-pine-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-clay-200/40 blur-3xl"
      />

      <div className="container-custom relative pb-24 pt-12 md:pb-32 md:pt-20">
        <div className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {slides.map((slide, index) => (
              <div
                key={slide.id || index}
                className={`col-start-1 row-start-1 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] transition-all duration-700 ${
                  index === current
                    ? 'opacity-100 translate-y-0'
                    : 'pointer-events-none absolute inset-0 opacity-0 translate-y-4'
                }`}
                aria-hidden={index !== current}
              >
                <div>
                  {slide.eyebrow && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-pine-900/10 bg-white/70 px-4 py-2 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-pine-700 backdrop-blur">
                      {slide.eyebrowIcon}
                      {slide.eyebrow}
                    </span>
                  )}

                  <h1 className="mt-6 text-balance text-5xl leading-[0.96] sm:text-6xl lg:text-[4.4rem]">
                    {slide.title}
                  </h1>

                  {slide.description && (
                    <p className="mt-6 max-w-lg text-base leading-7 text-ink/70 md:text-lg">
                      {slide.description}
                    </p>
                  )}

                  {(slide.primaryCta || slide.secondaryCta) && (
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      {slide.primaryCta && (
                        <Link to={slide.primaryCta.href} className="btn btn-primary">
                          {slide.primaryCta.label}
                          {slide.primaryCta.icon}
                        </Link>
                      )}
                      {slide.secondaryCta && (
                        <Link to={slide.secondaryCta.href} className="btn btn-outline">
                          {slide.secondaryCta.label}
                          {slide.secondaryCta.icon}
                        </Link>
                      )}
                    </div>
                  )}

                  {slide.bullets && slide.bullets.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-pine-900/10 pt-6">
                      {slide.bullets.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-ink/65"
                        >
                          <item.icon className="h-4 w-4 text-pine-600" strokeWidth={2.4} />
                          {item.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div className="relative mx-auto max-w-[460px]">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-8 rounded-[3rem] border border-pine-900/10"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 left-6 h-32 w-32 rounded-full bg-clay-300/40 blur-2xl"
                    />

                    <div className="relative overflow-hidden rounded-[2.5rem] bg-pine-950 p-2.5 shadow-[0_45px_90px_-45px_rgba(12,33,29,0.8)]">
                      <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_0%,#21564a_0%,#0c211d_62%)] px-7 py-8 sm:px-9 sm:py-10">
                        {slide.card ? (
                          slide.card
                        ) : (
                          <div>
                            <div className="flex items-center justify-between text-[0.6rem] font-bold uppercase tracking-[0.24em] text-cream/60">
                              <span>Vision screening</span>
                              <span>20 / 20</span>
                            </div>
                            <div className="mt-8 space-y-3.5 text-center font-display leading-none text-cream">
                              <p className="text-5xl tracking-[0.5em]">E</p>
                              <p className="text-4xl tracking-[0.5em]">F P</p>
                              <p className="text-3xl tracking-[0.45em]">T O Z</p>
                              <p className="text-2xl tracking-[0.4em]">L P E D</p>
                              <p className="text-lg tracking-[0.35em] text-cream/65">P E C F D</p>
                              <p className="text-sm tracking-[0.3em] text-cream/40">E D F C Z P</p>
                            </div>
                            <div className="mt-8 flex items-center justify-between border-t border-cream/10 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/40">
                              <span>Clearer vision starts here</span>
                              <span className="h-1.5 w-1.5 rounded-full bg-clay-400" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {slide.floatingCard && (
                      <div className="absolute -bottom-7 -left-3 w-[14.5rem] animate-float rounded-2xl border border-pine-900/10 bg-cream/95 p-4 shadow-[0_30px_60px_-35px_rgba(13,33,29,0.6)] backdrop-blur sm:-left-8">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-900 text-cream">
                            {slide.floatingCard.icon}
                          </span>
                          <div>
                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-pine-600">
                              {slide.floatingCard.eyebrow}
                            </p>
                            <p className="font-display text-lg leading-tight text-ink">
                              {slide.floatingCard.title}
                            </p>
                          </div>
                        </div>
                        {slide.floatingCard.cta && (
                          <Link
                            to={slide.floatingCard.cta.href}
                            className="mt-3 flex items-center justify-between rounded-xl bg-pine-50 px-3 py-2 text-xs font-semibold text-pine-800 transition-colors hover:bg-pine-100"
                          >
                            {slide.floatingCard.cta.label}
                            {slide.floatingCard.cta.icon}
                          </Link>
                        )}
                      </div>
                    )}

                    {slide.locationBadge && (
                      <div className="absolute -right-2 top-6 flex animate-float-slow items-center gap-2 rounded-full border border-pine-900/10 bg-cream/95 px-4 py-2 text-[0.63rem] font-bold uppercase tracking-[0.16em] text-pine-800 shadow-lg backdrop-blur sm:-right-4">
                        {slide.locationBadge.icon}
                        {slide.locationBadge.text}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {total > 1 && (
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === current
                        ? 'w-8 bg-pine-900'
                        : 'w-2 bg-pine-900/25 hover:bg-pine-900/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="grid h-10 w-10 place-items-center rounded-full border border-pine-900/15 bg-white/70 text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="grid h-10 w-10 place-items-center rounded-full border border-pine-900/15 bg-white/70 text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
