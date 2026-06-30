import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="flex h-[calc(100dvh-var(--header-height))] w-full">
      <div className="flex flex-1 flex-col gap-8 px-6 py-12 pb-2">
        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-2xl font-heading text-4xl font-semibold md:text-6xl">
            Crafted for the life you actually live
          </h1>

          <h2 className="mt-4 max-w-sm text-muted-foreground">
            Furniture that works as your family does, without ever letting the
            room down.
          </h2>

          <Button size="lg" className="mt-6">
            Explore Collection
            <ArrowRightIcon size={24} />
          </Button>
        </div>

        {/* Gallery */}
        <div className="grid flex-1 gap-2 overflow-hidden lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/hero-image.jpg"
              alt="Hero image"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="hidden grid-cols-2 gap-2 lg:grid">
            <div className="group relative overflow-hidden rounded-xl">
              <Image
                src="/hero-image-2.jpg"
                alt="Hero image"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <Image
                src="/hero-image-3.jpg"
                alt="Hero image"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
