import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Без хранилища тема просто не запомнится
      }
      return next
    })
  }, [])

  return { theme, toggle }
}

/** Плавно показывает блоки с атрибутом data-reveal, когда они попадают в экран. */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Какой раздел сейчас на экране — для подсветки пункта меню. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // Первый экран тоже наблюдаем, чтобы на нём ни один пункт не подсвечивался
    for (const id of ['top', ...ids]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}

/** Возвращает элементы списка по очереди с заданным интервалом. */
export function useRotation<T>(items: T[], interval = 2800) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => window.clearInterval(id)
  }, [items.length, interval])

  return index
}
