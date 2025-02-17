export const ProjectsCards = () => {
  const projects = [
    {
      id: 1,
      name: "Text to image",
      technologies: ["Python", "ChromaDB", "Gradio"],
      url: "https://github.com/Alberthzaid/text-to-image.git",
    },
    {
      id: 2,
      name: "Math Soccer",
      technologies: ["Python", "Streamlit", "Deepseek"],
      url: "https://github.com/Alberthzaid/ModelMath.git",
    },
    {
      id: 3,
      name: "Space Invaders",
      technologies: ["Python", "Pygame"],
      url: "https://github.com/Alberthzaid/Game_test.git",
    },
    {
      id: 5,
      name: "Simple fullstack app",
      technologies: ["Python", "Django", "Angular"],
      url: "https://github.com/Alberthzaid/Technical-Test-Python.git",
    },
    {
      id: 6,
      name: "Ecommerce Fullstack - Api Gemini",
      technologies: ["React", "NodeJs", "Gemini"],
      url: "https://github.com/Alberthzaid/Front-Test-Web.git",
    },


  ];

  const openRepo = (Link: string) => {
    window.open(`${Link}`, "_blank");
  };

  return (
    <div className="certifications_content">
      {projects.map((project) => (
        <div className="cardCertifi" key={project.id}>
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <h3 className="title_certifi">{project.name}</h3>
            <li>
              {project.technologies.map((tech) => (
                <p>{tech}</p>
              ))}
            </li>
            <button
              className="view_certifi"
              onClick={() => openRepo(project.url)}
            >
              View project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
