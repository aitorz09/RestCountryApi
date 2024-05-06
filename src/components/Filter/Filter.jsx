import { useState } from "react"
import './index.css'
export const Filter = ({onRegionChange}) => {
    const [selectedRegion, setSelectedRegion] = useState(null)
    const handleChange = (e) =>{
        setSelectedRegion(e.target.value)
        onRegionChange(e.target.value)
    }
    return (
            <section className="country-filter">
                <select name="region" id="region" onChange={handleChange}>
                    <optgroup label="Region">
                        <option value="All">Filter by region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </optgroup>
                </select>
            </section>
  )
}
