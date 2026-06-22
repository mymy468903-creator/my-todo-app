export function DreamItem({ dream, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${dream.done ? 'done' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          id={`dream-${dream.id}`}
          checked={dream.done}
          onChange={() => onToggle(dream.id)}
        />
        <label htmlFor={`dream-${dream.id}`} className="todo-text">
          {dream.text}
        </label>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(dream.id)}
        aria-label="削除"
      >
        ×
      </button>
    </li>
  )
}
