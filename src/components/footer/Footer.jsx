function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">

      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
        "
      >

        <h2 className="text-2xl font-bold gradient-text">
          Portfolio
        </h2>

        <p className="text-gray-500 mt-4 md:mt-0">
          © 2026 Fullstack Developer Portfolio
        </p>

      </div>

    </footer>
  )
}

export default Footer