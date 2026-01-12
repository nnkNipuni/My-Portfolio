'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

function ProjectTile({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="glassmorphism rounded-2xl overflow-hidden aspect-square cursor-pointer group relative flex flex-col items-center justify-center p-8 hover:bg-white/10 transition-all duration-300">
          {/* Folder Icon */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
            {/* Folder SVG Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white/80 group-hover:text-white transition-colors duration-300"
            >
              {/* Folder body */}
              <path
                d="M3 7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12.7071 7.70711C12.8946 7.89464 13.149 8 13.4142 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Folder tab */}
              <path
                d="M3 7L3 9C3 9.55228 3.44772 10 4 10H9.58579C9.851 10 10.1054 9.89464 10.2929 9.70711L12.7071 7.29289C12.8946 7.10536 13.149 7 13.4142 7H19C19.5523 7 20 6.55228 20 6V7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-blue-400/0 to-indigo-400/0 group-hover:from-purple-400/20 group-hover:via-blue-400/20 group-hover:to-indigo-400/20 rounded-lg blur-xl transition-all duration-300"></div>
          </div>
          
          {/* Project Name */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center group-hover:text-white/90 transition-colors duration-300">
            {project.shortName || project.name}
          </h3>
          
          {/* Click indicator */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white/60 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  // Generate random stars for projects section
  const projectStars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }))

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16">
      {/* Subtle star field for projects section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {projectStars.map((star) => (
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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid - Square Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
