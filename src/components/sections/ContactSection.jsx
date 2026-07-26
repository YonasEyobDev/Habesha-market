"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Contact form (fake submit):", form)
    setSent(true)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="text-center mb-14">
        <span className="text-sm tracking-widest uppercase text-neutral-500">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Contact Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <p className="text-neutral-600 leading-relaxed">
            Questions about an order, a seller application, or anything else? Reach out — we
            typically respond within one business day.
          </p>

          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 mt-1 text-neutral-700" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-neutral-500 text-sm">support@habesha.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 mt-1 text-neutral-700" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-neutral-500 text-sm">+1 (000) 000-0000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-1 text-neutral-700" />
            <div>
              <h3 className="font-medium">Based in</h3>
              <p className="text-neutral-500 text-sm">United States</p>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <p className="text-neutral-600">Thanks — we will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Name" required
                className="border border-neutral-300 rounded-lg px-4 py-3"
              />
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Email" required
                className="border border-neutral-300 rounded-lg px-4 py-3"
              />
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Message" required rows={6}
                className="border border-neutral-300 rounded-lg px-4 py-3"
              />
              <Button size="lg" type="submit" className="w-fit">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
