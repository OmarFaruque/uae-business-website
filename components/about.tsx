import { MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                United Arab Emirates
              </span>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                A digital studio rooted in the Emirates.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                SBR Digital is an AI studio building practical, intelligent
                products for the region&apos;s fastest-growing companies. We
                combine deep technical craft with a clear understanding of how
                business gets done in the UAE.
              </p>
              <p>
                Our mission is simple: make powerful AI accessible, reliable,
                and genuinely useful — one carefully built tool at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}