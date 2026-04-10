import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { ClientShowcase } from '../components/ClientShowcase';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';

const allServices = [
  {
    id: 'print-media',
    title: 'Print Media',
    image: '/HP/service-print-media.png',
    intro: 'Reach millions through newspapers, magazines, and tabloid advertising.',
    paragraphs: [
      'Print media remains one of the most trusted advertising channels in India. We help you place your brand in leading newspapers, magazines, and tabloids to reach your target audience effectively.',
      'From full-page ads to classified sections, from national dailies to regional publications — we handle it all. Our deep relationships with print houses ensure you get the best rates and placements.',
      'We plan every print campaign based on your audience, geography, and budget. You get maximum visibility where it matters most.'
    ],
    features: ['Newspaper advertising', 'Magazine placements', 'Tabloid campaigns', 'Advertorial content']
  },
  {
    id: 'radio-tv-media',
    title: 'Radio & TV Media',
    image: '/HP/service-radio-tv.png',
    intro: 'Dominate the airwaves and screens with strategic radio and TV campaigns.',
    paragraphs: [
      'Radio and TV are powerful channels for brand building. We help you create impactful campaigns across FM radio stations, news channels, and entertainment networks.',
      'With years of experience at Radio City, BIG FM, and MYFM, we know exactly how to craft radio spots that stick. For TV, we secure strategic placements on news bulletins, talk shows, and prime-time slots.',
      'Whether you want regional reach or national coverage, we plan and execute broadcast campaigns that deliver real results.'
    ],
    features: ['FM radio campaigns', 'TV news placements', 'Sponsored segments', 'Jingle & ad production']
  },
  {
    id: 'ooh-hoardings',
    title: 'OOH & Hoardings',
    image: '/HP/service-ooh-hoardings.png',
    intro: 'Make your brand visible on the streets with outdoor advertising.',
    paragraphs: [
      'Out-of-home advertising puts your brand where people live, work, and commute. We plan and manage hoardings, billboards, bus shelters, and other outdoor media across cities.',
      'We select locations based on traffic data, visibility, and your target demographics. Every hoarding placement is strategic — not random.',
      'From highway billboards to retail area signage, we make sure your brand is seen by thousands every single day.'
    ],
    features: ['Billboard & hoarding placement', 'Bus shelter advertising', 'Transit media', 'Location strategy & planning']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    image: '/HP/service-digital-marketing.png',
    intro: 'Grow your brand online with targeted digital campaigns.',
    paragraphs: [
      'Digital is where your customers spend most of their time. We create and manage campaigns across social media, Google, YouTube, and other digital platforms.',
      'Our digital strategies are data-driven. We track every click, view, and conversion to make sure your budget delivers maximum ROI.',
      'From brand awareness to lead generation, we design digital campaigns that align with your business goals and reach the right audience.'
    ],
    features: ['Social media marketing', 'Google & YouTube ads', 'Content strategy', 'Analytics & reporting']
  },
  {
    id: 'pr-crisis-management',
    title: 'PR & Crisis Management',
    image: '/HP/service-pr-crisis.png',
    intro: 'Build your public image and protect your reputation.',
    paragraphs: [
      'Public Relations is about telling your story the right way. We secure press coverage, organize media meets, and manage your brand\'s reputation across all channels.',
      'When a crisis hits, speed and strategy matter. Our crisis management team helps you respond quickly, control the narrative, and protect your brand\'s reputation.',
      'From press releases to media training, from journalist relationships to damage control — we handle every aspect of your public image.'
    ],
    features: ['Press release distribution', 'Media meets & conferences', 'Crisis communication', 'Reputation monitoring']
  },
  {
    id: 'brand-activation-events',
    title: 'Brand Activation & Events',
    image: '/HP/service-brand-activation.png',
    intro: 'Create unforgettable brand experiences through events and activations.',
    paragraphs: [
      'Brand activations bring your brand to life. We design and execute on-ground events, product launches, and experiential marketing campaigns that create lasting impressions.',
      'From corporate events to consumer festivals, from mall activations to college campaigns — we have organized 100+ successful events across India.',
      'Every activation is designed with clear goals: generate footfall, create buzz, drive sales, or build loyalty. We measure impact, not just attendance.'
    ],
    features: ['Product launches', 'On-ground activations', 'Corporate events', 'Experiential marketing']
  },
  {
    id: 'awards-ip-development',
    title: 'Awards & IP Development',
    image: '/HP/service-awards-ip.png',
    intro: 'Build proprietary media properties and award platforms.',
    paragraphs: [
      'Media IPs are powerful brand assets. We help you create award shows, recognition platforms, and branded events that position you as an industry leader.',
      'From concept to sponsorship to audience growth — we build media properties that generate revenue and strengthen your brand authority year after year.',
      'Our IP development work includes the Innovator & Trendsetter Awards, Healthcare Excellence Awards, and several other successful platforms.'
    ],
    features: ['Award show creation', 'IP monetization', 'Sponsorship development', 'Annual property management']
  },
  {
    id: 'film-production-podcasts',
    title: 'Film Production & Podcasts',
    image: '/HP/service-film-podcasts.png',
    intro: 'Tell your brand story through professional films and podcasts.',
    paragraphs: [
      'Video and audio content are the most engaging formats today. We produce corporate films, ad films, brand documentaries, and podcast series that tell your story powerfully.',
      'From scripting to shooting to post-production — our team handles the complete production process. Every piece of content is crafted to match your brand voice and goals.',
      'Podcasts are a growing medium for thought leadership. We help you launch, produce, and distribute podcast series that build your authority and engage your audience.'
    ],
    features: ['Corporate & ad films', 'Brand documentaries', 'Podcast production', 'Video content strategy']
  },
  {
    id: 'brand-consulting-strategy',
    title: 'Brand Consulting & Strategy',
    image: '/HP/service-brand-consulting.png',
    intro: 'Build a strong brand identity with strategic consulting.',
    paragraphs: [
      'Whether you are a retail store or a large corporation, your brand is your most important asset. We help you build a clear, consistent brand identity that connects with your audience.',
      'Our consulting covers everything — brand architecture, market positioning, visual identity, messaging strategy, and go-to-market planning. We create data-driven roadmaps that deliver results.',
      'With 20+ years of experience across retail and corporate brands, we bring practical expertise that turns brand strategy into business growth.'
    ],
    features: ['Brand architecture', 'Market positioning', 'Go-to-market strategy', 'Competitive analysis']
  },
  {
    id: 'online-reputation-management',
    title: 'Online Reputation Management',
    image: '/HP/service-online-reputation.png',
    intro: 'Manage your Wikipedia, Google Knowledge Panel, and online presence.',
    paragraphs: [
      'Your online presence defines how people perceive your brand. We help you build and manage your Wikipedia page, Google Knowledge Panel, and other key digital assets.',
      'A well-managed Wikipedia page and Knowledge Panel build instant credibility. We handle content creation, verification, and ongoing management to keep your information accurate and updated.',
      'We also monitor your brand\'s online mentions and search results. If negative content appears, we work to push it down and highlight the positive aspects of your brand.'
    ],
    features: ['Wikipedia page creation', 'Google Knowledge Panel setup', 'Search result management', 'Online brand monitoring']
  }
];

