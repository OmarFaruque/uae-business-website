import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            AI Studio · Building the future
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Intelligent tools that move your business forward.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            SBR Digital builds AI-powered products — from image generation to
            document automation — designed for ambitious companies everywhere.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group rounded-full"
              nativeButton={false}
              render={<a href="#services" />}
            >
              Explore Services
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Talk to Us
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: "12+", label: "AI Tools in Build" },
              { value: "100%", label: "AI-Focused" },
              { value: "24/7", label: "Always Building" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}