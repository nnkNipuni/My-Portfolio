import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }) {
  const { id } = await params
  const projectId = parseInt(id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
