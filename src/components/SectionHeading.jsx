const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center'

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-clay-300' : ''}`}>
          <span
            className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-clay-300' : 'bg-clay-500'}`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl md:text-[2.9rem] ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 ${
            light ? 'text-cream/70' : 'text-ink/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
