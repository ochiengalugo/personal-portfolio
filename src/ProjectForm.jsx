import { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    onAdd(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <div className="form-container">
      <h3>Add Project</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="Enter project title"
        />
        <label>Description</label>
        <textarea 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Enter project description"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;