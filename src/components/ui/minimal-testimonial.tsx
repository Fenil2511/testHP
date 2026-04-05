"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const testimonials = [
  {
    quote: "Working with them transformed our entire brand identity. The attention to detail was exceptional.",
    name: "Sarah Chen",
    role: "CEO at Stripe",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote: "A rare talent who combines strategic thinking with flawless execution. Highly recommended.",
    name: "Marcus Johnson",
    role: "Design Lead at Linear",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote: "The most seamless collaboration I've experienced. They truly understand modern design.",
    name: "Elena Voss",
    role: "Founder at Notion",
    image: "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-16">
      {/* Quote */}
      <div className="relative min-h-[120px] mb-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-slate-800"
          >
            "{testimonials[active].quote}"
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-6">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white
                transition-all duration-300 ease-out
                ${active === i ? "z-10 scale-110" : "grayscale hover:grayscale-0 hover:scale-105"}
              `}
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200" />

        {/* Active Author Info */}
        <div className="relative flex-1 min-h-[44px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <span className="text-sm font-medium text-slate-900">{testimonials[active].name}</span>
              <span className="text-xs text-slate-500">{testimonials[active].role}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
