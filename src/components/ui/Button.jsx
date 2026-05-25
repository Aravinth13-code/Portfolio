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
    transition
    duration-300
  `

  const primaryStyles =
    "bg-purple-600 hover:bg-purple-700"

  const secondaryStyles =
    "border border-cyan-400 hover:bg-cyan-400/10"

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