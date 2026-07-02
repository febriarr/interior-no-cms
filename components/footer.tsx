import Link from "next/link"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  PinterestLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col gap-24 px-6 py-24">
        {/* CTA */}

        <div className="flex flex-col items-center gap-8 text-center">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-heading text-4xl font-semibold text-balance md:text-6xl">
              Ready to Transform Your Living Space?
            </h2>

            <p className="text-lg text-muted-foreground">
              Let{"'"}s create a home that reflects your lifestyle with timeless
              furniture crafted for comfort and elegance.
            </p>
          </div>

          <Button size="lg" className="rounded-full px-8">
            Contact Us
          </Button>
        </div>

        {/* Big Brand */}

        <div className="overflow-hidden">
          <h2 className="text-center font-heading text-5xl leading-none font-bold tracking-[0.02em] uppercase sm:text-8xl md:text-8xl lg:text-[clamp(6.5rem,14vw,13rem)] xl:text-[clamp(7rem,15vw,14rem)] 2xl:text-[clamp(8rem,21vw,15.5rem)]">
            Furnispace
          </h2>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Furnispace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <Link href="#">
              <InstagramLogoIcon size={22} />
            </Link>

            <Link href="#">
              <FacebookLogoIcon size={22} />
            </Link>

            <Link href="#">
              <PinterestLogoIcon size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
