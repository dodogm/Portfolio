import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

type Project = (typeof projects)[number];
export function ProjectCard({ project }: { project: Project }) {

  return <article className="project-card reveal">
    <img src={project.image} alt={`Prévia do projeto ${project.title}`} loading="lazy" />

    <div className="project-content">
      <div className="project-title">

        <h3>{project.title}</h3>

        <div>

          <a href={project.github} aria-label={`Código do ${project.title}`}><Github size={18} /></a>

          <a href={project.demo} aria-label={`Abrir ${project.title}`}>
             <ArrowUpRight size={19} /></a>
             </div>
             </div>
             <p>{project.description}</p>
             <ul 
             className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}
             </ul>
             </div>
             </article>;
}
