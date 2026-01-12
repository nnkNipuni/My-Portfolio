'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  // Generate random stars
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      {/* Subtle nebula-like glow effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
          style={{ 
            animation: 'float-slow 20s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"
          style={{ 
            animation: 'float-slow 25s ease-in-out infinite',
            animationDelay: '5s',
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl"
          style={{ 
            animation: 'float-slow 30s ease-in-out infinite',
            animationDelay: '10s',
          }}
        ></div>
      </div>

      {/* Occasional shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: '20%',
            left: '0%',
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), -100px 0 20px 2px rgba(255, 255, 255, 0.5)',
            animation: 'shooting-star 8s linear infinite',
          }}
        />
        <div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: '60%',
            left: '0%',
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), -100px 0 20px 2px rgba(255, 255, 255, 0.5)',
            animation: 'shooting-star 12s linear infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Glassmorphism container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 glassmorphism-strong rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl w-full mx-auto"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
          >
            NIPUNI KAHANDAWA
          </motion.h1>

          {/* Circular Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 animate-shimmer bg-[length:200%_100%]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src="/profile-photo.jpg"
                    alt="Nipuni Kahandawa"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                    NK
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Welcome to my portfolio! A passionate data science undergraduate and problem solver, 
              focused on transforming real-world data into actionable insights through analytics, machine learning, and well designed systems.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Explore my projects below, including machine learning based prediction systems and data 
            warehousing solutions designed for real world decision making.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
