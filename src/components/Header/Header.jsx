import { Link } from "react-router-dom"
import './index.css'

export const Header = () => {
  return (
    <header className="header-header">
        <h1 className="header-h1">Where in the world</h1>
        <p aria-label='Not working for the moment...'  className="header-p"><span className="material-symbols-outlined">dark_mode</span>Dark Mode</p>
        <Link className="header-link-goHome" to={"/RestCountryApi"}>Go home</Link>
    </header>
  )
}
