import { CountryPage } from '../components/CountryPage/CountryPage.jsx'
import { dataPromise } from "../utils/fetchData.js"

export const Country = () => {
  return (
    <CountryPage data={dataPromise}/>
  )
}
