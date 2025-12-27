"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#090542' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold">
              Malletts Home Hardware
            </h3>
            <p className="mb-4 text-sm text-white/80">
              Established 1899. Your trusted independent department store in the
              heart of Truro for over 125 years.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <div>
                  6 & 7 Victoria Square
                  <br />
                  Truro, Cornwall, TR1 2RT
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:01872274441" className="hover:underline">
                  01872 274441
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:enquiries@mallettshomehardware.co.uk"
                  className="hover:underline"
                >
                  enquiries@mallettshomehardware.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold">
              Opening Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">Monday - Saturday</div>
                  <div className="text-white/80">9.15am - 5pm</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">Sunday</div>
                  <div className="text-white/80">10.30am - 4.15pm</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=6+Victoria+Square+Truro+Cornwall+TR1+2RT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
              >
                View on Map →
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold">
              Seasonal Brochures
            </h3>
            <p className="mb-4 text-sm text-white/80">
              Sign up to receive our seasonal brochures and special offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Malletts Home Hardware. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

