
import './App.css'


const projects = [
  {
    number: '01',
    name: 'FleetPesa',
    type: 'Fleet Management & Payments',
    description:
      'A team project focused on helping fleet owners track driver remittances, vehicle assignments and outstanding payments.',
    technologies: ['React', 'Flask', 'SQLAlchemy'],
    status: 'Team Project',
    icon: '↗',
    githubUrl: '',
    liveUrl: '',
  },
  {
    number: '02',
    name: 'Weather Alerts',
    type: 'Weather Information',
    description:
      'A web application project focused on displaying weather information and alerts using external data sources.',
    technologies: ['JavaScript', 'API Integration'],
    status: 'Web Application',
    icon: '☼',
    githubUrl: '',
    liveUrl: '',
  },
  {
  number: '03',
  name: 'MovieZone',
  type: 'Movie Discovery',
  description:
    'A movie-focused application project showcasing frontend development and interactive user experiences.',
  technologies: ['JavaScript', 'Frontend'],
  status: 'Web Application',
  icon: '▶',
  githubUrl: 'https://github.com/ngashisaya001-creator/movieWatchlist',
  liveUrl: '',
},
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">gabriel<span>.dev</span></a>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-button"
          href="https://github.com/gabrielmutavi4"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEERING PORTFOLIO
            </div>

            <h1>
              Building digital
              <br />
              solutions that <span>matter.</span>
            </h1>

            <p className="hero-description">
              I'm a software engineering developer building web applications
              with Python, Flask, React and SQL. I enjoy solving practical
              problems through technology.
            </p>

            
            <div className="hero-actions">
              <a
                className="primary-button"
                href="mailto:gabrielmutavi4@gmail.com"
              >
                 Email me ↗
              </a>

              <a
                 className="secondary-button"
                 href="https://www.linkedin.com/in/gabriel-mutavi/"
                 target="_blank"
                 rel="noreferrer"
              >
                 LinkedIn ↗
              </a>

              <a
                 className="secondary-button"
                 href="https://github.com/gabrielmutavi4"
                 target="_blank"
                 rel="noreferrer"
              >
                  GitHub ↗
              </a>

              <a
                className="secondary-button"
                href="/CV.pdf"
                download="Gabriel-Mutavi-CV.pdf"
              >
                Download CV ↓
              </a>
            </div>


            <div className="hero-meta">
              <span>BASED IN KENYA 🇰🇪</span>
              <span>FULL-STACK DEVELOPMENT</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.js</span>
              </div>
              <div className="code-content">
                <p><span className="line-number">01</span> <span className="purple">const</span> developer = {'{'}</p>
                <p><span className="line-number">02</span> &nbsp; name: <span className="green">'Gabriel'</span>,</p>
                <p><span className="line-number">03</span> &nbsp; role: <span className="green">'Software Engineer'</span>,</p>
                <p><span className="line-number">04</span> &nbsp; stack: [</p>
                <p><span className="line-number">05</span> &nbsp;&nbsp; <span className="green">'Python'</span>, <span className="green">'React'</span>,</p>
                <p><span className="line-number">06</span> &nbsp;&nbsp; <span className="green">'Flask'</span>, <span className="green">'SQL'</span></p>
                <p><span className="line-number">07</span> &nbsp; ],</p>
                <p><span className="line-number">08</span> &nbsp; learning: <span className="orange">true</span></p>
                <p><span className="line-number">09</span> {'}'}</p>
              </div>
              <div className="code-footer">
                <span>● Ready to build</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-strip" aria-label="Technologies">
          <span>TECHNOLOGIES I WORK WITH</span>
          <div>Python</div>
          <div>Flask</div>
          <div>React</div>
          <div>JavaScript</div>
          <div>SQL</div>
          <div>Git & GitHub</div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED WORK</span>
              <h2>Projects I've worked on<span>.</span></h2>
            </div>
            <p>A selection of projects that reflect my learning and development journey.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-icon">{project.icon}</div>

                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code ↗
                    </a>
                  )}

                 {project.liveUrl && (
                   <a
                     href={project.liveUrl}
                     target="_blank"
                     rel="noreferrer"
                   >
                     Live demo ↗
                   </a>
                   )}

                   {!project.githubUrl && !project.liveUrl && (
                     <span>Links coming soon</span>
                   )}
                 </div>

              </article>
            ))}
          </div>
          <p className="project-note">
            Project descriptions are introductory summaries. Add verified
            repository links, screenshots and live demos as each project is
            ready to showcase.
          </p>
        </section>

        <section className="about section" id="about">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curious by nature.<br />Engineer by practice.</h2>
          <p>
            I'm developing my skills in full-stack software engineering,
            from designing user interfaces to building backend APIs and
            working with databases. I value readable code, continuous learning
            and software that solves real-world problems.
          </p>

          <div className="skills-grid">
            <div><span>01</span><strong>Frontend</strong><p>React · JavaScript · CSS</p></div>
            <div><span>02</span><strong>Backend</strong><p>Python · Flask · REST APIs</p></div>
            <div><span>03</span><strong>Database</strong><p>SQL · SQLAlchemy</p></div>
            <div><span>04</span><strong>Workflow</strong><p>Git · GitHub · Testing</p></div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let's build something<br />meaningful<span>.</span></h2>
          <p>I'm interested in connecting with developers, teams and opportunities to grow.</p>
          <a
            className="primary-button"
            href="https://github.com/gabrielmutavi4"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">gabriel<span>.dev</span></a>
        <p>Designed & built with React · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
