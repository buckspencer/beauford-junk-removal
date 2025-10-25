import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src="/construction-workers-loading-junk-into-truck--prof.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-secondary-foreground md:text-7xl">
            Beauford Junk Removal
          </h1>
          <p className="mb-4 text-2xl font-semibold text-accent md:text-3xl">Fast. Reliable. Local.</p>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
            Your go-to local service for clearing out unwanted clutter. We help homeowners, renters, and businesses
            quickly, safely, and responsibly get rid of junk while keeping our community and environment in mind.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="tel:5204510767">
                <Phone className="mr-2 h-5 w-5" />
                Call 520-451-0767
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full animate-pulse bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto text-lg font-bold shadow-lg"
              asChild
            >
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-secondary-foreground/70">
            Leave a voicemail and we'll get back to you as soon as possible
          </p>
        </div>
      </div>
    </section>
  )
}
