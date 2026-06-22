import { useEffect, useMemo, useState } from 'react'
import { STORAGE_KEY } from '../utils/constants'

const loadDreams = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const useDreams = () => {
  const [dreams, setDreams] = useState(loadDreams)

  // ローカルストレージに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dreams))
  }, [dreams])

  // 実現済み数を計算
  const realizedCount = useMemo(
    () => dreams.filter((dream) => dream.done).length,
    [dreams],
  )

  // やりたいことを追加
  const addDream = (text) => {
    const trimmedText = text.trim()
    if (!trimmedText) return

    setDreams((current) => [
      { id: Date.now(), text: trimmedText, done: false },
      ...current,
    ])
  }

  // 実現状態を切り替え
  const toggleDream = (id) => {
    setDreams((current) =>
      current.map((dream) =>
        dream.id === id ? { ...dream, done: !dream.done } : dream,
      ),
    )
  }

  // やりたいことを削除
  const deleteDream = (id) => {
    setDreams((current) => current.filter((dream) => dream.id !== id))
  }

  return {
    dreams,
    realizedCount,
    addDream,
    toggleDream,
    deleteDream,
  }
}
