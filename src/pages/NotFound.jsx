import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'

const NotFound = () => {
  useDocumentTitle('Page not found')

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60 [mask-image:radial-gradient(80%_70%_at_50%_40%,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pine-900/10"
      />

      <div className="container-custom relative flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          404
        </span>
        <h1 className="mt-4 max-w-2xl text-balance text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
          This page is a little{' '}
          <em className="italic text-pine-600">blurry.</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-ink/65">
          We couldn&apos;t find the page you were looking for. Let&apos;s get
          you back to something clear.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="btn btn-outline">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
