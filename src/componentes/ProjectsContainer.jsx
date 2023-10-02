import mns_project from "../img/MyNeighborhoodSpeak.png";

import "../styles/components/projectscontainer.sass";

const projects = [
  {
    name: "My Neighborhood Speak",
    icon: <img src={mns_project} alt="MnS" />,
    description:
      "Quiz sobre a língua inglesa com premiação em Pix (R$) para os primeiros colocados. Desafio que incentiva alunos do ensino médio das escolas do bairro a praticar o idioma, este que é tão importante para o mercado de trabalho e para a vida.",
  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="projects-card" id={proj.id} key={proj.id}>
            {proj.icon}
            <div className="projects-info">
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
