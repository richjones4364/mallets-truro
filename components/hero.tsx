import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckStockDialog } from "@/components/check-stock-dialog"

export function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mallets-teaset.avif"
          alt="Malletts Home Hardware"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Established 1899
          </div>
          <h1 className="mb-6 text-5xl font-serif font-bold leading-tight lg:text-7xl text-brand">
            125 Years of Quality in the Heart of Truro
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-white/90 lg:text-2xl">
            Over 20,000 products, competitive pricing and an unbeatable local
            service. Your trusted independent department store since 1899.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CheckStockDialog />
            <Button
              size="lg"
              asChild
            >
              <a href="#departments">Explore Departments</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

