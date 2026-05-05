'use client'
import { data } from '@/lib/data'
import styles from './Navbar.module.css'

const sections = [
  { id: 'about', label: 'ABOUT', num: '01.' },
  { id: 'education', label: 'EDUCATION', num: '02.' },
  { id: 'projects', label: 'PROJECTS', num: '03.' },
  { id: 'skills', label: 'SKILLS', num: '04.' },
  { id: 'contact', label: 'CONTACT', num: '05.' },
]

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {data.initials}<span>.</span>
      </button>
      <div className={styles.links}>
        {sections.map((s) => (
          <button key={s.id} className={styles.link} onClick={() => scrollTo(s.id)}>
            <span className={styles.num}>{s.num}</span> {s.label}
          </button>
        ))}
      </div>
      <a className={styles.resumeBtn} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        RESUME
      </a>
    </nav>
  )
}
