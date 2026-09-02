function Button({
  children,
  primary = false,
  className = "",
  ...props
}) {
  const baseStyles = `
    px-8
    py-4
    rounded-xl
    font-medium
    transition-all
    duration-300
    border
    inline-flex
    items-center
    justify-center
    gap-2
  `

  const primaryStyles = `
    bg-[var(--primary)]
    border-[var(--primary)]
    text-white
    hover:bg-[#5A8BBE]
    hover:border-[#5A8BBE]
    hover:-translate-y-0.5
  `

  const secondaryStyles = `
    bg-transparent
    border-[var(--border)]
    text-[var(--text)]
    hover:border-[var(--secondary)]
    hover:bg-[var(--secondary)]/[0.06]
    hover:-translate-y-0.5
  `

  return (
    <button
      {...props}
      className={`
        ${baseStyles}
        ${primary ? primaryStyles : secondaryStyles}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button