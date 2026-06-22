import { LABELS } from '../utils/constants'

export function Stats({ dreamCount, dreamCompleted, todoCount, todoCompleted }) {
  const totalCount = dreamCount + todoCount
  const totalCompleted = dreamCompleted + todoCompleted

  return (
    <section className="stats-card">
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-title">{LABELS.total}</p>
          <p className="stat-value">{totalCount} 件</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">{LABELS.completed}</p>
          <p className="stat-value">{totalCompleted} 件</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">{LABELS.dreams}</p>
          <p className="stat-value">{dreamCompleted}/{dreamCount}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">{LABELS.todos}</p>
          <p className="stat-value">{todoCompleted}/{todoCount}</p>
        </div>
      </div>
    </section>
  )
}
