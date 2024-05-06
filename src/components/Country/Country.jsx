import './index.css'
export const Country = ({country}) => {
    if(country.length === 0){
        return <p>Not Found</p>
    }
    return (
        country.map((elem,index)=>{
     return  <li className='country-wrap-li' key={index}>
            <article className='country-article'>
             <a href={`/country/${elem.ccn3}`}>
                <img className='country-img' src={elem.flags.png} alt={elem.name} />
             </a>
                <h2 className='country-h2'>{elem.name.common}</h2>
                <div className='country-info'> 
                    <p className='country-p'>Population: <span>{elem.population}</span></p>
                    <p className='country-p'>Region: <span>{elem.region}</span> </p>
                    <p className='country-p'>Capital: <span>{elem.capital}</span> </p>
                </div>
            </article>
        </li>
    })
  )
}


    
    