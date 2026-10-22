import { useEffect, useState } from 'react'
import { useActiveSection, useTheme } from '../hooks'
import { Icon } from './Icon'

export const sections = [
  { id: 'about', label: 'Обо мне' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Навыки' },
  { id: 'contact', label: 'Контакты' },
]

const sectionIds = sections.map((s) => s.id)

export function Header() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="В начало" onClick={() => setOpen(false)}>
          <span className="logo__mark">сд</span>
          <span className="logo__text">Денисенко Сергей</span>
        </a>

        <nav className="nav" id="site-nav" aria-label="Разделы">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link${active === s.id ? ' is-active' : ''}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
