import React from "react";
import './About.css'

const About = () => {
  
  return (
    <section className="about-area mb-20 mt-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
      <div className="about-content">
        <div className="about-header">
          <h2 className="text-5xl font-bold text-primary">
            About Myself and Me
          </h2>
        </div>
        <p class="py-6">
          Hi, My name is Nishan Das.
          <br />
          I am front end developer. I start web development learning in July
          2021.
          <br /> Recently I can completed front-end development with good
          knowledge.
        </p>
        <p>
          I am well-versed in HTML, CSS, JavaScript, React js, Bootstrap,
          Tailwind css,Node js,daisy Components, <br /> TypeScript, React
          native, and I have essential programming experience working on my
          personal projects.
          <br /> I also have a good knowledge of MongoDB , firebase
          authentication, Netlify, Heroku, and GitHub.
        </p>
        <button className="btn-one  mt-10">
          <div className="btn-content">
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">
              <a href="https://drive.google.com/file/d/1ljNpGT2d-GBMFbJpqD1h86sU7ujd3K0C/view?usp=sharing">
                My Resume
              </a>
            </span>
          </div>
        </button>
      </div>
      <div className="skills-chart p-10 mt-12">
          <div class="tag">
            <a class="tag3">HTML5</a>
            <a class="tag1">CSS 3</a>
            <a class="tag0">JavaScript</a>
            <a class="tag3">React js</a>
            <a class="tag3">Bootstrap</a>
            <a class="tag3">Tailwind css</a>
            <a class="tag5">daisy Components</a>
            <a class="tag0">TypeScript</a>
            <a class="tag4">React
          native</a>
            <a class="tag3">MongoDB</a>
            <a class="tag8">firebase</a>
            <a class="tag3">Heroku</a>
            <a class="tag9">GitHub</a>
            <a class="tag4">Node js</a>
            <a class="tag6">Responsive Website design</a>
            <a class="tag4">web development</a>
            <a class="tag3">Netlify</a>
            <a class="tag9">javascript</a>
            <a class="tag7">testing</a>
            <a class="tag2">project management</a>
          </div>
        
      </div>
    </section>
  );
};

export default About;
