import { useState } from 'react';
import Header from './Header';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import SearchBar from './SearchBar';
import './App.css'; 

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Dictionary App", description: "Real-time API-driven application." },
    { id: 2, title: "Weather Alerts", description: "Regional advisory system with live data." }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: crypto.randomUUID() }]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="portfolio-wrapper">
      <aside className="sidebar">
        <div className='profile'>
          <img src="src/WhatsApp Image 2026-05-04 at 23.13.29.jpeg" alt="pic" 
          className="profile-pic"/>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#showcase">Project Showcase</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-text">
          <h1>Ochieng Derrick Alugo</h1>
          <p><strong>Ochieng Derrick Alugo</strong> is a dedicated Software Engineer at Moringa School.Ochieng is a frent-end developer who interact most with html, css and javascript.</p>
        </div>
      </aside>

      <main className="main-content">
        <section id="about" className="section">
          <h2>About Ochieng</h2>
          <p>I specialize in building clean, functional web applications with HTML,CSS, Vanilla JS and React.</p>
        </section>

        <section id="showcase" className="section">
          <Header />
          <ProjectForm onAdd={addProject} />
          <SearchBar onSearchChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} onDelete={deleteProject} />
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: izaryalugo@gmail.com.com</p>
          <p><strong>0794829895</strong></p>
        </section>
      </main>
    </div>
  );
}

export default App;