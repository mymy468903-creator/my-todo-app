// ローカルストレージキー
export const STORAGE_KEY = 'dream-todo-items'

// アプリケーション設定
export const APP_CONFIG = {
  title: 'KotoLog',
  subtitle: '「したい」と「すべき」を、この一つに。',
  inputPlaceholder: 'WISHまたはTODOを入力...',
}

// メッセージ
export const MESSAGES = {
  emptyDream: 'WISHはまだありません。思いついたことをどんどん追加しましょう！',
  emptyTodo: 'TODOはまだありません。やることを追加しましょう！',
  add: '追加する',
}

// ラベル
export const LABELS = {
  total: '全体',
  completed: '完了',
  todoInput: 'タスクを入力',
  dreams: 'WISH',
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
  { value: 'dream', label: 'WISH' },
  { value: 'todo', label: 'TODO' },
]
