import { profile, stats, projects, skills, experience, education, training, type Project } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import ContactForm from "./ContactForm";

function Cover({ p }: { p: Project }) {
  const inner = p.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={p.image} alt={`${p.title} screenshot`} />
  ) : (
    <div className="ph"><span>{p.title}</span><small>Add a screenshot in lib/data.ts</small></div>
  );
  return p.live ? (
    <a className="cover" href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>{inner}</a>
  ) : (
    <div className="cover">{inner}</div>
  );
}

export default function Home() {
  return (
    <>
      <div className="navwrap">
        <header className="nav">
          <a href="#top" className="brand">
            <span className="logo">D</span>
            <span><b>{profile.name}</b><small>{profile.role}</small></span>
          </a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="btn dark" href="#contact">Get in touch</a>
          </div>
        </header>
      </div>

      <main id="top">
        <section className="hero">
          <div>
            <p className="status"><i /> Available for selected work · {profile.location}</p>
            <h1>{profile.headlineA} <span>{profile.headlineB}</span></h1>
            <p className="lead">{profile.summary}</p>
            <div className="cta">
              <a className="btn primary" href="#projects">View projects</a>
              <a className="btn ghost" href="#contact">Contact me</a>
              <a className="link" href={profile.cv} download>Download CV</a>
            </div>
          </div>
          <div className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt={profile.name} />
          </div>
        </section>

        <section className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value.replace("+", "")}{s.value.includes("+") && <em>+</em>}</strong>
              <span>{s.label}</span>
              <small>{s.note}</small>
            </div>
          ))}
        </section>

        <section id="projects" className="section">
          <div className="shead"><h2>Projects</h2><p>Systems running real businesses. Click a screenshot to open the live site.</p></div>
          <div className="pgrid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <Cover p={p} />
                <div className="pbody">
                  <div className="meta"><span>{p.tag}</span><span>{p.year}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="chips">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
                  <div className="plinks">
                    {p.live && <a className="btn primary sm" href={p.live} target="_blank" rel="noreferrer">Live site</a>}
                    {p.source && <a className="btn ghost sm" href={p.source} target="_blank" rel="noreferrer">Source code</a>}
                    {!p.live && !p.source && <a className="btn ghost sm" href="#contact">Ask for a demo</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="shead"><h2>Skills</h2></div>
          <div className="sgrid">
            {skills.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="shead"><h2>Experience</h2></div>
          <div className="tl">
            {experience.map((e) => (
              <div className="tli" key={e.role}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>{e.role}</h3>
                  <p className="co">{e.company}</p>
                  <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="shead"><h2>Education</h2></div>
          <div className="tl">
            {education.map((e) => (
              <div className="tli" key={e.title}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>{e.title}</h3>
                  <p className="co">{e.place}</p>
                  <p className="grade">{e.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="training" className="section">
          <div className="shead"><h2>Training</h2></div>
          <div className="tgrid">
            {training.map((t) => (
              <div className="tcard" key={t.title}>
                <p className="co">{t.place}</p>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <h2>Have a system that needs building?</h2>
            <p className="lead">Tell me what you are working on and I will reply within a day.</p>
            <div className="cta">
              <a className="btn ghost" href={`mailto:${profile.email}`}>Email</a>
              <a className="btn ghost" href={`tel:${profile.phone}`}>Call</a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn ghost" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
