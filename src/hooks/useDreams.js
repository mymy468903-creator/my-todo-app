import { useEffect, useMemo, useState } from 'react'
import { STORAGE_KEY, TASK_TYPES } from '../utils/constants'

const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const useTasks = () => {
  const [tasks, setTasks] = useState(loadTasks)

  // ローカルストレージに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // タスクタイプごとにフィルタ
  const dreams = useMemo(() => tasks.filter((t) => t.type === TASK_TYPES.DREAM), [tasks])
  const todos = useMemo(() => tasks.filter((t) => t.type === TASK_TYPES.TODO), [tasks])

  // 完了数を計算
  const dreamCompletedCount = useMemo(
    () => dreams.filter((d) => d.done).length,
    [dreams],
  )
  const todoCompletedCount = useMemo(
    () => todos.filter((t) => t.done).length,
    [todos],
  )

  // タスクを追加
  const addTask = (text, type) => {
    const trimmedText = text.trim()
    if (!trimmedText) return

    setTasks((current) => [
      { id: Date.now(), text: trimmedText, type, done: false },
      ...current,
    ])
  }

  // 完了状態を切り替え
  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  // タスクを削除
  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return {
    tasks,
    dreams,
    todos,
    dreamCompletedCount,
    todoCompletedCount,
    addTask,
    toggleTask,
    deleteTask,
  }
}
