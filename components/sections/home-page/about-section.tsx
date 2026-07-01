import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="flex min-h-screen w-full flex-col gap-12 px-6 py-24 lg:gap-24">
      {/* Heading */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-lg">
          <h3 className="text-4xl font-semibold text-pretty md:text-5xl">
            Crafting calm, balanced interiors
          </h3>
        </div>

        <div className="w-full max-w-sm lg:max-w-lg">
          <p className="text-muted-foreground">
            We design spaces that feel lived-in, warm, and intentional. Our
            approach blends simple lines, natural textures, and refined details
            to create homes that feel balanced and personal.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex aspect-video items-end rounded-xl bg-muted p-6">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Design With Intention</h4>

              <p className="max-w-sm text-muted-foreground">
                We refine each space with clarity and care, using thoughtful
                layouts, curated materials, and natural palettes.
              </p>
            </div>
          </div>

          <div className="grid flex-1 gap-6 md:grid-cols-2">
            <div className="group relative aspect-4/5 overflow-hidden rounded-xl">
              <Image
                src="/about-image-1.jpg"
                alt="Interior design"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex items-end rounded-xl bg-muted p-6">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold">
                  Spaces That Feel Personal
                </h4>

                <p className="text-muted-foreground">
                  Every project is guided by practical design thinking and a
                  commitment to delivering calm, grounded spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="group relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:min-h-160">
          <Image
            src="/about-image-2.jpg"
            alt="Modern interior"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
