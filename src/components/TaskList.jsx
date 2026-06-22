import { TaskItem } from './TaskItem'
import { MESSAGES, LABELS, TASK_TYPES } from '../utils/constants'

export function TaskList({ dreams, todos, onToggle, onDelete }) {
  const hasDreams = dreams.length > 0
  const hasTodos = todos.length > 0

  if (!hasDreams && !hasTodos) {
    return (
      <section className="todo-list-card">
        <p className="empty-state">やりたいこともTODOも追加されていません。思いついたことを追加しましょう！</p>
      </section>
    )
  }

  return (
    <>
      {hasDreams && (
        <section className="todo-list-card">
          <h2 className="list-title">{LABELS.dreams}</h2>
          {dreams.length === 0 ? (
            <p className="empty-state">{MESSAGES.emptyDream}</p>
          ) : (
            <ul className="todo-list">
              {dreams.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          )}
        </section>
      )}

      {hasTodos && (
        <section className="todo-list-card">
          <h2 className="list-title">{LABELS.todos}</h2>
          {todos.length === 0 ? (
            <p className="empty-state">{MESSAGES.emptyTodo}</p>
          ) : (
            <ul className="todo-list">
              {todos.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  )
}
