import { data } from '@/lib/data'
import SectionHeading from './SectionHeading'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <SectionHeading num="01" title="About Me" />
      <div className={styles.grid}>
        <div className={styles.text}>
          {data.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div>
          <p className={styles.techTitle}>TECHNOLOGIES I WORK WITH</p>
          <ul className={styles.techList}>
            {data.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
