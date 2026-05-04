import ProjectItem from './ProjectItem';

function ProjectList({ projects, onDelete }) {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map(project => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            onDelete={onDelete} 
          />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default ProjectList;