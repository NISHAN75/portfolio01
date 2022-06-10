import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects]=useState([]);
  useEffect(()=>{
    fetch("projects.json")
    .then(res => res.json())
    .then(data => setProjects(data))
  },[])
  return (
    <section>
      <h2 className="text-5xl text-center mb-20 text-primary">My Projects</h2>

      <div className="projects-area">
      
        <div className="card-area grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {
            projects.map(project => <Project key={project.id} project={project}></Project>)
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
