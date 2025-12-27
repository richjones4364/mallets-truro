"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const departments = [
  {
    name: "Cookshop",
    href: "/departments/cookshop",
    description: "Quality cookware and kitchen essentials",
  },
  {
    name: "Outlet Store",
    href: "/departments/outlet",
    description: "Great deals on selected items",
  },
  {
    name: "Services",
    href: "/departments/services",
    description: "Key cutting, blade sharpening & more",
  },
  {
    name: "Toys",
    href: "/departments/toys",
    description: "Toys for all ages",
  },
  {
    name: "Giftware",
    href: "/departments/giftware",
    description: "Perfect gifts for every occasion",
  },
  {
    name: "Luggage & Linens",
    href: "/departments/luggage-linen",
    description: "Travel essentials and home textiles",
  },
  {
    name: "Household & Cleaning",
    href: "/departments/household",
    description: "Everything for your home",
  },
  {
    name: "Gardening & Leisure",
    href: "/departments/gardening",
    description: "Garden tools and outdoor equipment",
  },
  {
    name: "Power Tools & Hand Tools",
    href: "/departments/tools",
    description: "Professional and DIY tools",
  },
  {
    name: "Hardware & Ironmongery",
    href: "/departments/hardware",
    description: "Traditional hardware store essentials",
  },
  {
    name: "Heating & Fireside",
    href: "/departments/heating",
    description: "Fireplaces and heating solutions",
  },
  {
    name: "Tea Shop",
    href: "/departments/tea-shop",
    description: "Tea on the Square - Coffee & refreshments",
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 shadow-sm" style={{ backgroundColor: '#090542' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/mallets-logo.avif"
              alt="Malletts Home Hardware"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/departments"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Departments
            </Link>
            <Link
              href="/stock"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              View Our Stock
            </Link>
            <Link
              href="/promotions"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Promotions
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-primary hover:bg-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">
                  Departments
                </div>
                {departments.map((dept) => (
                  <Link
                    key={dept.href}
                    href={dept.href}
                    className="block pl-4 text-sm text-gray-300 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/stock"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Our Stock
              </Link>
              <Link
                href="/promotions"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promotions
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

