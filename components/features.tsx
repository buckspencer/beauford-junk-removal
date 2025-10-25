import { CheckCircle2, Clock, Users } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Free Estimates",
  },
  {
    icon: Clock,
    title: "Same-Day Service Available",
  },
  {
    icon: Users,
    title: "Friendly, Reliable Team",
  },
]

export function Features() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
