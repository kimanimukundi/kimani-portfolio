'use client'
import { useState } from 'react'
import { data } from '@/lib/data'
import SectionHeading from './SectionHeading'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className={styles.section} id="contact">
      <SectionHeading num="05" title="Contact" />
      <div className={styles.grid}>
        <div className={styles.info}>
          <p>Looking for an internship where I can contribute and grow. If you have a project, opportunity, or just want to connect — reach out.</p>
          <a className={styles.detail} href={`mailto:${data.email}`}>{data.email}</a>
          <span className={styles.detail}>{data.phone}</span>
          <a className={styles.detail} href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">{data.github}</a>
          <span className={styles.detail}>{data.location}</span>
        </div>
        <div className={styles.form}>
          <div className={styles.field}>
            <label>NAME</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className={styles.field}>
            <label>EMAIL</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className={styles.field}>
            <label>MESSAGE</label>
            <textarea placeholder="What's on your mind?" />
          </div>
          <button className={styles.btn} onClick={() => setSent(true)}>SEND MESSAGE</button>
          {sent && <p className={styles.sent}>✓ Message sent!</p>}
        </div>
      </div>
    </section>
  )
}
