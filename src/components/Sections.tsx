import type { CSSProperties, ReactNode } from 'react'
import { getAge, resume } from '../data/resume'
import { hostOf, phoneHref } from '../utils'
import { Icon } from './Icon'

function SectionHead({ index, title, aside }: { index: string; title: ReactNode; aside?: ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-head__index mono">{index}</span>
      <h2 className="section-head__title">{title}</h2>
      {aside && <p className="section-head__aside">{aside}</p>}
    </div>
  )
}

export function About() {
  const { personal } = resume
  const info = [
    { label: 'Возраст', value: getAge(resume.birthDate) },
    { label: 'Гражданство', value: personal.citizenship },
    { label: 'Город', value: personal.city },
    { label: 'Почта', value: <a href={`mailto:${personal.email}`}>{personal.email}</a> },
    { label: 'Телефон', value: <a href={phoneHref(personal.phone)}>{personal.phone}</a> },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          title={
            <>
              Обо <em>мне</em>
            </>
          }
        />
        <div className="about">
          <div className="about__text" data-reveal>
            {resume.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="info" data-reveal>
            {info.map((row) => (
              <div key={row.label} className="info__row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="subhead" data-reveal>
          Что <em>я делаю</em>
        </h3>
        <ul className="services">
          {resume.services.map((s, i) => (
            <li key={s.title} className="card service" data-reveal style={{ '--delay': `${i * 70}ms` } as CSSProperties}>
              <span className="service__icon">
                <Icon name={s.icon} size={22} />
              </span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="02"
          title={
            <>
              Мои <em>проекты</em>
            </>
          }
          aside="Собственные продукты: от идеи и проектирования до публичного запуска."
        />
        <div className="projects">
          {resume.projects.map((p, i) => (
            <article key={p.name} className="card project" data-reveal>
              <a className="project__preview" href={p.url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                <span className="browser">
                  <span className="browser__bar">
                    <i />
                    <i />
                    <i />
                    <span className="browser__url mono">{hostOf(p.url)}</span>
                  </span>
                  <img src={p.preview} alt="" loading="lazy" width={1440} height={900} />
                </span>
              </a>
              <div className="project__body">
                <span className="project__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="project__name">{p.name}</h3>
                <p className="project__summary">{p.summary}</p>
                <p className="project__text">{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project__links">
                  <a className="btn btn--primary" href={p.url} target="_blank" rel="noreferrer">
                    {hostOf(p.url)}
                    <Icon name="arrow" size={18} />
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Исходный код ${p.name} на GitHub`}
                  >
                    <Icon name="github" size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          index="03"
          title={
            <>
              Опыт <em>работы</em>
            </>
          }
        />
        <ol className="timeline">
          {resume.experience.map((job) => (
            <li key={job.role + job.period} className="timeline__item" data-reveal>
              <div className="timeline__meta">
                <span className="mono">{job.period}</span>
                <span className="timeline__company">{job.company}</span>
              </div>
              <div className="timeline__body">
                <h3>{job.role}</h3>
                {job.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {job.projects && (
                  <>
                    <p className="timeline__label mono">Проекты</p>
                    <ul className="tags tags--soft">
                      {job.projects.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="subhead" data-reveal>
          <em>Образование</em>
        </h3>
        <ol className="timeline">
          {resume.education.map((ed) => (
            <li key={ed.place} className="timeline__item" data-reveal>
              <div className="timeline__meta">
                <span className="mono">{ed.period}</span>
                <span className="timeline__company">{ed.title}</span>
              </div>
              <div className="timeline__body">
                <h3>{ed.place}</h3>
                <p>{ed.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          index="04"
          title={
            <>
              Навыки <em>разработки</em>
            </>
          }
        />
        <div className="skills">
          <ul className="meters">
            {resume.skills.map((s) => (
              <li key={s.name} className="meter" data-reveal style={{ '--level': `${s.level}%` } as CSSProperties}>
                <div className="meter__head">
                  <span className="meter__name">{s.name}</span>
                  <span className="mono meter__value">{s.level}%</span>
                </div>
                {s.details && <p className="meter__details">{s.details}</p>}
                <span className="meter__track" role="meter" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
                  <span className="meter__fill" />
                </span>
              </li>
            ))}
          </ul>
          <div className="knowledge" data-reveal>
            <h3 className="knowledge__title mono">Знания</h3>
            <ul className="tags">
              {resume.knowledge.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const { personal } = resume
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHead index="05" title="Контакты" />
        <div className="contact__card card" data-reveal>
          <p className="contact__note">Удобнее всего связаться по почте</p>
          <a className="contact__email" href={`mailto:${personal.email}`}>
            {personal.email}
            <Icon name="arrow" size={28} />
          </a>
          <ul className="contact__list">
            <li>
              <Icon name="phone" size={18} />
              <a href={phoneHref(personal.phone)}>{personal.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              {personal.city}
            </li>
            <li>
              <span className="dot" />
              {resume.status}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {resume.name}. Все права защищены.
        </span>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  )
}
