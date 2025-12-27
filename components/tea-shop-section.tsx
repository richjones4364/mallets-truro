import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Clock } from "lucide-react"

export function TeaShopSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Coffee className="h-8 w-8 text-amber-600" />
                  <h2 className="text-4xl font-serif font-bold text-primary">
                    Tea on the Square
                  </h2>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-secondary">
                  Take a break from shopping and enjoy a delicious coffee, tea,
                  or light refreshment at our charming tea shop. Located right
                  in the heart of Victoria Square, it's the perfect spot to
                  relax and recharge.
                </p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-semibold">Opening Hours</div>
                      <div className="text-sm text-secondary">
                        Monday to Saturday: 9.15am - 5pm
                        <br />
                        Sunday: 10.30am - 4.15pm
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  asChild
                >
                  <a href="/departments/tea-shop">View Menu</a>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
                  <Image
                    src="/images/mallets-teaset.avif"
                    alt="Tea on the Square - Beautiful tea set and refreshments"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

