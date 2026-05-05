import { data } from '@/lib/data'
import SectionHeading from './SectionHeading'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionHeading num="03" title="Projects" />
      <div className={styles.list}>
        {data.projects.map((p) => (
          <div key={p.num} className={styles.card}>
            <div className={styles.num}>{p.num}</div>
            <div className={styles.inner}>
              <p className={styles.label}>{p.label}</p>
              <h3 className={styles.title}>{p.title}</h3>
              {p.highlight && <div className={styles.highlight}>{p.highlight}</div>}
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              {p.links.length > 0 && (
                <div className={styles.links}>
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      ↗ {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
