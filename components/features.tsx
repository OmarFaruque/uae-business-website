import { ShieldCheck, Zap, Layers, Globe2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Fast, responsive AI experiences engineered to keep your teams in flow.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy first",
    description:
      "Your data stays yours. Security and compliance are baked into everything we ship.",
  },
  {
    icon: Layers,
    title: "Made to integrate",
    description:
      "Designed to plug into the tools and workflows your business already runs on.",
  },
  {
    icon: Globe2,
    title: "Bilingual by design",
    description:
      "Solutions built with first-class Arabic and English support out of the box.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-medium text-primary">
              Why SBR Digital
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Technology with intent.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              We don&apos;t chase hype. Every product we build is grounded in
              real outcomes for the businesses we serve.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}