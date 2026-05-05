'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'
import SectionHeading from './SectionHeading'
import styles from './Skills.module.css'

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="skills" ref={ref}>
      <SectionHeading num="04" title="Skills" />
      <div className={styles.grid}>
        {data.skills.map((s) => (
          <div key={s.name} className={styles.row}>
            <span className={styles.name}>{s.name}</span>
            <div className={styles.barBg}>
              <div
                className={styles.bar}
                style={{ width: animated ? `${s.pct}%` : '0%' }}
              />
            </div>
            <span className={styles.pct}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}
