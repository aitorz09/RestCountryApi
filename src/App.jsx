
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Main } from './pages/Main.jsx'
import { Country } from './pages/Country.jsx'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/RestCountryApi' element={<Home/>}/>
      <Route path='/RestCountryApi/countrys' element={<Main/>}/>
      <Route path='/RestCountryApi/countrys/:ccn3' element={<Country/>}/>
    </Routes>
    </>
  )
}

export default App
