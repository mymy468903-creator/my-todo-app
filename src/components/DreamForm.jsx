import { useState } from 'react'
import { APP_CONFIG, LABELS, MESSAGES } from '../utils/constants'

export function DreamForm({ onSubmit }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(text)
    setText('')
  }

  return (
    <section className="input-card">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="dreamInput" className="sr-only">
          {LABELS.todoInput}
        </label>
        <input
          id="dreamInput"
          className="todo-input"
          type="text"
          placeholder={APP_CONFIG.inputPlaceholder}
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="add-button">
          {MESSAGES.add}
        </button>
      </form>
    </section>
  )
}
