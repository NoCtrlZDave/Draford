import {
  Check,
  Clock,
  Phone,
  Plus,
  TriangleAlert,
} from 'lucide-react'
import { useState } from 'react'
import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  articleCategories,
  articles,
  clinic,
  eyeCareTips,
} from '../data/site'
import useDocumentTitle from '../lib/useDocumentTitle'

const ArticleCard = ({ article }) => {
  const [open, setOpen] = useState(false)
  const Icon = article.icon
  const panelId = `guide-${article.id}`

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-pine-900/10 bg-white p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pine-50 text-pine-700">
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="rounded-full bg-pine-50 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-pine-700">
          {article.category}
        </span>
      </div>

      <h3 className="mt-5 text-balance text-2xl leading-[1.15] text-ink">
        {article.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink/65">{article.excerpt}</p>

      <p className="mt-4 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink/65">
        <Clock className="h-3.5 w-3.5" />
        {article.readTime}
      </p>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-5 border-t border-pine-900/10 pt-5">
            <div className="space-y-4 text-sm leading-7 text-ink/70">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-pine-50/70 p-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-pine-700">
                Try this
              </p>
              <ul className="mt-3 space-y-2.5">
                {article.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2.5 text-sm leading-5 text-ink/70"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-pine-600"
                      strokeWidth={2.4}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm font-semibold text-pine-700 transition-colors hover:text-pine-900"
      >
        {open ? 'Close guide' : 'Read guide'}
        <span
          className={`grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-45 border-pine-900 bg-pine-900 text-cream'
              : 'border-pine-900/15'
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
    </article>
  )
}

const Resources = () => {
  useDocumentTitle('Eye Health Resources')
  const [activeCategory, setActiveCategory] = useState('All guides')

  const filteredArticles =
    activeCategory === 'All guides'
      ? articles
      : articles.filter((article) => article.category === activeCategory)

  return (
    <div>
      <PageHero
        breadcrumb="Resources"
        eyebrow="Eye health resources"
        title={
          <>
            Eye health,{' '}
            <em className="italic text-pine-600">made clearer.</em>
          </>
        }
        description="Practical, plain-language guides to help you understand and care for your eyes — plus simple habits worth building into your day."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Guides"
              title={
                <>
                  Read, learn,{' '}
                  <em className="italic text-pine-600">look after your eyes.</em>
                </>
              }
              description="Browse by topic and open any guide for practical takeaways you can use straight away."
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/65">
              {filteredArticles.length}{' '}
              {filteredArticles.length === 1 ? 'guide' : 'guides'}
            </p>
          </div>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter guides by topic"
          >
            {articleCategories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-pine-900 bg-pine-900 text-cream'
                      : 'border-pine-900/15 bg-white/60 text-ink/65 hover:border-pine-900/30 hover:text-pine-900'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredArticles.map((article, index) => (
              <Reveal
                key={article.id}
                delay={index * 60}
                className="h-full"
              >
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-5 text-ink/65">
            These guides are for general education and are not a substitute for
            professional medical advice, diagnosis or treatment. Always consult
            a qualified eye care professional about your own eyes.
          </p>
        </div>
      </section>

      <section className="border-y border-pine-900/10 bg-cream section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Daily habits"
                title={
                  <>
                    Small habits.{' '}
                    <em className="italic text-pine-600">Real difference.</em>
                  </>
                }
                description="You do not need a complicated routine to look after your eyes. These simple habits are a good place to start."
              />

              <div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-pine-950 p-6 text-cream md:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cream/10"
                />
                <TriangleAlert className="h-6 w-6 text-clay-300" strokeWidth={1.7} />
                <p className="mt-4 text-base font-semibold text-cream">
                  When to seek urgent care
                </p>
                <p className="mt-2 text-sm leading-6 text-cream/60">
                  Sudden vision loss, severe eye pain or an eye injury needs
                  urgent medical attention. Contact the clinic during opening
                  hours or your nearest emergency service immediately.
                </p>
                <a
                  href={clinic.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay-300 transition-colors hover:text-clay-200"
                >
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {eyeCareTips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="rounded-2xl border border-pine-900/10 bg-canvas p-5"
                >
                  <span className="font-display text-xl text-pine-900/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {tip.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-ink/65">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand
          eyebrow="Questions about your eyes?"
          title="Reading is useful. A check-up is clearer."
          description="If something you have read here sounds familiar, book an eye examination and get advice that is specific to you."
        />
      </div>
    </div>
  )
}

export default Resources
