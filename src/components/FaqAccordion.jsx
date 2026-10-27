import { Plus } from 'lucide-react'
import { useState } from 'react'

const FaqAccordion = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div
      className={`divide-y divide-pine-900/10 overflow-hidden rounded-[1.5rem] border border-pine-900/10 bg-white ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-pine-50/50 md:px-7"
            >
              <span className="text-sm font-semibold text-ink md:text-base">
                {item.question}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'border-pine-900 bg-pine-900 text-cream'
                    : 'border-pine-900/15 text-pine-700'
                }`}
              >
                <Plus
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </span>
            </button>
            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-ink/70 md:px-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
