import { APP_CONFIG } from '../utils/constants'

export function Header() {
  return (
    <header className="app-header">
      <p className="eyebrow">やりたいこと</p>
      <h1>{APP_CONFIG.title}</h1>
      <p className="subtitle">{APP_CONFIG.subtitle}</p>
    </header>
  )
}
