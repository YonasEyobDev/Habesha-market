export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <span className="text-sm tracking-widest uppercase text-neutral-500">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Authentic craftsmanship, from Ethiopia to your door
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Habesha. connects independent Ethiopian and diaspora designers with customers
            across the USA, bringing authentic traditional clothing — habesha kemis, netela,
            gabi, and more — directly from the artisans who make them.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Every purchase supports a small, independent seller. We handle the platform,
            payments, and shipping logistics so they can focus entirely on their craft.
          </p>
        </div>

        <div className="w-full max-h-[500px] aspect-[4/5] md:aspect-auto rounded-lg overflow-hidden">
          <img
            src="/HabeshaKemis.jpg"
            alt="Habesha artisan craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
