export function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.done ? 'done' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          id={`task-${task.id}`}
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <label htmlFor={`task-${task.id}`} className="todo-text">
          {task.text}
        </label>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="削除"
      >
        ×
      </button>
    </li>
  )
}
