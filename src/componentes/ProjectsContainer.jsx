import mns_project from "../img/MyNeighborhoodSpeak.png"

import "../styles/components/projectscontainer.sass";

const projects = [
  {name: "My Neighborhood Speak", icon: <img src={mns_project} alt="MnS" /> },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
        {projects.map((proj) => (
          <div className="projects-card" id={proj.id} key={proj.id}>
            <div className="projects-icon">
              {proj.icon}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsContainer