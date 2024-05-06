import { Link } from 'react-router-dom'
import Countrys from '../../assets/Countrys2.jpg'
import "./index.css"
export const HomePage = () => {
  return (
    <div className='country-homepage-wrap'>
      <main className='country-homepage-main'>
          <h1 className='country-homepage-h1'>Welcome, to <span>Look for a Country!</span></h1>
          <img className='country-homepage-img' src={Countrys} alt="Imagen de los continentes y sus paises." />
          <Link className='country-homepage-link' to={'/RestCountryApi/countrys'}>Go to Countrys</Link>
          <hr />
      </main>
    </div>
  )
}
