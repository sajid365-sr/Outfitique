"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading state
  }

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    initialX:
      Math.random() *
      (typeof window !== "undefined" ? window.innerWidth : 1000),
    initialY:
      Math.random() *
      (typeof window !== "undefined" ? window.innerHeight : 1000),
    destinationX:
      Math.random() *
      (typeof window !== "undefined" ? window.innerWidth : 1000),
    destinationY:
      Math.random() *
      (typeof window !== "undefined" ? window.innerHeight : 1000),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: particle.destinationX,
            y: particle.destinationY,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
        />
      ))}
    </div>
  );
};

export default Particles;
