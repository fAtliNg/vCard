/** Русское склонение: plural(5, ['год', 'года', 'лет']) → 'лет'. */
export function plural(n: number, forms: [string, string, string]): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return forms[0]
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1]
  return forms[2]
}

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`

/** Адрес без протокола и завершающего слеша: denisenkosergey.ru/curveball */
export const hostOf = (url: string) => {
  const { host, pathname } = new URL(url)
  return host + pathname.replace(/\/$/, '')
}
