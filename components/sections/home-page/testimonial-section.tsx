"use client"

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  QuotesIcon,
  StarIcon,
} from "@phosphor-icons/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Owner",
    avatar: "/avatars/avatar-1.jpg",
    review:
      "Working with Furnispace completely transformed our living room. The craftsmanship, attention to detail, and customer service exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Interior Designer",
    avatar: "/avatars/avatar-2.jpg",
    review:
      "Beautiful furniture with exceptional quality. Every piece feels premium and perfectly complements modern interiors.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Business Owner",
    avatar: "/avatars/avatar-3.jpg",
    review:
      "From consultation to installation, everything was seamless. Highly recommended for anyone looking for elegant furniture.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="flex min-h-screen w-full flex-col justify-center gap-12 px-6 py-24 lg:gap-24">
      <div className="mx-auto flex w-full flex-col gap-16">
        {/* Header */}

        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Testimonials
          </span>

          <h2 className="max-w-2xl text-4xl font-semibold text-balance md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 max-w-2xl text-muted-foreground">
            Hear directly from homeowners and businesses who trusted Furnispace
            to create beautiful and functional spaces.
          </p>
        </div>

        {/* Carousel */}

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="w-full py-4">
            {testimonials.map((item) => (
              <CarouselItem key={item.name} className="lg:basis-2/3">
                <Card className="relative shadow-none">
                  <CardContent className="flex flex-col gap-10 p-10 md:p-14">
                    <QuotesIcon
                      weight="fill"
                      className="absolute top-10 right-10 size-16 text-muted/40"
                    />

                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <StarIcon
                          key={index}
                          weight="fill"
                          className="size-5 text-yellow-500"
                        />
                      ))}
                    </div>

                    <blockquote className="max-w-3xl text-xl leading-relaxed text-foreground md:text-2xl">
                      “{item.review}”
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <Avatar className="size-14">
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>
                          {item.name
                            .split(" ")
                            .map((v) => v[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-semibold">{item.name}</h4>

                        <p className="text-sm text-muted-foreground">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    current === index ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => api?.scrollPrev()}
              >
                <ArrowLeftIcon />
              </Button>

              <Button
                size="icon"
                className="rounded-full"
                onClick={() => api?.scrollNext()}
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
