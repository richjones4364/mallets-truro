import { Hero } from "@/components/hero"
import { DepartmentGrid } from "@/components/department-grid"
import { ServiceBar } from "@/components/service-bar"
import { TeaShopSection } from "@/components/tea-shop-section"

export default function Home() {
  return (
    <>
      <Hero />
      <DepartmentGrid />
      <ServiceBar />
      <TeaShopSection />
    </>
  )
}

 