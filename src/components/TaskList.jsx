import { TaskItem } from './TaskItem'
import { MESSAGES, LABELS, TASK_TYPES } from '../utils/constants'

export function TaskList({ dreams, todos, onToggle, onDelete }) {
  // 未完了と完了済みを分ける
  const incompleteDreams = dreams.filter((d) => !d.done)
  const completedDreams = dreams.filter((d) => d.done)
  const incompleteTodos = todos.filter((t) => !t.done)
  const completedTodos = todos.filter((t) => t.done)

  const hasAnyTasks = dreams.length > 0 || todos.length > 0

  if (!hasAnyTasks) {
    return (
      <section className="todo-list-card">
        <p className="empty-state">WISHもTODOも追加されていません。思いついたことを追加しましょう！</p>
      </section>
    )
  }

  return (
    <>
      {/* 未完了のWISH */}
      {incompleteDreams.length > 0 && (
        <section className="todo-list-card">
          <h2 className="list-title">{LABELS.dreams}</h2>
          <ul className="todo-list">
            {incompleteDreams.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </section>
      )}

      {/* 未完了のTODO */}
      {incompleteTodos.length > 0 && (
        <section className="todo-list-card">
          <h2 className="list-title">{LABELS.todos}</h2>
          <ul className="todo-list">
            {incompleteTodos.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </section>
      )}

      {/* 完了済みのWISH */}
      {completedDreams.length > 0 && (
        <section className="todo-list-card completed-section">
          <h2 className="list-title">完了済みWISH</h2>
          <ul className="todo-list">
            {completedDreams.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </section>
      )}

      {/* 完了済みのTODO */}
      {completedTodos.length > 0 && (
        <section className="todo-list-card completed-section">
          <h2 className="list-title">完了済みTODO</h2>
          <ul className="todo-list">
            {completedTodos.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
