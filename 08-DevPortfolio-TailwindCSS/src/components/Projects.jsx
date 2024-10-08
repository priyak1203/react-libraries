import { projects } from '../data';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="web creation" />
      <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
