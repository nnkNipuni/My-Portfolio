'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ProjectDetail({ project }) {
  const router = useRouter()

  if (!project) {
    return null
  }

  // Generate random stars for detail page
  const detailStars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }))

  return (
    <div className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16">
      {/* Subtle star field for detail page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {detailStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white/40"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back to Projects
      </motion.button>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col gap-6 md:gap-8"
        >
          {/* Media Section - Full Width (Video/Image) */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
              {project.imageUrl ? (
                // Image display
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              ) : project.videoUrl && (project.videoUrl.endsWith('.mp4') || project.videoUrl.startsWith('/')) ? (
                // Local MP4 video
                <video
                  src={project.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : project.videoUrl ? (
                // YouTube/Vimeo embed
                <iframe
                  src={project.videoUrl}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : null}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {project.name}
              </h3>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors duration-200 text-sm md:text-base"
                  aria-label="Visit project platform"
                >
                  ({project.projectUrl})
                </a>
              )}
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
            
            {/* Skills/Tools Section - Under the video */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
