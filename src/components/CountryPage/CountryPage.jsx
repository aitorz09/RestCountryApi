import { Header } from "../Header/Header.jsx";
import { Link, useParams } from "react-router-dom";
import './index.css';
import { dataPromise } from '../../utils/fetchData.js';
import { useEffect, useState } from "react";

export const CountryPage = () => {
    const [Country, setCountry] = useState(null); // Initialize state to hold country data
    const { ccn3 } = useParams();

    useEffect(() => {
        // Fetch data when component mounts
        const fetchData = async () => {
            try {
                const data = await dataPromise;
                const country = data.find(elem => elem.ccn3 === ccn3);
                setCountry(country);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            // Any cleanup code if needed
        };
    }, [ccn3]); // Run effect whenever ccn3 changes

    if (!Country) {
        return <div>Loading...</div>; // Render loading indicator while data is being fetched
    }

    return (
        <>
            <Header />
            <main className="country-page-main">
                <Link className="country-page-link" to={"/RestCountryApi/countrys"}>Go Back</Link>
                <section className="country-img-wrap">
                    <img className="country-page-flag" src={Country.flags.png} alt="" />
                </section>
                <section className="countr-page-info">
                    <h1>{Country.name.common}</h1>
                    <div>
                        <p>Native Name: <span>{Country.name.official}</span></p>
                        <p>Population: <span>{Country.population}</span></p>
                        <p>Region: <span>{Country.region}</span></p>
                        <p>Sub Region: <span>{Country.subregion}</span></p>
                        <p>Capital: <span>{Country.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span>{Country.tld[0]}</span></p>
                        <p>Currencies:
                            {Country.currencies ? (
                                Object.keys(Country.currencies).map(key => (
                                    <span key={key}> {Country.currencies[key].name}</span>
                                ))
                            ) : (<span>No se encontraron monedas</span>)}
                        </p>

                        <p>Languages:{Country.languages ? (
                            Object.keys(Country.languages).map(key => (
                                <span key={key}> {Country.languages[key]}</span>
                            ))
                        ) : (<span>No se encontraron lenguages</span>)}</p>
                    </div>
                    <h2>Border Countries:</h2>
                    <section className="country-page-borders">
                        {
                            Country.borders ? Country.borders.map((elem, index) => (
                                <p className='country-page-border' key={index}>{elem}</p>
                            )) : <span>No borders found for this country.</span>
                        }
                    </section>
                </section>
            </main>
        </>
    );
};
