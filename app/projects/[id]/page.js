import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }) {
  const projectId = parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
