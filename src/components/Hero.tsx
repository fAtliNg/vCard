import { resume } from '../data/resume'
import { useRotation } from '../hooks'
import { plural } from '../utils'
import { Icon } from './Icon'

export function Hero() {
  const roleIndex = useRotation(resume.roles)
  const year = new Date().getFullYear()
  const facts = [
    { value: year - resume.careerStart, suffix: '+', label: 'в разработке' },
    { value: year - resume.leadSince, label: 'руковожу командой' },
    { value: year - resume.sberSince, label: 'в Сбере' },
  ]

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__name" data-reveal>
            <span>{resume.lastName}</span>
            <em>{resume.firstName}</em>
          </h1>
          <p className="hero__role" data-reveal>
            <span className="hero__role-track" style={{ transform: `translateY(-${roleIndex * 1.3}em)` }}>
              {resume.roles.map((role, i) => (
                <span key={role} aria-hidden={i !== roleIndex}>
                  {role}
                </span>
              ))}
            </span>
          </p>
          <div className="hero__cta" data-reveal>
            <a className="btn btn--primary" href={`mailto:${resume.personal.email}`}>
              <Icon name="mail" size={18} />
              Написать письмо
            </a>
            <a className="btn btn--ghost" href={resume.resumePdf} target="_blank" rel="noopener">
              <Icon name="download" size={18} />
              Резюме в PDF
            </a>
            <a className="btn btn--ghost" href="#projects">
              Мои проекты
              <Icon name="arrowDown" size={18} />
            </a>
          </div>
        </div>

        <figure className="hero__photo" data-reveal>
          <img src={resume.photo} alt={resume.name} width={640} height={640} />
          <figcaption>
            <span className="mono">{resume.roles[0]}</span>
            <span>{resume.personal.city}</span>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <dl className="facts" data-reveal>
          {facts.map((f) => (
            <div key={f.label} className="facts__item">
              <dt>
                {plural(f.value, ['год', 'года', 'лет'])} {f.label}
              </dt>
              <dd>
                {f.value}
                {f.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
