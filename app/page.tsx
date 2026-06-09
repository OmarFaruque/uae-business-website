import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}