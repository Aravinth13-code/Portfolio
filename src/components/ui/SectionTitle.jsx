function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16">

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[var(--text)]
          tracking-tight
        "
      >
        {title}
      </h2>

      <div
        className="
          mt-5
          w-12
          h-px
          bg-[var(--secondary)]
        "
      />

      <p
        className="
          mt-5
          max-w-2xl
          text-[var(--muted)]
          leading-relaxed
        "
      >
        {subtitle}
      </p>

    </div>
  )
}

export default SectionTitle