import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/30 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s build something intelligent together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or want early access as our tools launch?
            We&apos;d love to hear from you.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group rounded-full"
              nativeButton={false}
              render={<a href="mailto:hello@sbrdigital.io" />}
            >
              <Mail className="mr-1 size-4" />
              hello@sbrdigital.io
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}