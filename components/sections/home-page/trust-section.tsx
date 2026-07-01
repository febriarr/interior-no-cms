import { Icon } from "@phosphor-icons/react"
import {
  ArmchairIcon,
  ArrowsClockwiseIcon,
  HandbagSimpleIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

type CardProps = {
  title: string
  description: string
  icon: Icon
}

const featureSection: CardProps[] = [
  {
    title: "Fast & Reliable Delivery-",
    description:
      "Get your luxury furniture delivered quickly and safely, right to your doorstep.",
    icon: TruckIcon,
  },
  {
    title: "Easy Shopping",
    description:
      "Get your luxury Get your luxury furniture delivered quickly and safely, right to your doorstep.",
    icon: HandbagSimpleIcon,
  },
  {
    title: "Fast & Reliable Delivery--",
    description:
      "Get your luxury furniture delivered quickly and safely, right to your doorstep.",
    icon: ArmchairIcon,
  },
  {
    title: "Fast & Reliable Delivery---",
    description:
      "Get your luxury furniture delivered quickly and safely, right to your doorstep.",
    icon: ArrowsClockwiseIcon,
  },
]

export default function TrustSection() {
  return (
    <section className="flex min-h-screen w-full flex-col gap-12 bg-stone-950 px-6 py-24 text-stone-50 lg:gap-24">
      <div className="grid flex-1 gap-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-between gap-12 py-6">
          {/* header */}
          <div className="w-full max-w-lg space-y-6">
            <h3 className="text-4xl font-semibold text-pretty md:text-5xl">
              Why Customers Choose Us
            </h3>
            <p className="text-muted-foreground">
              experience the perfect blend of luxury, quality, and design in
              every piece.
            </p>
          </div>
          <div className="mt-auto grid flex-1 gap-16 md:grid-cols-2">
            {featureSection.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="group relative aspect-video overflow-hidden rounded-xl lg:aspect-auto">
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

function Card({ title, description, icon, ...props }: CardProps) {
  const Icon = icon

  return (
    <div className="flex flex-col gap-4" {...props}>
      <Icon size={24} weight="bold" />

      <div className="space-y-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
