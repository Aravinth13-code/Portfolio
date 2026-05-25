function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] opacity-20" />

    </div>
  )
}

export default BackgroundGradient