import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { SectionHeading } from './components/SectionHeading';
import { experiences, profile, projects, skills } from './data/portfolio';

function App() {
  return <><Navbar />

    <main>

      <section

        className="hero" id="inicio">
        <div className="hero-backdrop" />
        <div className="container hero-content reveal">
          <p className="greeting">Olá, meu nome é <strong>{profile.name}</strong> e eu sou</p>
          <h1>{profile.role}</h1>
          <p className="hero-copy">{profile.intro}</p><a
            className="scroll-cue" href="#sobre"
            aria-label="Ir para a seção sobre"><ArrowDown size={24} />

          </a>
        </div>
      </section>

      <section

        className="about section" id="sobre">
        <div className="container about-grid">
          <div className="about-copy reveal">
            <SectionHeading eyebrow="SOBRE MIM" title="Muito prazer, sou Douglas." />
            <p>{profile.about}</p>
            {/*<a className="text-link" href="/curriculo.pdf" download><Download size={18} /> Baixar currículo</a>*/}
            </div>
          <div className="skills-panel reveal">
            <p>Tecnologias que uso no dia a dia</p><div className="skill-grid">{skills.map(skill => <div className="skill" key={skill.name}><img src={skill.icon} alt="" />
              <span>{skill.name}</span>
            </div>)}
            </div>
          </div>
        </div>
      </section>

      <section

        className="projects section" id="projetos">
        <div className="container">
          <SectionHeading eyebrow="MEU TRABALHO" title="Projetos em destaque" description="Algumas interfaces e experiências que criei recentemente." />
          <div className="projects-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

               {/* 
      <section
        className="experience section" id="experiencia">
        
       
        <div className="container narrow">
          <SectionHeading eyebrow="TRAJETÓRIA" title="Experiência profissional" />
          <div className="timeline">{experiences.map(item =>
            <article className="experience-item reveal" key={item.company}>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
             
            </article>)}
          </div>
        </div>
      </section>
                 */}
      <section

        className="contact" id="contato">
        <div className="contact-backdrop" />
        <div className="container contact-content reveal">
          <SectionHeading eyebrow="CONTATO" title="Vamos trabalhar juntos?" description="Estou disponível para novos projetos e adoro conversar sobre boas ideias." />
          <div className="social-links">
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
              <ArrowUpRight size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn<ArrowUpRight size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub<ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <div className="container"><span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Feito com cuidado e café.</span></div></footer>
  </>;
}
export default App;
