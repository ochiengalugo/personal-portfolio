import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete }) {
  return (
    <>
    // Inside ProjectCard.jsx
<div className="project-card">
  <h4>{project.title}</h4>
  <p>{project.description}</p>
</div>
    <div className="project-list-container">
      {projects.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#777' }}>
          No projects to show.
        </p>
      ) : (
        projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
    </>
  );
}

export default ProjectList;