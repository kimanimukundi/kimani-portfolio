import styles from './SectionHeading.module.css'

export default function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <h2 className={styles.heading}>
      <span className={styles.num}>{num}.</span> {title}
    </h2>
  )
}
