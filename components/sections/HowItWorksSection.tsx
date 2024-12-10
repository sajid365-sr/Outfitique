"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useRef } from "react";
import img1 from "@/assets/scan your clothes.jpg";
import img2 from "@/assets/get AI suggestions.jpg";
import img3 from "@/assets/style your own AI avatar.jpg";

const steps = [
  {
    step: 1,
    title: "Build Your Digital Closet",
    description: "Snap photos of your clothes to create your virtual wardrobe.",
    image: img1,
  },
  {
    step: 2,
    title: "Get AI Outfit Ideas",
    description:
      "Let AI match your clothes into stunning outfit combinations just for you.",
    image: img2,
  },
  {
    step: 3,
    title: "Style Your Virtual You",
    description:
      "Dress your AI avatar with curated outfits to see your new look come to life.",
    image: img3,
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="howItWorks" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4dd193] via-purple-500 to-[#4dd193] bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-[#6B8F71] text-lg max-w-2xl mx-auto">
            Get started with Outfitique in three simple steps
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ step, title, description, image }) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 * step, duration: 0.5 }}
              className="relative"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 bg-[#345635]/10 backdrop-blur-md border border-[#345635]/20 relative overflow-hidden">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#345635] to-[#6B8F71] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#345635] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-[0_0_15px_rgba(52,86,53,0.5)]">
                  {step}
                </span>
                <CardHeader className="p-0 overflow-hidden rounded-t-lg relative z-[1]">
                  <div className="relative h-[250px] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={step === 1}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-8 bg-transparent backdrop-blur-sm relative z-[1]">
                  <h3 className="text-xl font-semibold text-[#4dd193] mb-2">
                    {title}
                  </h3>
                  <p className="text-[#a4eba6]">{description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
