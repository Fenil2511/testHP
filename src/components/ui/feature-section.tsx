"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "../../lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title, // removed the default so it hides completely when not passed
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-14 text-center text-midnight">
            {title}
          </h2>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="order-2 lg:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 lg:gap-8 cursor-pointer group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0",
                    index === currentFeature
                      ? "bg-burnt-orange border-burnt-orange text-white scale-110 shadow-lg"
                      : "bg-gray-100 border-gray-300 text-gray-500 hover:border-gray-400",
                  )}
                >
                  {index === currentFeature ? (
                    <span className="text-xl font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-midnight mb-2">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 lg:order-2 relative w-full overflow-hidden rounded-sm shadow-2xl border border-gray-200 lg:sticky lg:top-32",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-sm overflow-hidden bg-gray-100"
                      initial={{ y: 50, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -50, opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <h4 className="text-white font-serif text-3xl font-bold drop-shadow-md">{feature.title}</h4>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
