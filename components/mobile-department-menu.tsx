"use client"

import * as React from "react"
import { MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const departments = [
  "Cookshop",
  "Outlet Store",
  "Services",
  "Toys",
  "Giftware",
  "Luggage & Linens",
  "Household & Cleaning",
  "Gardening & Leisure",
  "Power Tools & Hand Tools",
  "Hardware & Ironmongery",
  "Heating & Fireside",
  "Tea Shop",
]

export function MobileDepartmentMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Floating Button - Only visible on mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <MapPin className="h-6 w-6" />
        </Button>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-background">
            <div className="sticky top-0 flex items-center justify-between border-b bg-background p-4">
              <h2 className="font-serif text-xl font-bold text-primary">
                Find a Department
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-4">
              <p className="mb-4 text-sm text-secondary">
                Browse our departments to find what you're looking for in-store
                or online.
              </p>
              <div className="space-y-2">
                {departments.map((dept) => (
                  <Link
                    key={dept}
                    href={`/departments/${dept.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                  >
                    <div className="font-medium text-primary">{dept}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-primary/5 p-4">
                <div className="mb-2 font-semibold text-primary">
                  Need Help Finding Something?
                </div>
                <p className="mb-3 text-sm text-secondary">
                  Ask our friendly staff or call us at{" "}
                  <a
                    href="tel:01872274441"
                    className="font-medium text-primary underline"
                  >
                    01872 274441
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

