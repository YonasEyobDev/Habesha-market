import { Hero } from "@/components/sections/Hero"
import { NewArrivals } from "@/components/sections/NewArrivals"
import { CollectionsSection } from "@/components/sections/CollectionsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <CollectionsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
