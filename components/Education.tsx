import { data } from '@/lib/data'
import SectionHeading from './SectionHeading'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <SectionHeading num="02" title="Education" />
      {data.education.map((e) => (
        <div key={e.school} className={styles.card}>
          <p className={styles.degree}>{e.degree}</p>
          <h3 className={styles.school}>{e.school}</h3>
          <p className={styles.meta}>{e.meta}</p>
          <p className={styles.desc}>{e.desc}</p>
        </div>
      ))}
    </section>
  )
}
