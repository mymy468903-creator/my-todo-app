import { useEffect, useMemo, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'todo-app-items'

const loadTodos = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.done).length,
    [todos],
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = text.trim()
    if (!value) {
      return
    }

    setTodos((current) => [
      { id: Date.now(), text: value, done: false },
      ...current,
    ])
    setText('')
  }

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Todo リスト</p>
        <h1>今日やること</h1>
        <p className="subtitle">スマホで使いやすいTodoアプリです。追加、完了、削除ができます。</p>
      </header>

      <section className="input-card">
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="todoInput" className="sr-only">
            Todoを入力
          </label>
          <input
            id="todoInput"
            className="todo-input"
            type="text"
            placeholder="例: 買い物に行く"
            value={text}
            onChange={(event) => setText(event.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="add-button">
            追加する
          </button>
        </form>
      </section>

      <section className="stats-card">
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-title">合計</p>
            <p className="stat-value">{todos.length} 件</p>
          </div>
          <div className="stat-card">
            <p className="stat-title">完了</p>
            <p className="stat-value">{completedCount} 件</p>
          </div>
        </div>
      </section>

      <section className="todo-list-card">
        {todos.length === 0 ? (
          <p className="empty-state">Todoがありません。まずはタスクを追加しましょう。</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <label className="todo-row">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className={`todo-text ${todo.done ? 'done' : ''}`}>
                    {todo.text}
                  </span>
                </label>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