const whyChooseUs = [
  { title: 'Customized Approach', desc: 'We create a tailored strategy for every client. No two brands are the same, and neither are our solutions.' },
  { title: 'Expert Team', desc: 'Our professionals bring decades of industry experience, delivering top-tier results consistently.' },
  { title: 'Proactive Innovation', desc: 'We stay ahead of market trends, offering you cutting-edge solutions that keep your brand visible.' },
  { title: 'Comprehensive Support', desc: 'From strategy to crisis management, we provide end-to-end services for every stage.' },
];

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      <SEO
        title={`${service.title} | Himanshu Parashar`}
        description={service.intro}
        keywords={GLOBAL_KEYWORDS}
        canonicalPath={`/services/${service.id}`}
      />

      {/* Header spacer for fixed navbar */}
      <div className="h-20 bg-dark" />

      {/* Service Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">
                  {service.title}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {service.paragraphs[0]}
                </p>

                <div className="aspect-[16/10] overflow-hidden mb-12 bg-gray-100 rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover lg:grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed lg:columns-1 gap-12">
                  {service.paragraphs.slice(1).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-gray-400 mb-6">Key Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-brand shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12">
                  <Link to="/contact" className="btn btn-primary">
                    Request Consultation
                  </Link>
                  <a href="#testimonials" className="btn btn-outline">
                    Client Testimonials
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6">All Services</h3>
                <div className="space-y-1">
                  {allServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className={`flex items-center justify-between py-4 px-4 text-sm font-medium transition-all border-b border-gray-100 ${
                        s.id === serviceId
                          ? 'bg-gray-light text-brand font-bold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-dark'
                      }`}
                    >
                      {s.title}
                      {s.id === serviceId && <ArrowRight size={16} className="text-brand" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Accordion */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                Why Choose<br />Himanshu Parashar!
              </h2>
            </div>
            <div className="space-y-2">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold uppercase tracking-wider text-sm"
                  >
                    {item.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openAccordion === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="testimonials">
        <Testimonials isDark={true} />
      </div>

      <ClientShowcase />

      <CTASection />
    </div>
  );
}
