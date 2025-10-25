import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, TreePine } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    description:
      "We make it easy to clear your home. From old furniture and appliances to yard waste and general clutter, we handle single items or full home cleanouts, leaving your space clean and organized.",
  },
  {
    icon: Building2,
    title: "Commercial Junk Removal",
    description:
      "Keep your business clutter-free! We remove office furniture, equipment, storage items, and debris from offices, warehouses, and retail spaces so your workplace stays professional and tidy.",
  },
  {
    icon: TreePine,
    title: "Yard Waste & Outdoor Cleanup",
    description:
      "Branches, brush, dirt, and other outdoor debris? No problem. We'll haul it all away and leave your property looking fresh and well-kept.",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            We provide fast, affordable, and friendly service, and whenever possible, we donate or recycle items to
            reduce landfill waste and support our community.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
