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

      <h3 className={styles.otherTitle}>Other Noteworthy Projects</h3>
      <div className={styles.grid}>
        {data.otherProjects.map((p) => (
          <div key={p.title} className={styles.gridCard}>
            <div className={styles.gridTop}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className={styles.gridIcons}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h4 className={styles.gridTitle}>{p.title}</h4>
            <p className={styles.gridDesc}>{p.desc}</p>
            <div className={styles.gridTags}>
              {p.tags.map((t) => <span key={t} className={styles.gridTag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
