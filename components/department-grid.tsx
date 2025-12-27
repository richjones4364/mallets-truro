"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const departments = [
  {
    name: "Cookshop",
    href: "/departments/cookshop",
    description: "Quality cookware and kitchen essentials",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop",
  },
  {
    name: "Outlet Store",
    href: "/departments/outlet",
    description: "Great deals on selected items",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
  {
    name: "Services",
    href: "/departments/services",
    description: "Key cutting, blade sharpening & more",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    name: "Toys",
    href: "/departments/toys",
    description: "Toys for all ages",
    image: "/images/lego.jpg",
  },
  {
    name: "Giftware",
    href: "/departments/giftware",
    description: "Perfect gifts for every occasion",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
  },
  {
    name: "Luggage & Linens",
    href: "/departments/luggage-linen",
    description: "Travel essentials and home textiles",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
  },
  {
    name: "Household & Cleaning",
    href: "/departments/household",
    description: "Everything for your home",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
  },
  {
    name: "Gardening & Leisure",
    href: "/departments/gardening",
    description: "Garden tools and outdoor equipment",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    name: "Power Tools & Hand Tools",
    href: "/departments/tools",
    description: "Professional and DIY tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
  },
  {
    name: "Hardware & Ironmongery",
    href: "/departments/hardware",
    description: "Traditional hardware store essentials",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  },
  {
    name: "Heating & Fireside",
    href: "/departments/heating",
    description: "Fireplaces and heating solutions",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
]

export function DepartmentGrid() {
  return (
    <section id="departments" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-serif font-bold text-primary">
            Services & Departments
          </h2>
          <p className="text-lg text-secondary">
            Discover our wide range of departments, each offering quality
            products and expert advice
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <Link key={dept.href} href={dept.href}>
              <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-serif font-semibold text-primary group-hover:text-primary/80">
                    {dept.name}
                  </h3>
                  <p className="mb-4 text-sm text-secondary">
                    {dept.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

