// ローカルストレージキー
export const STORAGE_KEY = 'dream-todo-items'

// アプリケーション設定
export const APP_CONFIG = {
  title: 'やりたいこととTODO',
  subtitle: 'やりたいこととやること（TODO）をメモしておく。実現に向けて一歩ずつ進もう。',
  inputPlaceholder: 'やりたいことまたはTODOを入力...',
}

// メッセージ
export const MESSAGES = {
  emptyDream: 'やりたいことはまだありません。思いついたことをどんどん追加しましょう！',
  emptyTodo: 'TODOはまだありません。やることを追加しましょう！',
  add: '追加する',
}

// ラベル
export const LABELS = {
  total: '全体',
  completed: '完了',
  todoInput: 'タスクを入力',
  dreams: 'やりたいこと',
  todos: 'TODO',
  dreamCompleted: '実現済み',
  todoCompleted: '完了',
}

// タスクタイプ
export const TASK_TYPES = {
  DREAM: 'dream',
  TODO: 'todo',
}

export const TASK_TYPE_OPTIONS = [
  { value: 'dream', label: 'やりたいこと' },
  { value: 'todo', label: 'TODO' },
]
