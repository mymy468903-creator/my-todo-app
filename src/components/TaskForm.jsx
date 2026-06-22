import { useState } from 'react'
import { APP_CONFIG, LABELS, MESSAGES, TASK_TYPES, TASK_TYPE_OPTIONS } from '../utils/constants'

export function TaskForm({ onSubmit }) {
  const [text, setText] = useState('')
  const [type, setType] = useState(TASK_TYPES.DREAM)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(text, type)
    setText('')
  }

  return (
    <section className="input-card">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskInput" className="sr-only">
            {LABELS.todoInput}
          </label>
          <input
            id="taskInput"
            className="todo-input"
            type="text"
            placeholder={APP_CONFIG.inputPlaceholder}
            value={text}
            onChange={(event) => setText(event.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <div className="type-selector">
            {TASK_TYPE_OPTIONS.map((option) => (
              <label key={option.value} className="type-option">
                <input
                  type="radio"
                  name="taskType"
                  value={option.value}
                  checked={type === option.value}
                  onChange={(e) => setType(e.target.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="add-button">
          {MESSAGES.add}
        </button>
      </form>
    </section>
  )
}
