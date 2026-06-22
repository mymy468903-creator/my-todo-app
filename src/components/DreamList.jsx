import { DreamItem } from './DreamItem'
import { MESSAGES } from '../utils/constants'

export function DreamList({ dreams, onToggle, onDelete }) {
  if (dreams.length === 0) {
    return (
      <section className="todo-list-card">
        <p className="empty-state">{MESSAGES.empty}</p>
      </section>
    )
  }

  return (
    <section className="todo-list-card">
      <ul className="todo-list">
        {dreams.map((dream) => (
          <DreamItem
            key={dream.id}
            dream={dream}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  )
}
