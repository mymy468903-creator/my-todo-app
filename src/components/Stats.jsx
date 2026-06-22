import { LABELS } from '../utils/constants'

export function Stats({ total, realized }) {
  return (
    <section className="stats-card">
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-title">{LABELS.total}</p>
          <p className="stat-value">{total} 件</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">{LABELS.completed}</p>
          <p className="stat-value">{realized} 件</p>
        </div>
      </div>
    </section>
  )
}
