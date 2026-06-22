import './App.css'
import { useTasks } from './hooks/useDreams'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { Stats } from './components/Stats'
import { TaskList } from './components/TaskList'

function App() {
  const {
    dreams,
    todos,
    dreamCompletedCount,
    todoCompletedCount,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks()

  return (
    <main className="app-shell">
      <Header />
      <TaskForm onSubmit={addTask} />
      <Stats
        dreamCount={dreams.length}
        dreamCompleted={dreamCompletedCount}
        todoCount={todos.length}
        todoCompleted={todoCompletedCount}
      />
      <TaskList
        dreams={dreams}
        todos={todos}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </main>
  )
}

export default App
