import { Link } from 'react-router-dom';
import { FeatureSteps } from "./ui/feature-section"

const features = [
  { 
    step: 'Channel 1', 
    title: 'Print Media',
    content: 'Placing your brand in top national and local newspapers and magazines to build strong trust and reach your target audience directly.', 
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Channel 2',
    title: 'Television',
    content: 'Running targeted TV ads and program sponsorships to tell your brand\'s story to millions of viewers across popular channels.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Channel 3',
    title: 'Digital',
    content: 'Reaching your exact audience through smart social media and Google campaigns that deliver real, measurable business results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Channel 4',
    title: 'Radio',
    content: 'Connecting with local listeners every day through popular radio channels and trusted RJ endorsements.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    step: 'Channel 5',
    title: 'Hoarding / OOH',
    content: 'Putting your brand on big billboards and transit ads in the best city locations for maximum daily visibility.',
    image: 'https://images.unsplash.com/photo-1553096442-8fe2118fb927?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    step: 'Channel 6',
    title: 'Activation',
    content: 'Engaging with people directly through live events, mall promotions, and on-ground activities to build a memorable brand experience.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Channel 7',
    title: 'Public Relations',
    content: 'Getting your brand featured in top news media to build a strong, trusted reputation in the market.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Channel 8',
    title: 'Awards',
    content: 'Helping your brand win top industry awards to prove your excellence and stand out as a trusted market leader.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop'
  }
]

export function MediaChannels() {
  return (
    <section id="media-channels" className="py-24 bg-gray-50 overflow-hidden text-midnight border-y border-gray-200">
      <div className="container mx-auto px-6 md:px-12 mt-6 text-center max-w-4xl">
         <span className="text-burnt-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
            All Media Channels Under One Roof
         </span>
         <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Complete Media Presence
         </h2>
         <p className="text-gray-600 font-light text-lg">
            We combine traditional media like TV and Print with modern digital platforms to help your brand reach the right audience everywhere.
         </p>
      </div>
      <FeatureSteps 
        features={features}
        autoPlayInterval={4000}
        imageHeight="h-[300px] md:h-[500px] lg:h-[750px]"
      />
    </section>
  )
}
