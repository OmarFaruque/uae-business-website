import {
  ImageIcon,
  FileText,
  MessageSquare,
  Mic,
  Languages,
  Code2,
  Video,
  Table2,
} from "lucide-react"

const services = [
  {
    icon: ImageIcon,
    title: "Image Generation",
    description:
      "Create stunning, on-brand visuals, product shots, and concept art from a simple text prompt.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "PDF Generation",
    description:
      "Turn raw data and prompts into polished reports, invoices, and documents — automatically.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistants",
    description:
      "Custom-trained conversational agents that handle support, sales, and internal knowledge.",
  },
  {
    icon: Mic,
    title: "Voice & Transcription",
    description:
      "Convert speech to text and generate natural voiceovers in Arabic, English, and more.",
  },
  {
    icon: Languages,
    title: "Smart Translation",
    description:
      "Context-aware translation tuned for business and regional dialects across the Gulf.",
  },
  {
    icon: Code2,
    title: "Code Generation",
    description:
      "Accelerate development with AI that scaffolds, reviews, and documents your codebase.",
  },
  {
    icon: Video,
    title: "Video Synthesis",
    description:
      "Generate short-form marketing clips and explainer videos from scripts in minutes.",
  },
  {
    icon: Table2,
    title: "Data Extraction",
    description:
      "Pull structured data from documents, receipts, and forms with high accuracy.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Our Services</span>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            A growing suite of AI capabilities.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each tool is crafted to solve a real business problem. We&apos;re
            rolling these out one by one — here&apos;s what&apos;s on the way.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <service.icon className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}