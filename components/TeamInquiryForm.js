import { useState } from 'react'
import styles from '../styles/teams.module.css'

const TEAM_SIZES = [
  { value: '1-4', label: '1–4 人' },
  { value: '5-10', label: '5–10 人' },
  { value: '11-20', label: '11–20 人' },
  { value: '21+', label: '21 人以上' }
]

const EMPTY_FORM = {
  teamName: '',
  contactName: '',
  email: '',
  teamSize: '',
  notes: ''
}

const NOTES_LIMIT = 1000

function sizeLabel(value) {
  return TEAM_SIZES.find((size) => size.value === value)?.label || value
}

export default function TeamInquiryForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const response = await fetch('/api/team-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.ok) {
        setStatus('error')
        setError(data.error || '提交没有成功，请稍后再试。')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setError('网络连接出现问题，请稍后再试。')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.formCard} role="status" aria-live="polite">
        <div className={styles.success}>
          <span className={styles.successBadge} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.5 12.5 9.5 17.5 19.5 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className={styles.successTitle}>已收到你的询价</h3>
          <p className={styles.successText}>
            我们会在 2 个工作日内通过邮件联系你，确认团队规模与年度安排。
          </p>
          <dl className={styles.summary}>
            <div className={styles.summaryItem}>
              <dt className={styles.summaryLabel}>团队名称</dt>
              <dd className={styles.summaryValue}>{form.teamName}</dd>
            </div>
            <div className={styles.summaryItem}>
              <dt className={styles.summaryLabel}>联系人</dt>
              <dd className={styles.summaryValue}>{form.contactName}</dd>
            </div>
            <div className={styles.summaryItem}>
              <dt className={styles.summaryLabel}>邮箱</dt>
              <dd className={styles.summaryValue}>{form.email}</dd>
            </div>
            <div className={styles.summaryItem}>
              <dt className={styles.summaryLabel}>团队人数</dt>
              <dd className={styles.summaryValue}>
                {sizeLabel(form.teamSize)}
              </dd>
            </div>
          </dl>
          <div className={styles.successActions}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => {
                setForm(EMPTY_FORM)
                setStatus('idle')
              }}
            >
              提交新的询价
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.formHead}>
        <h3 className={styles.formTitle}>团队信息</h3>
        <p className={styles.formHint}>带 * 为必填项</p>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="teamName">
            团队名称 *
          </label>
          <input
            className={styles.input}
            id="teamName"
            name="teamName"
            type="text"
            value={form.teamName}
            onChange={handleChange}
            placeholder="例如：Northwind Studio"
            maxLength={120}
            autoComplete="organization"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contactName">
            联系人 *
          </label>
          <input
            className={styles.input}
            id="contactName"
            name="contactName"
            type="text"
            value={form.contactName}
            onChange={handleChange}
            placeholder="你的姓名"
            maxLength={80}
            autoComplete="name"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            工作邮箱 *
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            maxLength={200}
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="teamSize">
            团队人数 *
          </label>
          <select
            className={styles.select}
            id="teamSize"
            name="teamSize"
            value={form.teamSize}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              请选择团队人数
            </option>
            {TEAM_SIZES.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor="notes">
            需求说明
          </label>
          <textarea
            className={styles.textarea}
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="团队当前的重点、希望解决的问题，或对年度安排的具体要求。"
            maxLength={NOTES_LIMIT}
            rows={5}
          />
          <div className={styles.notesHint}>
            <span>可以留空，我们会在沟通时补充确认。</span>
            <span>
              {form.notes.length}/{NOTES_LIMIT}
            </span>
          </div>
        </div>
      </div>

      {status === 'error' ? (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      ) : null}

      <div className={styles.formFooter}>
        <button
          className={styles.submit}
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? '提交中…' : '提交询价'}
        </button>
        <p className={styles.privacy}>表单信息仅用于本次询价沟通。</p>
      </div>
    </form>
  )
}
