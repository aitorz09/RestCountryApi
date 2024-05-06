import { useEffect, useState } from 'react'
import { Country } from '../Country/Country.jsx'
import './index.css'
export const ListCountrys = ({ searchResults }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://restcountries.com/v3.1/all';
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, [],countries);

    return (
      <ul className='countries-grid'>
          {countries.length === 0 && !searchResults ? (
              <p>Not Found</p>
          ) : (
              searchResults ? (
                  <Country country={searchResults} />
              ) : (
                  <Country country={countries} />
              )
          )}
      </ul>
  )}

