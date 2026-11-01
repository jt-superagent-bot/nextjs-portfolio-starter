import Link from 'next/link'
import styles from '../styles/teams-entry.module.css'

export default function TeamsEntry() {
  return (
    <div className={`${styles.entry} nx-not-prose`} lang="zh-CN">
      <div className={styles.copy}>
        <p className={styles.kicker}>团队年框</p>
        <p className={styles.title}>为 5–20 人团队准备的年度协作方案</p>
        <p className={styles.text}>
          年度规划工作坊、季度交付评审、专属沟通渠道与团队工作区，$1,990 / 年。
        </p>
      </div>
      <Link href="/teams" className={styles.link}>
        查看团队年框
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
