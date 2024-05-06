import { useState } from "react"
import './index.css'
export const Search = ({onSearch}) => {
  const [searchTerms, setSearchTerms] = useState([])

  const handleChange = (e) =>{
    setSearchTerms(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit = () =>{
    onSearch(searchTerms)
    console.log(searchTerms)
  }
  const handleForm = (e) =>{
    e.preventDefault()
  }
  return (
    <form className="country-form" action="submit" onSubmit={handleForm}>
        <input className="country-form-search" onChange={handleChange} type="search" id="search" name="search" placeholder="Spain,Afghanistan,Canada,United States..."/>
        <button className="country-form-btn" onClick={handleSubmit}>🔎</button>
    </form>
  )
}
