import { Header } from '../components/Header/Header.jsx'
import { Search } from '../components/Search/Search.jsx'
import { Filter } from '../components/Filter/Filter.jsx'
import { ListCountrys } from '../components/ListCountrys/ListCountrys.jsx'
import { useState, useEffect } from 'react'

export const Main = () => {
    const [searchResults, setSearchResults] = useState(null)
    const [searchTerms, setSearchTerms] = useState('')
    const [filteredRegion, setFilteredRegion] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://restcountries.com/v3.1/all'
                const response = await fetch(url)
                const data = await response.json()

                let filteredData = data

                if (searchTerms.trim()) {
                    const searchTermLowerCase = searchTerms.trim().toLowerCase(); // Convertir la búsqueda a minúsculas
                    filteredData = filteredData.filter(elem => elem.name.common.toLowerCase().includes(searchTermLowerCase));
                }

                if (filteredRegion && filteredRegion !== 'All') {
                    filteredData = filteredData.filter(elem => elem.region === filteredRegion)
                }

                setSearchResults(filteredData)
            } catch (error) {
                console.error('Error en el fetching de datos', error)
            }
        }

        fetchData()
    }, [searchTerms, filteredRegion]) // Asegúrate de incluir filteredRegion en las dependencias del efecto

    const handleSearch = (searchTerms) => {
        setSearchTerms(searchTerms.toLowerCase()); // Convertir la búsqueda a minúsculas antes de establecerla
    }

    const handleRegionChange = (region) => {
        setFilteredRegion(region);
    }

    return (
        <>
            <Header />
            <Search onSearch={handleSearch} />
            <Filter onRegionChange={handleRegionChange} />
            <ListCountrys searchResults={searchResults} />
        </>
    )
}

