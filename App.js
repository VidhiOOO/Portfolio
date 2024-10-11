import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Vidhi Ojha</h1>
        <p>New Coder | Student</p>
        <div className="socials">
        <a href="https://github.com/VidhiOOO" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
          <a href="https://www.linkedin.com/in/vidhi-ojha-08063b312/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a highschool student who recently started learning code. I'm hoping to go into physics and improve my skills!
        </p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Nothing Yet</h3>
            <p>Hopefully something soon though!</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via <a href="mailto:vidhiojha1@gmail.com">email</a>
        </p>
      </section>
    </div>
  );
}

export default App;
