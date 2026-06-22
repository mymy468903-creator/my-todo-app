import './App.css'
import { useDreams } from './hooks/useDreams'
import { Header } from './components/Header'
import { DreamForm } from './components/DreamForm'
import { Stats } from './components/Stats'
import { DreamList } from './components/DreamList'

function App() {
  const { dreams, realizedCount, addDream, toggleDream, deleteDream } = useDreams()

  return (
    <main className="app-shell">
      <Header />
      <DreamForm onSubmit={addDream} />
      <Stats total={dreams.length} realized={realizedCount} />
      <DreamList
        dreams={dreams}
        onToggle={toggleDream}
        onDelete={deleteDream}
      />
    </main>
  )
}

export default App
