/**
 * Все данные резюме лежат здесь. Чтобы обновить сайт, достаточно поправить этот файл.
 */
import photo from '../assets/photo.jpg'
import retrolaunchShot from '../assets/retrolaunch.jpg'
import profitCaseShot from '../assets/profitcase.jpg'
import curveballShot from '../assets/curveball.jpg'

export type IconName = 'architecture' | 'rollout' | 'code' | 'lead'

export interface Service {
  title: string
  text: string
  icon: IconName
}

export interface Job {
  period: string
  company: string
  role: string
  text: string[]
  projects?: string[]
}

export interface Education {
  period: string
  title: string
  place: string
  text: string
}

export interface Skill {
  name: string
  details?: string
  level: number
}

export interface Project {
  name: string
  url: string
  github: string
  summary: string
  description: string
  tags: string[]
  preview: string
}

export const resume = {
  name: 'Денисенко Сергей',
  firstName: 'Сергей',
  lastName: 'Денисенко',
  roles: ['Lead Frontend', 'Руководитель фронтенд-разработки'],
  photo,
  // Возраст считается от даты рождения, как на старом сайте
  birthDate: new Date(1992, 5, 11),
  // С этого года считается стаж
  careerStart: 2015,
  sberSince: 2018,
  leadSince: 2021,
  status: 'Открыт к предложениям',

  about: [
    'Руковожу фронтенд-разработкой и отвечаю за архитектуру, команду и вывод продуктов в промышленную эксплуатацию. Более десяти лет в разработке, с 2021 года — в роли руководителя.',
    'Участвую во всех этапах жизненного цикла продукта: от обсуждения задачи с заказчиком и согласования требований до проектирования, реализации и внедрения. Имею практический опыт обеспечения информационной безопасности ПО.',
    'Выстраиваю эффективную коммуникацию с командой, смежными подразделениями и заказчиком. Мне особенно интересны задачи на стыке технологий, людей и бизнеса: развитие команд, процессов и технической стратегии продукта.',
  ],

  personal: {
    citizenship: 'Российская Федерация',
    city: 'Москва',
    email: 'denisenkosfedu@gmail.com',
    phone: '+7 (918) 503-65-50',
  },

  services: [
    {
      title: 'Управление командой',
      text: 'Планирую и распределяю работу, провожу ретроспективы, помогаю коллегам расти и сохранять мотивацию. Отвечаю за качество кода через код-ревью и участвую в найме.',
      icon: 'lead',
    },
    {
      title: 'Архитектура',
      text: 'Проектирую архитектуру фронтенд-приложений с нуля и согласовываю интеграции со смежными командами.',
      icon: 'architecture',
    },
    {
      title: 'Разработка',
      text: 'Разрабатываю новую функциональность и развиваю существующую на React и Redux. Быстро собираю MVP для проверки продуктовых гипотез.',
      icon: 'code',
    },
    {
      title: 'Внедрение',
      text: 'Провожу продукт через приёмо-сдаточные испытания и вывожу в промышленную эксплуатацию в соответствии со стандартами банка, включая требования кибербезопасности. Разбираю инциденты на промышленных стендах.',
      icon: 'rollout',
    },
  ] satisfies Service[],

  projects: [
    {
      name: 'Retrolaunch',
      url: 'https://retrolaunch.denisenkosergey.ru/',
      github: 'https://github.com/fAtliNg/retrolaunch',
      summary: 'Классические ПК-игры прямо в браузере',
      description:
        'Каталог классических компьютерных игр, которые запускаются прямо в браузере без установки: DOOM, Freedoom, Rogue, Colossal Cave, Micropolis, OpenTTD и другие. DOS-игры работают через эмулятор js-dos, остальные — как браузерные порты.',
      tags: ['React', 'TypeScript', 'RTK Query', 'Vite', 'js-dos', 'WebAssembly'],
      preview: retrolaunchShot,
    },
    {
      name: 'Profit Case',
      url: 'https://profit-case.ru',
      github: 'https://github.com/fAtliNg/invest',
      summary: 'Инструменты для частного инвестора',
      description:
        'Сервис для планирования и проверки инвестиционных стратегий. Калькулятор сложного процента с регулярными пополнениями прогнозирует рост капитала и визуализирует его на графиках. Также доступны кредитный калькулятор и котировки.',
      tags: ['Next.js', 'React', 'MUI', 'Финансы'],
      preview: profitCaseShot,
    },
    {
      name: 'Curveball',
      url: 'https://denisenkosergey.ru/curveball/',
      github: 'https://github.com/fAtliNg/gaming-portal/tree/master/games/curveball',
      summary: 'Ремейк классической Flash-игры',
      description:
        'Пинг-понг в трёхмерном туннеле против компьютера. Движение ракетки в момент удара закручивает мяч, и он летит по дуге; с каждым уровнем игра становится сложнее. Есть таблица рекордов, звук и полноэкранный режим.',
      tags: ['React', 'TypeScript', 'styled-components', 'Игровая физика'],
      preview: curveballShot,
    },
  ] satisfies Project[],

  experience: [
    {
      period: '2021 — настоящее время',
      company: 'ПАО Сбер',
      role: 'Lead Frontend',
      text: [
        'Руковожу командой фронтенд-разработки и отвечаю за техническое направление продуктов: архитектуру, качество кода, планирование, найм и развитие сотрудников.',
        'Запускаю MVP для проверки гипотез, вывожу продукты в промышленную эксплуатацию и развиваю их вместе с бизнесом.',
      ],
      projects: [
        'PWA-версия личного кабинета СберМобайл',
        'SberUnity',
        'Навык заказа лекарств для Салюта (ЕАптека)',
        'Навык логистики для Салюта (СберЛогистика)',
        'Портал ДЗО',
      ],
    },
    {
      period: '2018 — 2021',
      company: 'ПАО Сбер',
      role: 'Senior Frontend-developer',
      text: [
        'Разрабатывал фронтенд-микросервисы АС ЦАРС: настраивал сборку проекта и активно участвовал в DevOps-процессах, развивал библиотеку компонентов, интегрировал систему с ОАД и SbolPRO, настроил версионирование пакетов и публикацию в Nexus, реализовывал бизнес-функциональность.',
      ],
    },
    {
      period: '2015 — 2018',
      company: 'НИИ Спецвузавтоматика',
      role: 'Fullstack-developer',
      text: [
        'Участвовал в ряде успешно реализованных проектов по государственному заказу на стеке React, Redux, Python, C++ и Qt.',
        'Изучал вопросы информационной безопасности, регулярно посещал профильные конференции.',
      ],
    },
  ] satisfies Job[],

  education: [
    {
      period: '2009 — 2015',
      title: 'Высшее образование',
      place: 'Южный федеральный университет',
      text: 'Факультет математики, механики и компьютерных наук',
    },
  ] satisfies Education[],

  skills: [
    { name: 'React', level: 100 },
    { name: 'Redux', details: 'Redux Toolkit, RTK Query, Redux-Saga, Redux Form', level: 100 },
    { name: 'TypeScript / JavaScript', level: 100 },
    { name: 'Процессы и инструменты', details: 'ООП, Agile, Scrum, Git, Jira', level: 90 },
    { name: 'ОС и инфраструктура', details: 'Windows, Linux, macOS, Nginx, OpenShift, Docker', level: 85 },
    { name: 'Непрерывная интеграция', details: 'Jenkins, TeamCity', level: 80 },
  ] satisfies Skill[],

  knowledge: [
    'React',
    'Redux',
    'TypeScript',
    'Redux Form',
    'React Final Form',
    'Redux-Saga',
    'Styleguidist',
    'Windows',
    'Linux',
    'macOS',
    'Nginx',
    'OpenShift',
    'Docker',
    'Jenkins',
    'ООП',
    'Agile',
    'Scrum',
    'Git',
    'Jira',
  ],
}

export function getAge(birthDate: Date, today = new Date()): number {
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--
  return age
}
