import { TestimonialsMinimal } from "../components/ui/minimal-testimonial"
import { Testimonials } from "../components/Testimonials"
import { SEO } from "../components/SEO"

export default function DemoTestimonials() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Testimonial Styles Demo"
        description="Showcasing the new minimal and integrated testimonial components."
      />
      
      <div className="py-20">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Component Demos</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Below are the two versions of the testimonials: the standalone minimal version and the integrated version with full navigation.
          </p>
        </div>

        {/* Standalone Minimal Version */}
        <div className="border-b border-slate-100 pb-20">
          <div className="container mx-auto px-6 mb-8">
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand">1. Standalone Minimal Component</h2>
          </div>
          <TestimonialsMinimal />
        </div>

        {/* Integrated Version */}
        <div className="pt-20">
          <div className="container mx-auto px-6 mb-8">
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand">2. Integrated Main Component</h2>
          </div>
          <Testimonials />
        </div>
      </div>
    </main>
  )
}
