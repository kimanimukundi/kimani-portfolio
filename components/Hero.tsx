'use client'
import { data } from '@/lib/data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <h1 className={styles.name}>
        {data.name.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h1>
      <p className={styles.tagline}>
        {data.tagline.map((t, i) => (
          <span key={i}>
            {t}{i < data.tagline.length - 1 && <span className={styles.dot}> • </span>}
          </span>
        ))}
      </p>
      <div className={styles.stats}>
        {data.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button
          className={styles.btnPrimary}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          VIEW MY WORK
        </button>
        <button
          className={styles.btnOutline}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          GET IN TOUCH
        </button>
      </div>
      <div className={styles.scroll}>
        <span>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
      <div className={styles.sideEmail}>{data.email}</div>
    </section>
  )
}
