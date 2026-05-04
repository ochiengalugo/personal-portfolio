function ProjectItem({ project, onDelete }) {
  return (
    <div className="project-item">
      <div className="project-info">
        <button className="delete-icon" onClick={() => onDelete(project.id)}>✕</button>
        <div className="text-content">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;